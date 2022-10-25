import React from 'react'
import { useNavigate } from 'react-router-dom'
import './Menu.css'

export default function Menu(props) {

    let navigate = useNavigate()

    return (
        <>
            <div style={{ left: `${props.triggerMenu}` }} id='menu'>
                <div onClick={() => props.updater('110%')} className='cross'>
                    <abbr style={{ textDecoration: 'none' }} title="close tab">❌</abbr>
                </div>
                <br />
                <br />
                <hr />
                <ul type='none'>
                    <li onClick={() => props.translater('100%')} className='menuAttributes'>
                        <abbr style={{ textDecoration: 'none' }} title="Only access by Home Page"> fAV 🧡</abbr>
                    </li>
                    <li onClick={() => navigate('/tvshows')} className='menuAttributes'>
                        <abbr style={{ textDecoration: 'none' }} title="Tvshows Page">Tv Shows</abbr>
                    </li>
                    <li className='menuAttributes'>
                        <details >
                            <a href='https://www.imdb.com/search/title/?title_type=feature&genres=action' ><p className='menuAttributesChild'> Action </p></a>
                            <a href='https://www.imdb.com/search/title/?&genres=sci_fi&explore=title_type,genres'><p className='menuAttributesChild'>Sci fi</p></a>
                            <a href='https://www.imdb.com/chart/top/'> <p className='menuAttributesChild'>Popular</p></a>
                            <summary >More Movies</summary>
                        </details>
                    </li>
                    <li onClick={() => navigate('/about')} className='menuAttributes'>
                        <abbr style={{ textDecoration: 'none' }} title="about Page">About Us</abbr>
                    </li>
                </ul>
            </div>
        </>
    )
}
