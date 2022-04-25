import axios from "axios";

const instance = axios.create({
  baseURL: "http://146.56.187.171/",
  headers: {
    "content-type": "application/json;charset=UTF-8",
    accept: "application/json,",
    "Access-Control-Allow-Origin": "*",
  },
});

export default instance;
