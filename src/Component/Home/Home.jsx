import React, { useState } from 'react'
import MoviesData from './HomeCarouselData.json'
import Heart from '../Fav/Heart'
import Fav from '../Fav/Fav'
import './Home.css'

export default function Home(props) {

  const [count, setCount] = useState(0)
  const [iframeSRC, setSRC] = useState()
  const [show, updateShow] = useState('hide')
  const [toggleCast, updateShowCast] = useState(-100)

  return (
    <>
      <Fav transVal={props.transVal} myFav={props.myFav} />

      <div onClick={() => toggleCast === 6 ? updateShowCast(-100) : null} className='container'>
        {
          MoviesData.Result.map(movie => {
            return <div className='movieDiv'
              style={{
                left: movie.left,
                transform: `translateX(-${count}00%)`,
                transition: '0.5s'
              }} key={movie.id}>

              <div id='poster' style={{ backgroundImage: `url(${movie.Poster})` }} >
                <button onClick={async () => {
                  await setSRC(movie.trailer)
                  updateShow('screenContainer')
                  updateShowCast(-100)
                }} className="play-btn"></button>

                <Heart movieName={movie.Title} favList={props.favList} removeFav={props.removeFav} />
              </div>

              <h1>{movie.Title}</h1>
              <h2>{`${movie.Year} Movie`}</h2>
              <p>{movie.storyline}</p>
              <button id='mainCast' className='castButton' onClick={() => { toggleCast === -100 ? updateShowCast(6) : updateShowCast(-100) }} >CASTS</button>
            </div>
          })
        }

        <button id='left' className='btns' onClick={() => count > 0 ? setCount(count - 1) || updateShowCast(-100) : setCount(9)}></button>
        <button id='right' className='btns' onClick={() => count < 9 ? setCount(count + 1) || updateShowCast(-100) : setCount(0)}></button>

        <div className={show}>
          <div onClick={() => {
            updateShow('hide')
            setSRC(null)
          }} id='backButton'>⬅</div>

          <iframe width="100%" height="90%" title='youtube video' src={iframeSRC} frameBorder="0"></iframe>
        </div>

        {
          MoviesData.Result.map(movie => {
            return <div key={movie.id} className='castBox' style={{
              left: movie.left,
              transform: `translateX(-${count}00%)`,
              bottom: `${toggleCast}%`
            }}>

              {
                movie.cast.map(casts => {
                  return <div key={casts.name} id="casts">
                    <div onClick={() => { window.location.href = `https://www.google.com/search?q=${casts.name}&rlz=1C1CHWL_enIN1021IN1021&oq=tom&aqs=chrome.1.69i59l3j69i57j46i20i263i433i512j69i61l3.4294j0j7&sourceid=chrome&ie=UTF-8` }}
                      id='castImage' style={{ backgroundImage: `url('${casts.pic}')` }}>
                      <h5>{casts.name}</h5>
                    </div>
                    <br />
                    <br />
                  </div>
                })
              }
            </div>
          })
        }
      </div>
    </>
  )
}