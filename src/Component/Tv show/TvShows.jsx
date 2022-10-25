import React, { useEffect, useState } from 'react'
import Page404 from '../404 Page/Page404'
import './TvShows.css'

export default function TvShows() {

  const [SearchInput, updateSearch] = useState("")
  const [searchMovie, updateSearchMovie] = useState("loki")
  const [TvShows, updateShow] = useState([])

  useEffect(() => {
    fetch(`http://api.tvmaze.com/search/shows?q=${searchMovie}`)
      .then(response => response.json())
      .then(data => { updateShow(data) })
      .catch(() => {
        console.log('failed to fetch');
      })
  }, [searchMovie])

  return (
    <>
      <div className='Cont'>
        <div id='blurback'></div>
        <div id="showsPageHead">
          <input id='searchBox' placeholder='Enter Tv Show' type={"text"} onChange={(e) => updateSearch(e.target.value)} />
          <button id='search' onClick={() => SearchInput === "" ? null : updateSearchMovie(SearchInput)}></button>
        </div>

        <div id='tvShowsBox'>
          {
            !TvShows ? <Page404 /> :
              TvShows.map(shows => {
                return <div id='shows' key={shows.show.id}>

                  <div id='showImg' style={{ backgroundImage: `url(${shows.show.image.original})` }}>
                    <div id='showsPlay-btn' style={{ fontSize: '45px', color: 'yellow' }}
                      onClick={() => window.location.href = shows.show.officialSite}>
                    </div>
                  </div>

                  <div id='shows-details-div'>
                    <p id='showName'>{shows.show.name}</p>
                    <p id='rating'>{`Rating : ${shows.show.rating.average}`}</p>
                    <p id='showLang'>{`language : ${shows.show.language}`}</p>
                    <p id='summary'>{shows.show.summary}</p>
                    <p id='genres'>{`Genres- ${shows.show.genres}`}</p>

                    <div onClick={() => window.location.href = shows.show.officialSite} id='hotStar'>HOT⭐ </div>
                  </div>
                </div>
              })
          }
        </div>
      </div>
    </>
  )
}
