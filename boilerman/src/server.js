const fs = require('fs');
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');


const app = express();
const port = process.env.PORT || 3005;
const server = app.listen(port);
const http = require('http').Server(app);
const io = require('socket.io').listen(server);
const bidDuration = 3600;
const startTime = process.hrtime();

let ART_DETAILS_FILE = path.join(__dirname, 'art_details.json');
let BID_HISTORY_FILE = path.join(__dirname, 'bid_history.json');

app.use(express.static(path.join(__dirname,'client/build')));
//serves statics

//client connects, socket callback function to log onto socket
io.on('cnnection', (socket)=>{
  console.log("line 27 server and user connected");

  socket.on('getTime', (msg) => {
    io.emit('remainingTime',(bidDuration-process.hrtime(startTime)[0]));
  });
  //socket paths
  socket.on('disconnect', () =>{
    console.log('user disconnected');
  });

});


app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

//express application interface endpoints
//gets the item details
app.get('/api/details', (req, res) => {
  
  fs.readFile(ITEM_DETAILS_FILE, (err,data) =>{
    if(err){
      console.error(err);
      process.exit(1);
    }
    res.setHeader('Cache-Control','no-cache');
    res.json(JSON.parse(data)); 
    //turns response json object into a javascript readable object

  });
});

//endpoint to get the bidHistory
app.get('/api/bidhistroy', (req,res) => {
  fs.readFile(BID_HISTORY_FILE, (err, data) => {
    if(err){
      console.error(err);
      process.exit(1);
    }

    res.setHeader('Cache-Control', 'no-cache');
    res.json(JSON.parse(data));
  });
});


//posts=create
app.post('/api/bidhistory',(req,res) =>{
  //stringify converts js string to be converted to JSON "string keys" instead of standard object keys
  fs.writeFile(BID_HISTORY_FILE, JSON.stringify(req.body), (err) =>{
    if(err){
      console.error(err);
      process.exit(1);
    }
    //save success post
    io.emit('updatedBid', req.body);
    res.setHeader('Cache-Control', 'no-cache');
    res.json(req.body);
  });
});

app.get('*',(req,res) => {
  //path.join is much better than path.resolve
  res.sendFile(path.join(__dirname+'/client/build/index.html'));
});

console.log(`Auction App Server listens on port ${port}`);
