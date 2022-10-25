import React, { useState } from 'react'
import './About.css'

export default function About() {

    const [brightness, updateBrightness] = useState('rgb(209, 209, 209)')
    const [fontColor, updateFontColor] = useState('black')
    const [emoji, updateEmoji] = useState('🌚')

    return (
        <>
            <div id='aboutCont' style={{ background: `${brightness}`, color: `${(fontColor)}` }}>

                <a href={'https://github.com/Aman-Dhyani'}><div id='imageCircle'></div></a>
                <h1 id='hi'>Hi, I Am Aman</h1>
                <h1 id='hi'>Hi, I Am Aman</h1>
                <span id='hand' >🖐</span>
                <h2 id='about'>I develop Responsive and interactive UIs</h2>
                <div className='portf' onClick={() => window.location.href = 'https://github.com/Aman-Dhyani'} id="git" ></div>
                <div className='portf' onClick={() => window.location.href = '#'} id="insta" ></div>
                <div className='portf' onClick={() => window.location.href = '#'} id="fb" ></div>

                <div style={{ fontSize: '30px' }} onClick={() => {
                    brightness === 'rgb(209, 209, 209)' ?
                        updateBrightness('black') || updateFontColor('rgb(209, 209, 209)') || updateEmoji('🌝')
                        : updateBrightness('rgb(209, 209, 209)') || updateFontColor('black') || updateEmoji('🌚')
                }} className='mode' id='toggleMode'>{emoji}</div>

                <div id='para'>
                    <p>This website based on Movies and Tv shows, in this website you can access any Movie and Tv shows summary, Trailers & posters,
                        This website use free Movies and Tv shows APIs so the data that you can access are less</p>
                </div>
            </div>
        </>
    )
}
