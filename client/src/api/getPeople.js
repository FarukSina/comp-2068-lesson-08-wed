import axios from "axios";
import { SERVER_URL } from "../links";

export const getPeople = (callback) => {
  axios.get(SERVER_URL +"people")
    .then((res) => {
      console.log("get all people", res);
      callback(res.data);
    })
    .catch((err) => {
      console.error("error fetching all the people", err.message);
    });
};