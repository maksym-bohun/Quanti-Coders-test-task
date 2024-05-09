import React, { useState } from "react";
import classes from "./HelpTypeWindow.module.scss";
import PaymentWayBlock from "./PaymentWayBlock";
import { BiLogoMastercard } from "react-icons/bi";
import { SiVisa } from "react-icons/si";
import atmIcon from "../../../media/icons/atm.png";
import webmoneyIcon from "../../../media/icons/webmoney.png";
import paypalIcon from "../../../media/icons/paypal.png";
import CreditCard from "./CreditCard";

const HelpTypeWindow = ({ selectedItem }) => {
  const [selectedPaymentType, setSelectedPaymentType] = useState(
    "Карта Visa/MasterCard"
  );
  const items = {
    make: 1,
    financialHelp: 2,
    materialHelp: 3,
    volunteering: 4,
  };

  const selectPaymentTypeHandler = (e) => {
    setSelectedPaymentType(e.currentTarget.id);
  };

  return (
    <div
      className={`${classes["help-type-window"]} ${
        classes[`selected--${items[selectedItem]}`]
      }`}
    >
      <div className={classes["help-type-window__payment-way"]}>
        <h4>Спосіб оплати</h4>
        <div
          className={classes["help-type-window__payment-way__blocks-container"]}
        >
          <PaymentWayBlock
            text="Карта Visa/MasterCard"
            selectPaymentTypeHandler={selectPaymentTypeHandler}
            selectedPaymentType={selectedPaymentType}
          >
            <div className={classes["bank-icons"]}>
              <BiLogoMastercard size={45} color="#f3f7fa" />
              <SiVisa size={45} color="#f3f7fa" />
            </div>
          </PaymentWayBlock>

          <PaymentWayBlock
            text="Приват24"
            selectPaymentTypeHandler={selectPaymentTypeHandler}
            selectedPaymentType={selectedPaymentType}
          >
            <div>Приват24</div>
          </PaymentWayBlock>

          <PaymentWayBlock
            text="Термінали України"
            selectPaymentTypeHandler={selectPaymentTypeHandler}
            selectedPaymentType={selectedPaymentType}
          >
            <img src={atmIcon} alt="Atm icon" />
          </PaymentWayBlock>

          <PaymentWayBlock
            text="WebMoney"
            selectPaymentTypeHandler={selectPaymentTypeHandler}
            selectedPaymentType={selectedPaymentType}
          >
            <img src={webmoneyIcon} alt="Webmoney icon" />
          </PaymentWayBlock>

          <PaymentWayBlock
            text="PayPal"
            selectPaymentTypeHandler={selectPaymentTypeHandler}
            selectedPaymentType={selectedPaymentType}
          >
            <img src={paypalIcon} alt="PayPal icon" />
          </PaymentWayBlock>
        </div>
      </div>
      <div className={classes["help-type-window__card-container"]}>
        <h4>Введіть наступні дані</h4>
        <CreditCard />
      </div>
    </div>
  );
};

export default HelpTypeWindow;
