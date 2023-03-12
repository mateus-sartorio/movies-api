import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import { ReviewForm } from "../review_form";
import { movieType } from "../../types/movieType";
import { reviewType } from "../../types/reviewType";

export const Reviews = () => {
    // const revText = useRef();
    const { movieId } = useParams();

    const templateMovie: movieType = {
        imdbId: "",
        poster: "",
        title: "",
        backdrops: [""],
        trailerLink: "",
    };
    const [ movie, setMovie ] = useState(templateMovie);
    
    const templateReviews: reviewType[] = [
        {
            body: "",
            id: "",
        },
    ];
    const [ reviews, setReviews ] = useState(templateReviews);

    const getMovieData = async (movieId: string | undefined) => {
        try {
            if (movieId === undefined)
                throw new Error("Movie undefined");

            const response = await fetch(`http://192.168.100.35:8080/api/v1/movies/${movieId}`);
            const singleMovie = await response.json();
            setMovie(singleMovie);
            setReviews(singleMovie.reviewIds);
        }
        catch(err) {
            console.error(err);
        }
    }

    const addReview = async (review: string) => {
        await fetch(`http://192.168.100.35:8080/api/v1/reviews`, {
            method: "POST", 
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(
                {
                    reviewBody: review,
                    imdbId: movieId
                }
            ),
        });

        getMovieData(movieId);
    }

    useEffect(() => {
        getMovieData(movieId);
    }, []);
    
    return (
        <Container>
            <Row>
                <Col><h3>Reviews</h3></Col>
            </Row>
            <Row className="mt-2">
                <Col>
                    <img src={movie?.poster} alt="movie poster"/>
                </Col>
                <Col>
                    <Row>
                        <Col>
                            <ReviewForm
                                movieId={movieId}
                                title={movie.title}
                                addReview={addReview}
                                reviews={reviews}
                            />
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <hr/>
                        </Col>
                    </Row>
                    {
                            [...reviews].reverse().map((r, i) => {
                            const { body, id } = r;
                            return (
                                <div key={i}>
                                    <Row>
                                        <Col>{body}</Col>
                                    </Row>
                                    <Row>
                                        <Col>
                                            <hr/>
                                        </Col>
                                    </Row>
                                </div>
                            );
                        })
                    }
                </Col>
            </Row>
        </Container>
    );
}
