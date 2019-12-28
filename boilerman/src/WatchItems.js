import React from 'react'

const WatchItems = ({watchItems}) => {
  const watchItemList = watchItems.length ? (
    watchItems.map(item => {
      return(
        <div className="collection-item">
          <span> {item.name} </span>
        </div>
      )
    })
  ) : (
    <p className="center"> Nothin is on your Watch List</p>
  )
  return (
    <div className="watchitems collection">
      {watchItemList}
    </div>
  )
}


export default WatchItems