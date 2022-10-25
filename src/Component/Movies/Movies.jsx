import React, { useEffect, useState } from "react";
import Page404 from '../404 Page/Page404'
import Card from "./Card";
import './Movies.css'

export default function Movies() {

  const [SearchInput, updateSearch] = useState("")
  const [searchMovie, updateSearchMovie] = useState("thor")
  const [Movies, updateMovies] = useState([])

  useEffect(() => {
    fetch(`http://www.omdbapi.com/?s=${searchMovie}&apikey=263d22d8`)
      .then(response => response.json())

      .then((data) => {
        updateMovies(data.Search)
      })
      .catch(() => {
        console.log('failed to fetch');
      })
  }, [searchMovie])

  return (
    <div id='movieCont'>
      <div id="moviePageHead">
        <input id='searchInput' placeholder='Enter Movie' type={"text"} onChange={(e) => updateSearch(e.target.value)} />
        <button id='searchBar' onClick={() => SearchInput !== "" ? updateSearchMovie(SearchInput) : null}></button>
      </div>

      <div className="movieBox">

        {
          !Movies ? <Page404 /> :

            Movies.map((item, index) => (
              <div key={`card-${index}`} className='moviesdiv'>
                <Card project={item}
                  searchMovie={searchMovie}
                  imdbID={item.imdbID}
                  Year={item.Year}
                  Poster={item.Poster}
                  name={item.Title} />
              </div>
            ))
        }

      </div>
    </div>
  );
};








