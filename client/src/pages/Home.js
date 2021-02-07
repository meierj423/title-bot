import React, { Component } from "react";
import API from "../utils/API";
import { Container, Row, Col } from "react-bootstrap/";
import JumbotronComp from "../components/Jumbotron";
import FormComp from "../components/Form";
import ListComp from "../components/List";

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
        console.log(res.data);
        urlTitles.push(res.data);
        this.setState({ titles: urlTitles });
      })
      .catch(() => console.log("something went wrong with api call"));
  };

  handleFormSubmit = (event) => {
    event.preventDefault();
    this.getTitle();
    urlArray.push(this.state.query);
    console.log("urlArray: ", urlArray);
  };

  render() {
    console.log(urlTitles);
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
            <ListComp titles={urlTitles} urls={urlArray}></ListComp>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Home;
