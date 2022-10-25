import React, { useState } from 'react'
import ReactCardFlip from "react-card-flip";

export default function Card(props) {
    const [isFlipped, setIsFlipped] = useState(false);
    return (
        <>
            <ReactCardFlip isFlipped={isFlipped} flipDirection='horizontal'>
                <div id="front" onClick={() => setIsFlipped((prev) => !prev)} style={{ backgroundImage: `url(${props.Poster})` }}></div>
                <div id="back" onClick={() => setIsFlipped((prev) => !prev)}>
                    <h3 id="movName">{props.name}</h3>
                    <h4 id="movYr" > Year : {props.Year}</h4>
                    <h4 id="imdbID"> IMDB : {props.imdbID}</h4>
                    <div id='btn' onClick={() => window.location.href = `https://www.youtube.com/results?search_query=${props.searchMovie}`}>▶</div>
                </div>
            </ReactCardFlip>
        </>
    )
}
