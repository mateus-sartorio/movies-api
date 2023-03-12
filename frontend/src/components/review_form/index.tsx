import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { reviewType } from "../../types/reviewType";

import "./index.css";

interface propsType {
    movieId: string | undefined; 
    title: string;
    addReview: any;
    reviews: reviewType[];
}

export const ReviewForm = (props: propsType) => {
    const { title, addReview } = props;

    const [ review, setReview ] = useState("");
    
    return (
        <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea">
                <Form.Label>{title}</Form.Label>
                <Form.Control
                    as="textarea"
                    rows={3} 
                    placeholder="Leave your review here"
                    value={review}
                    onChange={
                        (e: any) => {
                            e.preventDefault();
                            setReview(e.target.value);
                        }
                    }
                />
            </Form.Group>
            <Button variant="outline-info" onClick={() => addReview(review)}>Submit</Button>
        </Form>
    );
}
