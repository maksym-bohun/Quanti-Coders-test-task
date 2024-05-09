import React from "react";
import classes from "./Form.module.scss";

const FormHeader = ({ children }) => {
  return <h1 className={classes["form__header"]}>{children}</h1>;
};

export default FormHeader;
