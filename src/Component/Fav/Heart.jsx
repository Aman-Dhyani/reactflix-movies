import React, { useState } from 'react'
import { useEffect } from 'react';

export default function Heart(props) {
    const [heart, updateHeart] = useState('white')

    useEffect(() => {
        setTimeout(() => {
            return heart === 'white' ? props.removeFav(props.movieName) : null
        }, 2000);
    })

    return (
        <>
            <div id='heart' onClick={() => {
                heart === 'white' ?
                    updateHeart('red') || props.favList(props.movieName)
                    : updateHeart('white') || props.removeFav(props.movieName);
            }}>
                <div style={{ backgroundColor: `${heart}` }} className='circle' id='circle1'></div>
                <div style={{ backgroundColor: `${heart}` }} className='circle' id='circle2'></div>
                <div style={{ backgroundColor: `${heart}` }} id='square' ></div>
            </div>
        </>
    )
}
