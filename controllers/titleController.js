const axios = require("axios");

module.exports = {
  findTitle: function (req, res) {
    axios.get("https://url-title.now.sh/cnn.com").then(function (response) {
      // handle success
      console.log(response);
    });
  },
};
