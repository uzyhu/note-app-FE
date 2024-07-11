import React from "react";
import { FiPlusCircle } from "react-icons/fi";
import { addButton, container } from "./TopContainer.css";

const TopContainer = () => {
  const handleClick = () => {
    
  };

  return (
    <div>
      <FiPlusCircle onClick={handleClick}></FiPlusCircle>
    </div>
  );
};

export default TopContainer;
