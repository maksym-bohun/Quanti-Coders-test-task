import React from "react";
import classes from "./Form.module.scss";

const InputContainer = ({ children, id, type }) => {
  return (
    <div className={classes["input-container"]}>
      <label htmlFor={id}>{children}</label>
      <input type={type} id={id} />
    </div>
  );
};

export default InputContainer;
