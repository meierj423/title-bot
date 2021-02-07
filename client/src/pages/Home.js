import React, { Component } from "react";
import API from "../utils/API";
import { Container, Row, Col } from "react-bootstrap/";
import JumbotronComp from "../components/Jumbotron";
import FormComp from "../components/Form";
import ListComp from "../components/List";

let urlTitles = [];
class Home extends Component {
  state = { query: "", titles: [] };

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

  // getTitle = () => {
  //   const options = {
  //     method: "GET",
  //     url: "https://opengraph-io.p.rapidapi.com/api/1.1/sites",
  //     params: { url: `http://${this.state.query}`, max_cache_age: "432000000" },
  //     headers: {
  //       "x-rapidapi-key": "57edf28d4fmsh046dee6d8c6be2fp116f03jsnf6899b32e536",
  //       "x-rapidapi-host": "opengraph-io.p.rapidapi.com",
  //     },
  //   };

  //   axios
  //     .request(options)
  //     .then(function (res) {
  //       const url_title = res.data.htmlInferred.title;
  //       console.log(url_title);
  //       titlesArray.push(url_title);
  //       console.log(titlesArray);
  //     })
  //     .catch(function (error) {
  //       console.error(error);
  //     });
  //   this.setState({ titles: titlesArray });
  // };

  // getFakeTitle = () => {
  //   const input = this.state.query;
  //   console.log("current input", input);
  //   titlesArray.push(input);
  //   console.log("current title array", titlesArray);
  //   this.setState({ titles: titlesArray });
  // };

  handleFormSubmit = (event) => {
    event.preventDefault();
    this.getTitle();
    // this.getFakeTitle();
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
            <p>{this.state.title}</p>
            <ListComp titles={urlTitles}></ListComp>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Home;
