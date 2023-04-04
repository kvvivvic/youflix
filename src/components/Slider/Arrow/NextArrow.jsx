import React from "react";
import { GrFormNext } from "react-icons/gr";

const NextArrow = (props) => {
  const { onClick } = props;
  return (
    <div className="slick-arrow slick-next" onClick={onClick}>
      <GrFormNext />
    </div>
  );
};

export default NextArrow;
