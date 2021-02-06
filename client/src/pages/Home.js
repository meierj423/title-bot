import React from "react";
import axios from "axios";
import { Container, Row, Col } from "react-bootstrap/";
import JumbotronComp from "../components/Jumbotron";
import FormComp from "../components/Form";
import ListComp from "../components/List";

const titlesArray = [];

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = { query: "", titles: ["example"] };
  }

  handleInputChange = (event) => {
    const { value } = event.target;
    this.setState({ query: value });
  };

  getTitle = () => {
    const options = {
      method: "GET",
      url: "https://opengraph-io.p.rapidapi.com/api/1.1/sites",
      params: { url: `http://${this.state.query}`, max_cache_age: "432000000" },
      headers: {
        "x-rapidapi-key": "57edf28d4fmsh046dee6d8c6be2fp116f03jsnf6899b32e536",
        "x-rapidapi-host": "opengraph-io.p.rapidapi.com",
      },
    };

    axios
      .request(options)
      .then(function (res) {
        const url_title = res.data.htmlInferred.title;
        console.log(url_title);
        titlesArray.push(url_title);
        console.log(titlesArray);
      })
      .catch(function (error) {
        console.error(error);
      });
  };
  handleFormSubmit = (event) => {
    event.preventDefault();
    this.getTitle();
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
        <Row>
          <Col>
            <ListComp titles={titlesArray}></ListComp>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Home;
