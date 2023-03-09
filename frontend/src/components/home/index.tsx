import React, { useState, useEffect } from 'react'
import { Hero } from "../hero";
import { movieType } from '../../types/movieType';

interface propsType {
    movies?: movieType[];
}

export const Home = (props: propsType) => {
    const { movies } = props;

    return (
        <Hero movies={movies}/>
    )
}
