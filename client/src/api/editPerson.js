import Axios from "axios";
import {SERVER_URL} from "../links"
export const editPerson = (id, data, callback) => {
  Axios.post(
    "/people/update/" + id,
    data,
  )
    .then((res) => {
      console.log("editPerson res", res);
      callback(res.data);
    })
    .catch((err) => {
      callback(err.response.data);
      console.error("error editPerson", err.response);
    });
};