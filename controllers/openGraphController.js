const axios = require("axios").default;

module.exports = {
  findTitle: function (req, res) {
    const { query: params } = req;
    const api_key = process.env.REACT_APP_OPENGRAPH_API_KEY;

    // These are the options the API needs to send a response
    const options = {
      method: "GET",
      url: "https://opengraph-io.p.rapidapi.com/api/1.1/sites",
      params: { url: `https://${params.url}` },
      headers: {
        "x-rapidapi-key": api_key,
        "x-rapidapi-host": "opengraph-io.p.rapidapi.com",
      },
    };

    //
    axios
      .request(options)
      .then((response) => {
        // The URL title data we need
        const urltitle = response.data.htmlInferred.title;
        res.json(urltitle);
      })
      .catch((error) => {
        if (error.response) {
          console.log(error.response);
        }
      });
  },
};
