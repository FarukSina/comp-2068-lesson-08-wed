import Axios from "axios";
import {SERVER_URL} from "../links"
export const createPerson = (data, callback) => {
  Axios.post(
    SERVER_URL + "people",
    data,
  )
    .then((res) => {
      console.log("createPerson res", res);
      callback(res.data);
    })
    .catch((err) => {
      callback(err.response.data);
      console.error("error createPerson", err.response);
    });
};