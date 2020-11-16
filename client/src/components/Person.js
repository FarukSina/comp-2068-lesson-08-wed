import React from "react";
import { Link } from "react-router-dom";
const Person = (props) => {
  return (
    <tr>
      <td>{props.people.name}</td>
      <td>{props.people.age}</td>
      <td>{props.people.gender}</td>
      <td>{props.people.date.substring(0, 10)}</td>
      <td>
        <Link to={"/people/" + props.people._id}>edit</Link> |
        <a
          href="#"
          onClick={() => {
            props.deletePerson(props.people._id);
          }}
        >
          delete
        </a>
      </td>
    </tr>
  );
};

export default Person;
