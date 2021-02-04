import React from "react";
import { Form, Button } from "react-bootstrap";

function FormComp({ handleInputChange, handleFormSubmit, query }) {
  return (
    <Form>
      <Form.Group>
        <Form.Label>
          <strong>URL</strong>
        </Form.Label>
        <Form.Control
          id="Title"
          type="text"
          //   value={query}
          placeholder="Enter a URL here"
          name="query"
          //   onChange={handleInputChange}
          required
        />
      </Form.Group>

      <Button variant="primary" type="submit" onClick={}>
        Get Title
      </Button>
    </Form>
  );
}

export default FormComp;
