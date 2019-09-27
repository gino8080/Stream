import axios from "axios";
//const axios = require("axios");

//YOUTUBE DATA API DOCUMENTATIONS
//https://developers.google.com/youtube/v3/docs/
const BASE_URL = 'https://www.googleapis.com/youtube/v3/'

const YOUTUBE_KEY = require("../constants/apikey").default;


const defaultParams = {
  part: 'snippet',
  maxResults: 10,
  key: YOUTUBE_KEY
};

const GLOBAL_API = axios.create({
  timeout: 6 * 1000,
  baseURL: BASE_URL,
  params: defaultParams
})


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


const HandleErrors = (error) => {
  //Alert.alert("ERRORE", JSON.stringify(error))
  if (error.response.status === 401) {

  }
}
export default Services = {

  search: (term = "placebo") => {

    return GLOBAL_API.get("/search", {
      params: {
        ...defaultParams,
        q: term
      }
    })
      .then(function (response) {
        // handle success
        console.log("search ", response);

        return response.items

      })
  },

  categories: (regionCode = "IT") => {

    return GLOBAL_API.get("/videos", {
      params: {
        ...defaultParams,
        hl: "it_IT",
        regionCode,
        chart: "mostPopular"
      }
    })
      .then(function (response) {
        // handle success
        console.log("categories ", response);

        return response.items

      })
  },


}
