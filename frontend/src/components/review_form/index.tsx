import { Form, Button } from "react-bootstrap";

import "./index.css";

export const ReviewForm = (props: any) => {
    const { handleSubmit, revText, labelText, defaultValue } = props;

    return (
        <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea">
                <Form.Label>{labelText}</Form.Label>
                <Form.Control ref={revText} as="textarea" rows={3} defaultValue={defaultValue}/>
            </Form.Group>
            <Button variant="outline-info" onClick={handleSubmit}>Submit</Button>
        </Form>
    );
}
