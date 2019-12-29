const initState = {
  posts: [ 
  { name:"Chanel 1", description:"Celine AW 17", bids:21, id:1, score:11 },
  { name:"Karl Design  2", description:"AW 18",bids:21, id:2, score:4 },
  { name:"Karl 3", description:"Wangfest SS 18",bids:201, id:3, score:5 },
]
}

const rootReducer = (state = initState, action) =>{
  if( action.type === 'DELETE_POST'){
    let newPosts = state.posts.filter((post) => {
      return action.id !== post.id
    });
    return{
      ...state,
      posts: newPosts
    }
  }
  return state;
}

export default rootReducer;