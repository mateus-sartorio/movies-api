import { useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import { ReviewForm } from "../review_form";
import { movieType } from "../../types/movieType";

interface propsType {
    getMovieData: (movieId: string | undefined) => any;
    movie: movieType;
    reviews: any[];
    setReviews: any[];
}

export const Reviews = (props: propsType) => {
    const { getMovieData, movie, reviews, setReviews } = props;

    const revText = useRef();
    const params = useParams();
    const movieId = params.movieId;
    
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
                    <img src={movie?.poster} alt=""/>
                </Col>
                <Col>
                    <Row>
                        <Col>
                            <ReviewForm
                                handleSubmit={addReview}
                                revText={revText}
                                labelText={labelText}
                            />
                        </Col>
                    <Row>
                </Col>
            </Row>
        </Container>
    );
}
