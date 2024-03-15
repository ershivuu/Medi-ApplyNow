import React, { useState, useRef, useEffect } from "react";
import "./Home.css";
import Instructions from "../Instructions/Instructions";
import Apply from "../ApplyProcess/Apply";
import Courses from "../FuturisticCourses/Courses";
import Internship from "../Internship/Internship";
import Abroads from "../Abroads/Abroads";
import Alumni from "../Alumni/Alumni";
import Placements from "../TopPlacements/Placements";
import Recruiters from "../TopPlacements/Recruiters";
import Authorized from "../Authorized/Authorized";
import Countless from "../Opportunities/Countless";
import Scholar from "../Scholarship/Scholar";
import Foundation from "../Foundation/Foundation";
import Ranking from "../Ranking/Ranking";
import AvailableCourses from "../Courses/AvailableCourses";

function Home() {
  const enquirform = useRef(null);
  const scrollToSection = (id) => {
    enquirform.current.scrollIntoView({ behaviour: "smooth" });
  };
  return (
    <>
      <div className="home-section">
        <div className="home-sub-section">
          <div className="section-a">
            <p>
              Join Central India's <br /> Best Private University <br /> for UG
              & PG Programs
            </p>
            <button>Apply Now &#8594;</button>
          </div>
          <div className="section-b" ref={enquirform} id="apply-form">
            {/* please inser your form code here */}
          </div>
        </div>
      </div>

      <div className="apply-btn">
        <button onClick={scrollToSection}>APPLY NOW</button>
      </div>
      <div>
        <div>
          <Ranking></Ranking>
        </div>
        <div>
          <Authorized></Authorized>
        </div>
        <div id="why-mu">
          <Scholar></Scholar>
        </div>
        <div id="carrer">
          <Countless></Countless>
        </div>
      </div>
      <div>
        <div>
          <Recruiters></Recruiters>
        </div>
        <div>
          <Placements></Placements>
        </div>
        <div>
          <Internship></Internship>
        </div>
        <div>
          <Abroads></Abroads>
        </div>
        <div>
          <Foundation></Foundation>
        </div>
        <div id="programs" style={{paddingBlock:'50px'}}>
          <AvailableCourses></AvailableCourses>
        </div>
      </div>
      <div>
        <Courses></Courses>
      </div>

      <div id="alumni">
        <Alumni></Alumni>
        <Apply></Apply>
      </div>
      <div>
        <Instructions></Instructions>
      </div>
    </>
  );
}

export default Home;
