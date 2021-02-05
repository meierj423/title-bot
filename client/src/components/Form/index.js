import React from "react";
import { Form, Button } from "react-bootstrap";
import "./style.css";

function FormComp({ handleInputChange, handleFormSubmit, query }) {
  return (
    <Form className="form">
      <Form.Group>
        <Form.Control
          id="Title"
          type="text"
          value={query}
          placeholder={"Enter a URL here"}
          // name="query"
          onChange={handleInputChange}
          required
        />
      </Form.Group>
      <Button variant="primary" type="submit" onClick={handleFormSubmit}>
        Find Title
      </Button>
    </Form>
  );
}

export default FormComp;
