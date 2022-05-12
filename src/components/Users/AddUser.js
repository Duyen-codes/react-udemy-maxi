import React, { useState } from "react";
import Card from "../UI/Card";
import classes from "./AddUser.module.css";
import Button from "../UI/Button";

const AddUser = (props) => {
  const [enteredUsername, setEnteredUsername] = useState("");
  const [enteredAge, setEnteredAge] = useState("");

  const addUserHandler = (event) => {
    event.preventDefault();
    console.log("add user");
    // check if any of name or age field is empty when form submit
    if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {
      return;
    }
    if (+enteredAge < 1) {
      return;
    }
    console.log(enteredAge, enteredUsername);
    setEnteredUsername("");
    setEnteredAge("");
  };

  const usernameChangeHandler = (event) => {
    setEnteredUsername(event.target.value);
    console.log("name change handler");
  };

  const ageChangeHandler = (event) => {
    setEnteredAge(event.target.value);
    console.log("age change handler");
  };

  return (
    <Card className={classes.input}>
      <form onSubmit={addUserHandler}>
        <label htmlFor="username">Username</label>
        <input
          type="text"
          onChange={usernameChangeHandler}
          id="username"
          name="username"
          value={enteredUsername}
        />
        <label htmlFor="age">Age</label>
        <input
          type="number"
          onChange={ageChangeHandler}
          id="age"
          name="age"
          value={enteredAge}
        />
        <Button type="submit">Add User</Button>
      </form>
    </Card>
  );
};

export default AddUser;
