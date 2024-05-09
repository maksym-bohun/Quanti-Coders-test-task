import React, { useState } from "react";
import FormHeader from "../formSection/FormHeader";
import classes from "./HelpTypesSection.module.scss";
import HelpTypesList from "./HelpTypesList";
import HelpTypeWindow from "./helpTypeWindow/HelpTypeWindow";

const HelpTypesSection = () => {
  const [selectedItem, setSelectedItem] = useState("make");

  const selectBlockHandler = (e) => {
    setSelectedItem(e.currentTarget.id);
  };

  return (
    <div className={classes["help-types__container"]}>
      <FormHeader>Види допомоги</FormHeader>
      <p>Ви можете змінити вид допомоги</p>
      <HelpTypesList
        selectBlockHandler={selectBlockHandler}
        selectedItem={selectedItem}
      />
      <HelpTypeWindow selectedItem={selectedItem} />
      <button>Допомогти</button>
    </div>
  );
};

export default HelpTypesSection;
