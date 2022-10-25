import React, { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Page404 from './Component/404 Page/Page404'
import About from './Component/About/About'
import Home from './Component/Home/Home'
import Menu from './Component/Menu/Menu'
import Movies from './Component/Movies/Movies'
import Navbar from './Component/Navbar/Navbar'
import TvShows from './Component/Tv show/TvShows'
import './App.css'

export default function App() {

  const [triggerMenu, updateTrigger] = useState('110%')

  function updater(value) {
    updateTrigger(value)
  }

  const [myFav, updateMyFav] = useState([]);

  function favList(movieName) {
    return myFav.includes(movieName) ? null : updateMyFav(arr => [...arr, `${movieName}`])
  }

  function removeFav(movieName) {
    if (myFav.includes(movieName)) {
      let x = 0, y = myFav.indexOf(movieName);
      [myFav[x], myFav[y]] = [myFav[y], myFav[x]];
      myFav.shift()
    }
  }

  const [transVal, updateTransVal] = useState('0%')

  function translater(val) {
    updateTransVal(val)
  }

  return (
    <>
      <Menu translater={translater} updater={updater} triggerMenu={triggerMenu} />
      <Navbar translater={translater} updater={updater} />
      <Routes>
        <Route path='/' element={<Home transVal={transVal} myFav={myFav} favList={favList} removeFav={removeFav} />} />
        <Route path='/movies' element={<Movies />} />
        <Route path='/tvshows' element={<TvShows />} />
        <Route path='/about' element={<About />} />
        <Route path='*' element={<Page404 />} />
      </Routes>
    </>
  )
}
