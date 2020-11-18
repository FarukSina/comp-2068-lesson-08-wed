import Axios from "axios";
import { SERVER_URL } from "../links";

export const getPerson = (id, callback) => {
  Axios.get("/people/" +id)
    .then((res) => {
      console.log("get person", res);
      callback(res.data);
    })
    .catch((err) => {
      console.error("error fetching the person", err.message);
    });
};