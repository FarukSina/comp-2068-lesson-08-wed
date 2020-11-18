import React,{useEffect,useState} from 'react'
import {getPeople} from "../api/getPeople"
import axios from "axios"
import Person from "./Person"
import {SERVER_URL} from "../links"
export default function PeopleList() {

    const [people, setPeople] = useState([]);

    useEffect(() => {
        getPeople((value) =>
        setPeople((people) => [...value])
               )}, []);

//     useEffect(() => {
//        axios
//       .get("http://localhost:4000/people/")
//       .then((res) => {
//         setPeople(...res.data);
//       })
//       .catch((err) => {
//         console.log("Error", err);
//       });
//   }, []);
const deletePerson = (id) => {
    axios
      .post("/people/destroy/"+ id)
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => console.log("Error: " + err));
    setPeople(people.filter((el) => el._id !== id));
    console.log("People after delete", people);
  };
   
return (
    <div className="table-responsive">
      <h3>All People</h3>
      <table className="table" >
        <thead className="thead-light">
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Gender</th>
            <th>Date</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {people.map((p) => {
            return (
              <Person
                people={p}
                deletePerson = {deletePerson}
                key={p._id}
              />
            );
          })}
        </tbody>
      </table>
    </div>
  );
};