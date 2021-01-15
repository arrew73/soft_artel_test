import React, {Suspense} from "react";
import {withRouter} from "react-router-dom";
import {getMovieInfo} from "../../API/postAPI";
import {MoviePage} from "./MoviePage";

export class MoviePageContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = null;

    }

    renderPage() {
        let movieID = +/\d+/.exec(this.props.match.params.id);
        this.setState(getMovieInfo(movieID).movieInfo)
    }

    componentDidMount() {
        this.renderPage()
    }
    componentWillUnmount(){}

    render() {
        return <>
            <Suspense fallback={<h3>Loading...</h3>}>
                <MoviePage movie={this.state}/>
            </Suspense>
        </>
    }
}

export const MoviePageWithRouter = withRouter(MoviePageContainer);
