import React from "react";
import "./Abroads.css";
import maps from "../../assets/images/map.png";
import woosong from "../../assets/images/university/Woosong.png";
import dpu from "../../assets/images/university/dpu.png";
import taipei from "../../assets/images/university/taipei.png";
import smu from "../../assets/images/university/smu.png";
import asia from "../../assets/images/university/asia.png";

function Abroads() {
  return (
    <>
      <div className="abroad-heading">
        <p>STUDY ABROAD WITH MEDICAPS</p>
        <p>Look where some of our students are studying abroad!</p>
      </div>
      <div className="map">
        <img src={maps} alt="" />
      </div>

      <div className="tie-ups">
        <div className="tie-ups-heading">Our International Tie-ups</div>

        <div className="tie-ups-cards">
          <div className="tie-ups-card">
            <img src={woosong} alt="" />
          </div>
          <div className="tie-ups-card">
            <img src={dpu} alt="" />
          </div>
          <div className="tie-ups-card">
            <img src={taipei} alt="" />
          </div>
          <div className="tie-ups-card">
            <img src={smu} alt="" />
          </div>
          <div className="tie-ups-card">
            <img src={asia} alt="" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Abroads;
