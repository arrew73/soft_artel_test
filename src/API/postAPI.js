import * as axios from "axios";

const instance = axios.create({
    baseURL: "https://api.themoviedb.org/3/discover/"
})

async function getMovies(page) {
    const res = await instance.get(`movie?api_key=4237669ebd35e8010beee2f55fd45546&page=${page}`)
    return await res.data
}

async function getMovie(id) {
    const res = await axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=4237669ebd35e8010beee2f55fd45546`)
    return await res.data
}

async function getSortedMovies(page = 1, sortedBy) {
    if (sortedBy === "byPopularity") {
        const res = await instance.get(`movie?api_key=4237669ebd35e8010beee2f55fd45546&sort_by=popularity.desc&page=${page}`)
        return await res.data
    } else if (sortedBy === "byRating") {
        const res = await instance.get(`movie?api_key=4237669ebd35e8010beee2f55fd45546&sort_by=vote_count.desc&page=${page}`)
        return await res.data
    } else if (sortedBy === "byNewest") {
        const res = await instance.get(`movie?api_key=4237669ebd35e8010beee2f55fd45546&sort_by=primary_release_date.desc&page=${page}`)
        return await res.data
    }
}


const wrapPromise = (promise) => {
    let status = "pending";
    let result;
    const suspender = promise.then(
        res => {
            result = res;
            status = "success";
        },
        error => {
            result = error;
            status = "error";
        }
    )
    return {
        read() {
            if (status === "pending") {
                throw suspender;
            } else if (status === "error") {
                throw result;
            } else if (status === "success") {
                return result;
            }
        }
    }
}

export function getSortedMovieList(page, sortedBy) {
    return {
        movieList: wrapPromise(getSortedMovies(page, sortedBy))
    }
}

export function MoviesList(page = 1) {
    return {
        movieList: wrapPromise(getMovies(page)),
    }
}

export function getMovieInfo(id) {
    return {
        movieInfo: wrapPromise(getMovie(id))
    }
}