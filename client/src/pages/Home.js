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
    fetch(
      "https://opengraph-io.p.rapidapi.com/api/1.1/sites?url=http%3A%2F%2Fwww.cnn.com&max_cache_age=432000000",
      {
        method: "GET",
        headers: {
          "x-rapidapi-key":
            "57edf28d4fmsh046dee6d8c6be2fp116f03jsnf6899b32e536",
          "x-rapidapi-host": "opengraph-io.p.rapidapi.com",
        },
      }
    )
      .then((response) => {
        response.json().then((data) => {
          console.log(data.htmlInferred.title);
        });
      })
      .catch((err) => {
        console.error(err);
      });
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
