import { useState, useEffect } from "react";
import { Home } from "./components/home";

import "./App.css";
import { Header } from "./components/header";

export const App = () => {
    const [ movies, setMovies ] = useState([]);

    async function getMovies() {
        const response = await fetch("http://192.168.100.35:8080/api/v1/movies");
        const moviesArray = await response.json();
        console.log(moviesArray);
        setMovies(moviesArray);
    }

    useEffect(() => {
        getMovies();
    }, []);

    return (
        <div>
            <Header/>
            <Home movies={movies}/>
        </div>
    );
}
