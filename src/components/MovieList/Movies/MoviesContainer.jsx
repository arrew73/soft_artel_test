import React, {Suspense, useState} from "react";
import {Movies} from "./Movies";
import {getSortedMovieList, MoviesList} from "../../../API/postAPI";
import {Pagination} from "../../Pagination/Pagination";

export const MoviesContainer = () => {
    const [movieList,changeList] = useState(MoviesList());
    const [currentPage,changePage] = useState(1);

    const getSortedMovies = (page,sortedBy) => {
        changeList(getSortedMovieList(page,sortedBy))
    }

    return (
        <div>
            <Suspense fallback={<p>...Loading</p>}>
                <Movies page={currentPage} sortMovies={getSortedMovies} movies={movieList}/>
            </Suspense>
            <Pagination data={movieList} page={currentPage} onPageChanged={(e)=>{
                changePage(e)
                changeList(MoviesList(e))
            }}/>
        </div>
    )
}