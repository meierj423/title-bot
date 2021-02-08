import React, { Component } from "react";
import API from "../utils/API";
import { Container, Row, Col } from "react-bootstrap/";
import JumbotronComp from "../components/Jumbotron";
import FormComp from "../components/Form";
import ListComp from "../components/List";
import "./style.css";

let urlTitles = [];
let urlArray = [];
class Home extends Component {
  state = { query: "", titles: [], urls: [] };

  handleInputChange = (event) => {
    const { value } = event.target;
    this.setState({ query: value });
  };

  getTitle = () => {
    API.getTitle(this.state.query)
      .then((res) => {
        urlTitles.push(res.data);
        this.setState({ titles: urlTitles });
      })
      .catch(() => console.log("An error occured while retrieving data"));
  };

  handleFormSubmit = (event) => {
    event.preventDefault();
    this.getTitle();
    urlArray.push(this.state.query);
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
          <Col>
            <div className="form-title">Enter a URL Here</div>
          </Col>
        </Row>
        <Row>
          <Col>
            <FormComp
              handleInputChange={this.handleInputChange}
              handleFormSubmit={this.handleFormSubmit}
              query={this.state.query}
            />
          </Col>
        </Row>
        <Row>
          <Col>
            <ListComp titles={urlTitles} urls={urlArray}></ListComp>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Home;
