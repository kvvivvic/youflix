import React from "react";
import "./button.css";
import { GrFormPrevious } from "react-icons/gr";

const PrevArrow = (props) => {
  const { onClick } = props;
  return (
    <div className="slick-arrow slick-prev absolute" onClick={onClick}>
      <GrFormPrevious />
    </div>
  );
};

export default PrevArrow;
