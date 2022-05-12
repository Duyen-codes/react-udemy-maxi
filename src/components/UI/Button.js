import React from "react";
import classes from "./Button.module.css";

const Button = (props) => {
  return (
    <button className={classes.button} type="submit" name="submit">
      Add user
    </button>
  );
};

export default Button;
