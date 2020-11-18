import React from "react";
import classes from "./Person.module.css";
import { Link } from "react-router-dom";
const Person = (props) => {
  return (
    <tr>
      <td >{props.people.name}</td>
      <td>{props.people.age}</td>
      <td>{props.people.gender}</td>
      <td>{props.people.date.substring(0, 10)}</td>
      <td>
        <Link to={"/person/" + props.people._id}  className={` ${classes.actions} ${classes.border} btn btn-primary `}>edit</Link>
        <a
          href="#"
          onClick={() => {
            if (window.confirm("Are you sure to delete?")) {
              props.deletePerson(props.people._id)
            } else {
              window.alert = "You did not want to delete";
            }
          }}  className={`btn btn-danger ${classes.border}`}
        >
          delete
        </a>
      </td>
    </tr>
  );
};

export default Person;
