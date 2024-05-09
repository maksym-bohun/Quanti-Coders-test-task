import React, { useState } from "react";
import FormHeader from "../formSection/FormHeader";
import classes from "./HelpTypesSection.module.scss";
import HelpTypesList from "./HelpTypesList";

const HelpTypesSection = () => {
  const [selectedItem, setSelectedItem] = useState(null);

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
    </div>
  );
};

export default HelpTypesSection;
