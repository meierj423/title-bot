const axios = require("axios").default;

module.exports = {
  findTitle: function (req, res) {
    const { query: params } = req;
    console.log("params", params.url);

    // var options = {
    //   method: "GET",
    //   url: "https://mlscrape-beta.p.rapidapi.com/v1/product",
    //   params: { url: `https://${params.url}` },
    //   headers: {
    //     "x-rapidapi-key": "57edf28d4fmsh046dee6d8c6be2fp116f03jsnf6899b32e536",
    //     "x-rapidapi-host": "mlscrape-beta.p.rapidapi.com",
    //   },
    // };

    // axios
    //   .request(options)
    //   .then((response) => res.json(response.data.name))
    //   .catch(function (error) {
    //     console.error(error);
    //   });
    const options = {
      method: "GET",
      url: "https://opengraph-io.p.rapidapi.com/api/1.1/sites",
      params: { url: `https://${params.url}` },
      headers: {
        "x-rapidapi-key": "57edf28d4fmsh046dee6d8c6be2fp116f03jsnf6899b32e536",
        "x-rapidapi-host": "opengraph-io.p.rapidapi.com",
      },
    };

    axios
      .request(options)
      .then((response) => res.json(response.data.htmlInferred.title))
      .catch((error) => {
        if (error.response) {
          console.log(error.response);
        }
      });
  },
};

// res.data.htmlInferred.title
