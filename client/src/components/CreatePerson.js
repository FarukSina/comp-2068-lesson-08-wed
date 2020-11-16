import {createPerson} from "../api/createPerson"
import React, { useState} from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import history from "../history";
const CreatePerson = () => {
  const [person, setPerson] = useState({
    name: "",
    age: 0,
    gender: "",
    date: new Date(),
  });

  const onChange = (e) => {
    const { value, name } = e.target;
    setPerson({ ...person, [name]: value });
  };

  const onChangeDate = (date) => {
    setPerson({ ...person, date });
  };

  const onSubmit = (e) => {
    e.preventDefault();

    const prsn = {
      name: person.name,
      age: person.age,
      gender: person.gender,
      date: person.date,
    };
    console.log("new person created", prsn);
    createPerson(prsn, (res) => {
    history.push("/");
    })
  };

  return (
    <div>
      <h3>Create New Person</h3>
      <form onSubmit={onSubmit}>
        <div className={"form-group"}>
          <label>Name : </label>
          <input
            required
            name="name"
            className="form-control"
            value={person.name}
            onChange={onChange}
          />
        </div>
        <div className="form-group">
          <label>Age: </label>
          <input
            name="age"
            type="text"
            required
            className="form-control"
            value={person.age}
            onChange={onChange}
          />
        </div>
        <div className="form-group">
          <label>Gender</label>
          <input
            name="gender"
            type="text"
            required
            className="form-control"
            value={person.gender}
            onChange={onChange}
          />
        </div>
        <div className="form-group">
          <label>Date :</label>
          <div>
            <DatePicker
              name="date"
              selected={person.date}
              onChange={onChangeDate}
            />
          </div>
        </div>
        <div className="form-group">
          <input
            type="submit"
            value="Create Person"
            className="btn btn-primary"
          />
        </div>
      </form>
    </div>
  );
};
export default CreatePerson;
