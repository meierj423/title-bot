/** @format */

import axios from "axios";
export default {
  // Gets website title from the third-party API
  getTitle: function (query) {
      console.log(query);
    return axios.get("/api/titles", { query: query });
  }
};
