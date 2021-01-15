import React from "react";
import styles from "./movipage.module.css";

export const MoviePage = ({movie}) => {
    if (movie === null) {
        return <h1>Loading...</h1>
    }
    let movieInfo = movie.read()
    return <div className={styles.movieInfo}>
        <div style={{textAlign:"center"}}>
            <img src={`https://image.tmdb.org/t/p/w500${movieInfo.backdrop_path}`} alt="poster"/>
        </div>
        <div className={styles.movieInfo_text}>
            <div style={{display:"flex",justifyContent:"space-between"}}>
                <strong>Название фильма: <b>{movieInfo.original_title}</b></strong>
                <strong>Рейтинг зрителей: {movieInfo.vote_average}</strong>
                <ul style={{marginTop:"0px"}}><strong>Жанр: </strong>{movieInfo.genres.map(item => <li key={item.id}>{item.name}</li>)}</ul>
            </div>
            <div><strong>Описание: </strong> <span>{movieInfo.overview}</span></div>
            <div><strong>Бюджет картины: </strong><span>{movieInfo.budget}</span><b>$</b></div>
        </div>
    </div>
}