import React from "react";
import { Card, Row, Col } from "react-bootstrap/";
import "./style.css";

function ListComp({ titles, urls }) {
  const urlsList = urls.map((url) => <li key={Math.random()}>{url}</li>);
  const titlesList = titles.map((title) => (
    <li key={Math.random()}>{title}</li>
  ));

  return (
    <div>
      <Card body className="card-body">
        <Row>
          <Col className="card-title">
            <h1>Search History</h1>
          </Col>
        </Row>
        <Row>
          <Col>
            <Row>
              <Col>
                <h4>URLs</h4>
              </Col>
            </Row>
            <Row>
              <Col>
                <ol>{urlsList}</ol>
              </Col>
            </Row>
          </Col>
          <Col md="auto">
            <Row>
              <Col>
                <h4>Titles</h4>
              </Col>
            </Row>
            <ol>{titlesList}</ol>
          </Col>
        </Row>
      </Card>
    </div>
  );
}

export default ListComp;
