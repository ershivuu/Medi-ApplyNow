import React, { useState } from "react";
import "./AvailableCourses.css";
import UnderGraduate from "./UnderGraduate";
import PostGraduate from "./PostGraduate";
import Phd from "./Phd";

function AvailableCourses() {
  const [selectedComponent, setSelectedComponent] = useState();
  const [activeButton, setActiveButton] = useState("UnderGraduate");
  const showComponent = (componentName) => {
    setSelectedComponent(componentName);
    setActiveButton(componentName);
  };
  let componentToShow;
  switch (selectedComponent) {
    case "UnderGraduate":
      componentToShow = <UnderGraduate />;
      break;
    case "PostGraduate":
      componentToShow = <PostGraduate />;
      break;
    case "Phd":
      componentToShow = <Phd />;
      break;

    default:
      componentToShow = <UnderGraduate />;
      break;
  }
  return (
    <>
      <div className="course-slider">
        <div className="available-course">
          <p>FIND YOUR COURSE </p>
          <p>Pursue the Futuristic course of your choice.</p>
        </div>
        <div className="switch-btn">
          <div className="row course-row">
            <div
              className={`col-md-4 course-col ${
                activeButton === "UnderGraduate" ? "activeated-card-1" : ""
              }`}
              onClick={() => showComponent("UnderGraduate")}
            >
              UG
            </div>
            <div
              className={`col-md-4 course-col ${
                activeButton === "PostGraduate" ? "activeated-card-1" : ""
              }`}
              onClick={() => showComponent("PostGraduate")}
            >
              PG
            </div>
            <div
              style={{ paddingRight: "15px" }}
              className={`col-md-4 course-col ${
                activeButton === "Phd" ? "activeated-card-1" : ""
              }`}
              onClick={() => showComponent("Phd")}
            >
              PHD
            </div>
          </div>
        </div>
      </div>
      <div>
        <div>{componentToShow}</div>
      </div>
    </>
  );
}

export default AvailableCourses;
