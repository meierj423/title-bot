import React from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import Container from "react-bootstrap/Container";
import "./style.css";

function JumbotronComp() {
  return (
    <Jumbotron fluid>
      <Container>
        <div className="jumbotron-text">
          <h1>Title Bot</h1>
          <p>Search For Any Website Title Here!</p>
        </div>
      </Container>
    </Jumbotron>
  );
}

export default JumbotronComp;
