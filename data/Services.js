import axios from "axios";
import Tokens from "../constants/Tokens"
//const axios = require("axios");


export default Services = {

  categories: () => {

    return axios.get("https://api.spotify.com/v1/browse/categories", {
      headers: {
        "Authorization": "Bearer " + Tokens.access_token
      }
    })
      .then(function (response) {
        // handle success
        console.log("categories", response);

        return response.data.categories.items

      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
  },

  newReleases: () => {
    return axios.get("https://api.spotify.com/v1/browse/new-releases", {
      headers: {
        "Authorization": "Bearer " + Tokens.access_token
      }
    })
      .then(function (response) {
        // handle success
        console.log("categories", response);

        return response.data.albums.items

      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
  }

}
