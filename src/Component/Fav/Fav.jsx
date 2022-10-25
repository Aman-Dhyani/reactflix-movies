import React from 'react'
import './Fav.css'

export default function Fav(props) {

  let list = props.myFav

  const favStyle = {
    height: '100vh',
    width: '100%',
    position: "absolute",
    background: 'white',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundImage: `url(${'https://static.vecteezy.com/system/resources/thumbnails/006/241/067/small/abstract-polygon-3d-triangle-yellow-geometric-background-free-photo.jpg'})`,
    backgroundSize: '100% 100%',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    left: '-100%',
    zIndex: '1',
    transition: '0.5s',
    transform: `translate(${props.transVal})`
  }

  return (
    <>
      <div style={favStyle} id="favCont">
        <h1 id='yourFavTitle'>Your Favorite Movies</h1>
        <ul>

          {
            list.length === 0 ? <h3>No Favorite List Found</h3> :
              list.map(item => {
                return <li id='allfavList' key={item.toString()}>{item}</li>
              })
          }
        </ul>
      </div>
    </>
  )
}
