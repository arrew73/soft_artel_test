import React, {Suspense} from "react";
import {MoviesContainer} from "./Movies/MoviesContainer";


export const MovieList = () => {
    return (
        <div>
            <div><span>Сортировка по:</span></div>
            <div>
                <Suspense fallback={<p>...loading</p>}>
                    <MoviesContainer/>
                </Suspense>
            </div>
        </div>
    )
}
