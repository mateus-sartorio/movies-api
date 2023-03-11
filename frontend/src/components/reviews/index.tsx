import { useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import { ReviewForm } from "../review_form";

export const Reviews = (props: any) => {
    const { getMovieData, movie, reviews, setReviews } = props;

    const revText = useRef();
    const params = useParams();
    const movieId = params.movieId;

    console.log(params);
    console.log(reviews);
    
    useEffect(() => {
        getMovieData(movieId);
    }, []);
    
    const addReview = async (e: any) => {
        e.preventDefault();
        const rev = revText.current;
    }

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
                                labelText="Write a Review?"
                                defaultValue=""
                            />
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <hr/>
                        </Col>
                    </Row>
                    {
                        reviews.map((r: any) => {
                            return (
                                <>
                                    <Row>
                                        <Col>{r.body}</Col>
                                    </Row>
                                    <Row>
                                        <Col>
                                            <hr/>
                                        </Col>
                                    </Row>
                                </>
                            );
                        })
                    }
                </Col>
            </Row>
        </Container>
    );
}
