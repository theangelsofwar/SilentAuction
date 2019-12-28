import React from 'react'

const WatchItems = ({watchItems, deleteWatchItem}) => {
  const watchItemList = watchItems.length ? (
    watchItems.map(item => {
      return(
        <div className="collection-item" key={watchItems.id}>
          <span onClick={() =>{deleteWatchItem(item.id)}}> {item.name} </span>
        </div>
      )
    })
  ) : (
    <p className="center"> Nothing is on your Wanted List</p>
  );
  return (
    <div className="watchitems collection">
      {watchItemList}
    </div>
  )
}


export default WatchItems