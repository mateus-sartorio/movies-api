import Carousel from 'react-material-ui-carousel';
import { Paper } from '@mui/material';
import { movieType } from '../../types/movieType';
import './index.css';

interface propsType {
    movies?: movieType[];
}

export const Hero = (props: propsType) => {
    const { movies } = props;

    return (
        <div className="movie-carousel-container">
            <Carousel>
                {
                    movies?.map((movie, index) =>
                    { 
                        return <Paper key={index}>
                            <div className="movie-card-container">
                                <div className="movie-card" style={{backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0), rgba(0,0,0,1)), url(${movie.backdrops[0]})`}}>
                                    <div className="movie-detail">
                                        <div className="movie-poster">
                                            <img src={movie.poster} alt=""/>
                                        </div>
                                        <div className="movie-title">
                                            <h4>{movie.title}</h4>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Paper>
                    }
                    )
                }
            </Carousel>        
        </div>
    )
}
