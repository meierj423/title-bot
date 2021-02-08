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
          placeholder={"e.g. www.cnn.com"}
          name="query"
          onChange={handleInputChange}
          required
        />
      </Form.Group>
      <div className="search-btn">
        <Button variant="primary" type="submit" onClick={handleFormSubmit}>
          Find Title
        </Button>
      </div>
    </Form>
  );
}

export default FormComp;
