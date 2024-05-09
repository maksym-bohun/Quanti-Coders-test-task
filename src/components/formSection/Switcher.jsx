import React, { useState } from "react";
import classes from "./Form.module.scss";

const Switcher = () => {
  const [selectedLabel, setSelectedLabel] = useState("natural");
  const selectLabelHandler = (e) => {
    setSelectedLabel(e.currentTarget.id);
  };

  return (
    <div className={classes["form__switcher"]}>
      <div
        className={`${classes["form__switcher__block"]} ${
          selectedLabel === "natural" &&
          classes["form__switcher__block--selected"]
        }`}
        onClick={selectLabelHandler}
        id="natural"
      >
        Фіз. особа
      </div>
      <div
        className={`${classes["form__switcher__block"]} ${
          selectedLabel === "legal" &&
          classes["form__switcher__block--selected"]
        }`}
        onClick={selectLabelHandler}
        id="legal"
      >
        Юр. особа
      </div>
    </div>
  );
};

export default Switcher;
