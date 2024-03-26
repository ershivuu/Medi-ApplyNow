import React, { useState } from "react";
import Engineering from "./SubCourses/Engineering";
import MSC from "./SubCourses/MSC";
import MBA from "./SubCourses/MBA";
import MTECH from "./SubCourses/MTECH";

function PostGraduate() {
  const [selectedComponent, setSelectedComponent] = useState();
  const [activeButton, setActiveButton] = useState("MTECH");
  const rendercomponent = (componentName) => {
    setSelectedComponent(componentName);
    setActiveButton(componentName);
  };

  let component;
  switch (selectedComponent) {
    case "MSC":
      component = <MSC />;
      break;

    case "MBA":
      component = <MBA />;
      break;
    case "MTECH":
      component = <MTECH />;
      break;
    default:
      component = <MTECH />;
      break;
  }
  return (
    <>
      <div className="course-list">
        <div className="course-btns">
          <div
            className={`course-btn ${
              activeButton === "MTECH" ? "active-button" : ""
            }`}
            onClick={() => rendercomponent("MTECH")}
          >
            <p>Engineering</p>
          </div>
          <div
            className={`course-btn ${
              activeButton === "MBA" ? "active-button" : ""
            }`}
            onClick={() => rendercomponent("MBA")}
          >
            <p>Management</p>
          </div>
          <div
            className={`course-btn ${
              activeButton === "MSC" ? "active-button" : ""
            }`}
            onClick={() => rendercomponent("MSC")}
          >
            <p>Science</p>
          </div>
          <div className="course-btn">
            <p>Master of Arts</p>
          </div>
          <div className="course-btn">
            <p>M.Pharma</p>
          </div>

          <div className="course-btn">
            <p>BCA + MCA (Integrated)</p>
          </div>
          <div className="course-btn">
            <p>Master of Computer Application</p>
          </div>
        </div>

        <div style={{ background: "maroon" }}>{component}</div>
      </div>
    </>
  );
}

export default PostGraduate;
