import React from "react";
import classes from "./HelpTypeWindow.module.scss";

const PaymentWayBlock = ({
  text,
  children,
  selectPaymentTypeHandler,
  selectedPaymentType,
}) => {
  return (
    <div
      className={`${classes["help-type-window__payment-way__block"]} ${
        selectedPaymentType === text ? classes.selected : ""
      }`}
      onClick={selectPaymentTypeHandler}
      id={text}
      selectedPaymentType
    >
      <div>{children}</div>
      <p>{text}</p>
    </div>
  );
};

export default PaymentWayBlock;
