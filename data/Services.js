import axios from "axios";
//const axios = require("axios");

const BASE_URL = 'https://www.googleapis.com/youtube/v3/'
const YOUTUBE_KEY = "AIzaSyBbXDparJc7wF2JQRb3K3brqO-fA5iMO6E";

const GLOBAL_API = axios.create({
  timeout: 6 * 1000,
  baseURL: BASE_URL,
  params: {
    part: 'snippet',
    maxResults: 5,
    key: YOUTUBE_KEY
  }
})

/*
GLOBAL_API.interceptors.response.use(
  response => {
    if (!response || response.status !== 200) {
      return Promise.reject(response.data)
    } else {
      return Promise.resolve(response.data)
    }
  },
  failed => {
    console.warn(failed)
    HandleErrors(failed)
  }
)
*/

const HandleErrors = (error) => {
  //Alert.alert("ERRORE", JSON.stringify(error))
  if (error.response.status === 401) {

  }
}
export default Services = {

  search: (term = "placebo") => {

    return GLOBAL_API.get("/search", {
      params: {
        part: 'snippet',
        maxResults: 5,
        key: YOUTUBE_KEY,
        q: term
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


}
