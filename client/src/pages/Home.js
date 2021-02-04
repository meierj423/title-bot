import React from "react";
import { Container, Row, Col } from "react-bootstrap/";
import JumbotronComp from "../componenets/Jumbotron";
// import CardComp from "../componenets/Card";
// import FormComp from "../componenets/Form";
// import { List } from "../componenets/List";

function Home() {
  return (
    <Container>
      <Row>
        <Col>
          <JumbotronComp />
        </Col>
      </Row>
    </Container>
  );
}

export default Home;
