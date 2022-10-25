import React from 'react'
import './Page404.css'
import { useNavigate } from 'react-router-dom'

export default function Page404() {
  let navigate = useNavigate()
  return (
    <>
      <div className="stars">
        <div className="central-body">
          <img className="image-404" src="http://salehriaz.com/404Page/img/404.svg" alt='error' width="300px" />
          <div onClick={() => navigate('/')} className="btn-go-home" target="_blank">GO BACK HOME</div>
        </div>
        
        <div className="objects">
          <img className="object_rocket" src="http://salehriaz.com/404Page/img/rocket.svg" alt='error' width="40px" />
          <div className="earth-moon">
            <img className="object_earth" src="http://salehriaz.com/404Page/img/earth.svg" alt='error' width="100px" />
            <img className="object_moon" src="http://salehriaz.com/404Page/img/moon.svg" alt='error' width="80px" />
          </div>

          <div className="box_astronaut">
            <img className="object_astronaut" src="http://salehriaz.com/404Page/img/astronaut.svg" alt='error' width="140px" />
          </div>
        </div>

        <div className="glowing_stars">
          <div className="star"></div>
          <div className="star"></div>
          <div className="star"></div>
          <div className="star"></div>
          <div className="star"></div>
        </div>
      </div>

    </>
  )
}
