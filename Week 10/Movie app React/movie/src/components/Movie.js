import React from "react";

const IMG_API = "https://image.tmdb.org/t/p/w1280";

const Movie = ({overview, poster_path, title, vote_average}) => 
<div className="movie">
    <img src={IMG_API + poster_path} alt={title} />
    <div className="movie_info">
        <h3>{title}</h3>
        <span>{vote_average}</span>
    </div>
    <div className="movie_overview">
        <h2>Overview:</h2>
        <p>{overview}</p>
    </div>
</div>;


export default Movie;