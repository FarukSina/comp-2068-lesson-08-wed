import React, { useState, useEffect} from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import history from "../history";
import {getPerson} from "../api/getPerson"
import {editPerson} from "../api/editPerson"
const EditPerson = (props) => {
  const [person, setPerson] = useState({
    id: 0,
    name: "",
    age: 0,
    gender: "",
    date: new Date(),
  });

  useEffect(() => {
      const id = props.match.params.id;
      console.log("HELLO", id)
      getPerson(id, (res) => {
          setPerson({
              id:res._id,
              name:res.name,
              age:res.age,
              gender:res.gender,
              date: new Date(res.date),
          });
      })
      
  }, [])
  console.log("New Person", person)


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
      id: person.id,
      name: person.name,
      age: person.age,
      gender: person.gender,
      date: person.date,
    };
    console.log("edited person", prsn);
    editPerson(person.id, prsn, (res) => {
    history.push("/");
    })
  };

  return (
    <div>
      <h3>Edit Person</h3>
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
            value="Update Person"
            className="btn btn-primary"
          />
        </div>
      </form>
    </div>
  );
};

export default EditPerson;
