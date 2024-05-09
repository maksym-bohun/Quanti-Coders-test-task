import React from "react";
import classes from "./HelpTypesSection.module.scss";
import { TfiHandOpen, TfiWallet } from "react-icons/tfi";
import clothesWhiteIcon from "../../media/icons/clothes_white.png";
import clothesGrayIcon from "../../media/icons/clothes_gray.png";
import heartWhiteIcon from "../../media/icons/heart_white.png";
import heartGrayIcon from "../../media/icons/heart_gray.png";

const HelpTypesList = ({ selectBlockHandler, selectedItem }) => {
  return (
    <div className={classes["help-types__list"]}>
      <div
        className={`${classes["help-types__block"]} ${
          selectedItem === "make" && classes.active
        }`}
        onClick={selectBlockHandler}
        id="make"
      >
        <div className={classes["icon-container"]}>
          <TfiHandOpen
            size={40}
            color={selectedItem === "make" ? "#fff" : "#d0d6e1"}
          />
        </div>
        <p>Зробити</p>
      </div>

      <div
        className={`${classes["help-types__block"]} ${
          selectedItem === "financialHelp" && classes.active
        }`}
        onClick={selectBlockHandler}
        id="financialHelp"
      >
        <div className={classes["icon-container"]}>
          <TfiWallet
            size={40}
            color={selectedItem === "financialHelp" ? "#fff" : "#d0d6e1"}
          />
        </div>
        <p>Фінансова допомога</p>
      </div>

      <div
        className={`${classes["help-types__block"]} ${
          selectedItem === "materialHelp" && classes.active
        }`}
        onClick={selectBlockHandler}
        id="materialHelp"
      >
        <div className={classes["icon-container"]}>
          <img
            src={
              selectedItem === "materialHelp"
                ? clothesWhiteIcon
                : clothesGrayIcon
            }
            alt="Clothes icon"
          />
        </div>
        <p>Матеріальна допомога</p>
      </div>

      <div
        className={`${classes["help-types__block"]} ${
          selectedItem === "volunteering" && classes.active
        }`}
        onClick={selectBlockHandler}
        id="volunteering"
      >
        <div className={classes["icon-container"]}>
          <img
            src={
              selectedItem === "volunteering" ? heartWhiteIcon : heartGrayIcon
            }
            alt="Heart icon"
          />
        </div>
        <p>Волонтерство</p>
      </div>
    </div>
  );
};

export default HelpTypesList;
