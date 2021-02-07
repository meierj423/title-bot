const axios = require("axios").default;
export default {
  // Gets website title from the third-party API
  getTitle: function (q) {
    console.log(q);
    return axios.get("/api/opengraph", { params: { url: q } });
  },
};
