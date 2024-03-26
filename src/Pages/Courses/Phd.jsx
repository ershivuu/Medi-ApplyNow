import React, { useState } from "react";
import Engineering from "./SubCourses/Engineering";
import Blank from "./SubCourses/Blank";

function Phd() {
  const [selectedComponent, setSelectedComponent] = useState();
  const [activeButton, setActiveButton] = useState("Engineering");
  const rendercomponent = (componentName) => {
    setSelectedComponent(componentName);
    setActiveButton(componentName);
  };

  let component;
  switch (selectedComponent) {
    case "Engineering":
      component = <Engineering />;
      break;
    case "Pharmacy":
      component = <Engineering />;
      break;
    case "Management":
      component = <Engineering />;
      break;
    case "Commerce":
      component = <Engineering />;
      break;

    case "Science":
      component = <Engineering />;
      break;
    case "Agriculture":
      component = <Engineering />;
      break;
    default:
      component = <Blank />;
      break;
  }
  return (
    <>
      <div className="course-list">
        <div className="course-btns">
          <div className="course-btn">
            <p>Ph.D. in Engineering</p>
          </div>
          <div className="course-btn">
            <p>Ph.D. in Management</p>
          </div>
          <div className="course-btn">
            <p>Ph.D. in Commerce</p>
          </div>
          <div className="course-btn">
            <p>Ph.D. in Science</p>
          </div>
          <div className="course-btn">
            <p>Ph.D. in Pharmacy</p>
          </div>
          <div className="course-btn">
            <p>Ph.D. in Arts, Humanities & Social Science</p>
          </div>
        </div>

        <div style={{ background: "maroon" }}>{component}</div>
      </div>
    </>
  );
}

export default Phd;
