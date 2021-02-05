import React from "react";
import API from "../utils/API";
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

  getTitle = () => {
    API.getTitle(this.state.query).then((res) =>
      this.setState({ titles: res.data })
    );
  };
  handleFormSubmit = (event) => {
    event.preventDefault();
    fetch("http://www.omdbapi.com/?t=braveheart&apikey=bece18b9")
      .then((response) => response.json())
      .then((data) => console.log(data.Plot));
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
