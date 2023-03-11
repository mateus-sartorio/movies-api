import Carousel from 'react-material-ui-carousel';
import { Paper } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCirclePlay } from '@fortawesome/free-solid-svg-icons';
import { Link, useNavigate } from 'react-router-dom';

import { movieType } from '../../types/movieType';
import './index.css';

interface propsType {
    movies?: movieType[];
}

export const Hero = (props: propsType) => {
    const { movies } = props;

    const navigate = useNavigate();

    return (
        <div className="movie-carousel-container">
            <Carousel>
                {
                    movies?.map((movie, index) =>
                    { 
                        const { trailerLink, title, poster, backdrops } = movie;
                        const trailerLinkKey = trailerLink.substring(trailerLink.length - 11); 
                        return <Paper key={index}>
                            <div className="movie-card-container">
                                <div className="movie-card" style={{backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0), rgba(0,0,0,1)), url(${backdrops[0]})`}}>
                                    <div className="movie-detail">
                                        <div className="movie-poster">
                                            <img src={poster} alt=""/>
                                        </div>
                                        <div className="movie-title">
                                            <h4>{title}</h4>
                                        </div>
                                        <div className="movie-buttons-container">
                                            <Link to={`/trailer/${trailerLinkKey}`}>
                                                <div className="play-button-icon-container">
                                                    <FontAwesomeIcon className="play-button-icon" icon={faCirclePlay}/>
                                                </div>
                                            </Link>
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
