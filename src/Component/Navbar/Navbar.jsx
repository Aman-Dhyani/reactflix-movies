import React from 'react'
import { useNavigate } from 'react-router-dom'
import './Navbar.css'

export default function Navbar(props) {

  let navigate = useNavigate()

  let hamStyle = {
    color: 'white',
    position: 'absolute',
    fontSize: '17px',
    left: '90%',
    cursor: 'pointer',
  }

  return (
    <>
      <div className='navContainer'>
        <h1 onClick={() => navigate('/') || props.translater('0%')}>
          <abbr style={{ textDecoration: 'none' }} title="Home"> Home</abbr>
        </h1>

        <h1 onClick={() => navigate('/movies')}>
          <abbr style={{ textDecoration: 'none' }} title="Movies Page">Movies</abbr>
        </h1>

        <h1 onClick={() => navigate('/tvshows')}>
          <abbr style={{ textDecoration: 'none' }} title="Shows Page">TvShows</abbr>
        </h1>

        <h1 onClick={() => navigate('/about')}>
          <abbr style={{ textDecoration: 'none' }} title="About Page">About</abbr>
        </h1>

        <div onClick={() => props.updater('60%')} id='hamBar' style={hamStyle} >
          <abbr style={{ textDecoration: 'none' }} title="menu">☰</abbr>
        </div>
      </div>
    </>
  )
}
