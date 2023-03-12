import { useState, useEffect } from "react";
import { Home } from "./components/home";

import "./App.css";
import { Header } from "./components/header";
import { Routes, Route } from "react-router-dom";
import { Layout } from "./components/layout";
import { Trailer } from "./components/trailer";
import { Reviews } from "./components/reviews";
import { NotFound } from "./components/not_found";

export const App = () => {
    const [ movies, setMovies ] = useState([]);

    async function getMovies() {
        const response = await fetch("http://192.168.100.35:8080/api/v1/movies");
        const moviesArray = await response.json();
        setMovies(moviesArray);
    }

    useEffect(() => {
        getMovies();
    }, []);

    return (
        <div className="App">
            <Header/>
            <Routes>
                <Route path="/" element={<Layout/>}>
                    <Route path="/" element={<Home movies={movies}/>}/>
                    <Route path="/trailer/:ytTrailerId" element={<Trailer/>}/>
                    <Route path="/reviews/:movieId" element={<Reviews/>}/>
                    <Route path="*" element={<NotFound/>}/>
                </Route> 
            </Routes>
        </div>
    );
}
