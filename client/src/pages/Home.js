import React from "react";
import { Container, Row, Col } from "react-bootstrap/";
import JumbotronComp from "../componenets/Jumbotron";
// import CardComp from "../componenets/Card";
import FormComp from "../componenets/Form";
// import { List } from "../componenets/List";

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = { query: "", titles: [] };
  }

  handleInputChange = (event) => {
    const { value } = event.target;
    this.setState({ query: value });
    console.log(this.state.query);
  };

  handleFormSubmit = (event) => {
    event.preventDefault();
    console.log(this.state.query);
  };

  render() {
    return (
      <Container>
        <Row>
          <Col>
            <JumbotronComp />
          </Col>
        </Row>
        <Row>
          <FormComp
            handleInputChange={this.handleInputChange}
            handleFormSubmit={this.handleFormSubmit}
            query={this.state.query}
          />
        </Row>
      </Container>
    );
  }
}

export default Home;
