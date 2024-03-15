import React, { useState } from "react";
import Engineering from "./SubCourses/Engineering";

function PostGraduate() {
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
      component = <Engineering />;
      break;
  }
  return (
    <>
      <div className="course-list">
        <div className="course-btns">
          <div
          className={`course-btn ${
            activeButton === "Engineering" ? "active-button" : ""
          }`}
            onClick={() => rendercomponent("Engineering")}
          >
            <p>Master of Arts</p>
          </div>
          <div
            className="course-btn"
            // onClick={() => rendercomponent("Pharmacy")}
          >
            <p>M.Pharma</p>
          </div>
          <div
          className={`course-btn ${
            activeButton === "Management" ? "active-button" : ""
          }`}
            onClick={() => rendercomponent("Management")}
          >
            <p>Master of Computer Application</p>
          </div>
          <div
         className={`course-btn ${
          activeButton === "Commerce" ? "active-button" : ""
        }`}
            onClick={() => rendercomponent("Commerce")}
          >
            <p>Master of Science</p>
          </div>
          <div
           className={`course-btn ${
            activeButton === "Science" ? "active-button" : ""
          }`}
            onClick={() => rendercomponent("Science")}
          >
            <p>Master of Business Administration</p>
          </div>
          <div
            className={`course-btn ${
              activeButton === "Agriculture" ? "active-button" : ""
            }`}
            onClick={() => rendercomponent("Agriculture")}
          >
            <p>Master of Technology</p>
          </div>
        </div>

        <div style={{ background: "maroon" }}>{component}</div>
      </div>
    </>
  );
}

export default PostGraduate;
