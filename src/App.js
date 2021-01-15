import './App.css';
import React from "react";
import {MovieList} from "./components/MovieList/MovieList";
import {NavLink, Redirect, Route, Switch} from "react-router-dom";
import {MoviePageWithRouter} from "./components/MoviePage/MoviePageContainer";

function App() {
  return (
    <div className="App">
        <button><NavLink to={"/home"}>Home</NavLink></button>
        <Switch>
            <Redirect exact from='/' to='/home'/>
            <Route path={"/home"} render={()=><MovieList />}/>
            <Route path={"/movie/:id?"} render={()=><MoviePageWithRouter />}/>
            <Route path='*' render={()=> <div>PAGE NOT FOUND</div>}/>
        </Switch>
    </div>
  );
}

export default App;
