import React, { useRef } from "react";
import classes from "./Form.module.scss";
import InputContainer from "./InputContainer";

const Form = () => {
  const fileInput = useRef();

  const selectLogoHandler = () => {
    fileInput.current.click();
  };

  return (
    <form className={classes.form}>
      <div
        className={`${classes["form__column"]} ${classes["form__column--left"]}`}
      >
        <div className={classes["form__row"]}>
          <InputContainer id="name" type="text">
            Імʼя
          </InputContainer>
          <InputContainer id="surname" type="text">
            Фамілія
          </InputContainer>
        </div>
        <div className={classes["form__row"]}>
          <InputContainer id="companyName" type="text">
            Назва компанії, організації
          </InputContainer>
          <span className={classes["logo-input"]} onClick={selectLogoHandler}>
            + Логотип
          </span>
          <input type="file" ref={fileInput} style={{ display: "none" }} />
        </div>
        <div className={classes["form__row"]}>
          <InputContainer id="email" type="email">
            Email-адрес
          </InputContainer>
        </div>
        <div className={classes["form__row"]}>
          <InputContainer id="phoneNumber" type="tel">
            Номер телефону
          </InputContainer>
        </div>
      </div>

      <div
        className={`${classes["form__column"]} ${classes["form__column--left"]}`}
      >
        <div className={classes["form__row"]}>
          <InputContainer id="country" type="text">
            Країна
          </InputContainer>
        </div>
        <div className={classes["form__row"]}>
          <InputContainer id="city" type="text">
            Місто
          </InputContainer>
          <InputContainer id="state" type="text">
            Штат, район
          </InputContainer>
        </div>
        <div className={classes["form__row"]}>
          <InputContainer id="address" type="text">
            Адреса
          </InputContainer>
        </div>
        <div className={classes["form__row"]}>
          <InputContainer id="postalCode" type="number">
            Поштовий індекс
          </InputContainer>
          <div className={classes["input-container"]}></div>
        </div>
      </div>
    </form>
  );
};

export default Form;
