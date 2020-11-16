import axios from "axios";

export const getPeople = (callback) => {
  axios.get("http://localhost:4000/people")
    .then((res) => {
      console.log("get all people", res);
      callback(res.data);
    })
    .catch((err) => {
      console.error("error fetching all the people", err.message);
    });
};