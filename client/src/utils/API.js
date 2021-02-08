const axios = require("axios").default;
export default {
  // Gets website title from the openGraph.io API
  getTitle: function (q) {
    return axios.get("/api/opengraph", { params: { url: q } });
  },
};
