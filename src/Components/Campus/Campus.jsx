import React from "react";
import "./Campus.css";
import white_arrow from "../../assets/images/white-arrow.png";
import campus_1 from "../../assets/images/campus1.jpg";
import campus_2 from "../../assets/images/campus2.jpg";
import campus_3 from "../../assets/images/campus3.png";
import campus_4 from "../../assets/images/campus4.jpg";
import campus_5 from "../../assets/images/campus5.jpg";
import campus_6 from "../../assets/images/campus6.jpg";

const Campus = () => {
  return (
    <div className="campus">
      <div className="gallery">
        <img src={campus_1} alt="" />
        <img src={campus_2} alt="" />
        <img src={campus_3} alt="" />
        <img src={campus_4} alt="" />
        <img src={campus_5} alt="" />
        <img src={campus_6} alt="" />
      </div>
      <button className="btn dark-btn">
        See More Here <img src={white_arrow} alt="" />
      </button>
    </div>
  );
};

export default Campus;
