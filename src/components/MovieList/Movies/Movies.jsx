import React, {useState} from "react";
import styles from "./movies.module.css";
import {NavLink} from "react-router-dom";
import picture from "../../../img/unknown.jpg";

export const Movies = (props) => {
    const [favorites, toggleFavorite] = useState([])
    let movies = props.movies.movieList.read().results;
    if (!movies) {
        return (<h1>...Loading</h1>)
    }
    return (<>
            <button onClick={() => {
                let sortedBy = "byPopularity"
                props.sortMovies(props.page, sortedBy)
            }}>Популярности
            </button>
            <button onClick={() => {
                let sortedBy = "byRating"
                props.sortMovies(props.page, sortedBy)
            }}>Рейтингу
            </button>
            <button onClick={() => {
                let sortedBy = "byNewest"
                props.sortMovies(props.page, sortedBy)
            }}>Новизне
            </button>
            <div className={styles.movies}>
                {movies.map(movie => <div className={styles.moviesItem} key={movie.id}>
                    {movie.poster_path ? <img style={{maxWidth: "150px", height: "200px"}}
                                              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                                              alt="poster"/> :
                        <img src={picture} alt="unknown" style={{maxWidth: "150px", height: "200px"}}/>}
                    <div className={styles.moviesItemText}>
                        <div><NavLink to={`movie/id${movie.id}`}>{movie.title}</NavLink></div>
                        {favorites.some(id => id === movie.id)
                            ? <div>
                                <button onClick={() => {
                                    const index = favorites.indexOf(movie.id)
                                    if(index > -1){
                                        toggleFavorite([favorites.splice(index)])
                                    }
                                console.log(favorites)}
                                }>Убрать</button>
                                <p>В избранном</p>
                            </div>
                            : <div>
                                <button onClick={() => toggleFavorite([...favorites, movie.id])}>В избранное</button>
                                <p>Не в избранном</p>
                            </div>}
                    </div>
                </div>)}
            </div>
        </>
    )
}