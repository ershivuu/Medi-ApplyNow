import React, { useState } from "react";
import Engineering from "./SubCourses/Engineering";
import Pharmacy from "./SubCourses/Pharmacy";
import Management from "./SubCourses/Management";
import Commerce from "./SubCourses/Commerce";
import Science from "./SubCourses/Science";
import Agriculture from "./SubCourses/Agriculture";
import Law from "./SubCourses/Law";

function UnderGraduate() {
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
      component = <Pharmacy />;
      break;
    case "Management":
      component = <Management />;
      break;
    case "Commerce":
      component = <Commerce />;
      break;

    case "Science":
      component = <Science />;
      break;
    case "Agriculture":
      component = <Agriculture />;
      break;
    case "Law":
      component = <Law />;
      break;
    default:
      component = <Engineering />;
      break;
  }
  return (
    <>
      <div>
        <div className="course-list">
          <div className="course-btns">
            <div
              className={`course-btn ${
                activeButton === "Engineering" ? "active-button" : ""
              }`}
              onClick={() => rendercomponent("Engineering")}
            >
              <p>Engineering </p>
            </div>
            <div
              className={`course-btn ${
                activeButton === "Pharmacy" ? "active-button" : ""
              }`}
              onClick={() => rendercomponent("Pharmacy")}
            >
              <p>Pharmacy </p>
            </div>
            <div
              className={`course-btn ${
                activeButton === "Management" ? "active-button" : ""
              }`}
              onClick={() => rendercomponent("Management")}
            >
              <p>Management</p>
            </div>
            <div
              className={`course-btn ${
                activeButton === "Commerce" ? "active-button" : ""
              }`}
              onClick={() => rendercomponent("Commerce")}
            >
              <p>Commerce</p>
            </div>
            <div
              className={`course-btn ${
                activeButton === "Science" ? "active-button" : ""
              }`}
              onClick={() => rendercomponent("Science")}
            >
              <p>Science</p>
            </div>
            <div
              className={`course-btn ${
                activeButton === "Agriculture" ? "active-button" : ""
              }`}
              onClick={() => rendercomponent("Agriculture")}
            >
              <p>Agriculture</p>
            </div>
            <div
              className={`course-btn ${
                activeButton === "Law" ? "active-button" : ""
              }`}
              onClick={() => rendercomponent("Law")}
            >
              <p>Law</p>
            </div>
          </div>

          <div style={{ background: "maroon" }}>{component}</div>
        </div>
      </div>
    </>
  );
}

export default UnderGraduate;
