import React from "react";
import classes from "./HelpTypeWindow.module.scss";

const CreditCard = () => {
  return (
    <div className={classes["help-type-window__card-container__card"]}>
      <div className={classes["card-row"]}>
        <div className={classes["input-container"]}>
          <label htmlFor="cardNumber">Номер карти</label>
          <div className={classes["card-number-inputs-container"]}>
            <input id="cardNumber" type="tel" maxLength={4} />
            <input type="tel" maxLength={4} />
            <input type="tel" maxLength={4} />
            <input type="tel" maxLength={4} />
          </div>
        </div>
      </div>

      <div className={classes["card-row"]}>
        <div className={classes["input-container"]}>
          <label htmlFor="validity">Термін дії</label>
          <input type="tel" id="validity" />
        </div>
        <div className={classes["input-container"]}>
          <label htmlFor="cvc">CVC/CVV</label>
          <input type="tel" id="cvc" />
        </div>
      </div>
    </div>
  );
};

export default CreditCard;
