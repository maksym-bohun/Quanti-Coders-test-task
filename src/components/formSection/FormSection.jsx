import React from "react";
import classes from "./Form.module.scss";
import FormHeader from "./FormHeader";
import Switcher from "./Switcher";
import Form from "./Form";

const FormSection = () => {
  return (
    <div className={classes["form__container"]}>
      <FormHeader>Заповніть форму</FormHeader>
      <Switcher />
      <Form />
    </div>
  );
};

export default FormSection;
