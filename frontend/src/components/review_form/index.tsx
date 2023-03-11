import { Form, Button } from "react-bootstrap";

import "./index.css";

interface propsType {
    handleSubmit: () => void;
    revText: any;
    labelText: string;
    defaultValue: string;
}

export const ReviewForm = (props: propsType) => {
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
