import React from "react";
import "./Placements.css";
import goldman from "../../assets/images/topplacements/11.png";
import valiant from "../../assets/images/topplacements/22.png";
import nova from "../../assets/images/topplacements/33.png";
import cisco from "../../assets/images/topplacements/44.png";
function Placements() {
  return (
    <>
      <div className="section-heading">
        <p>SOME OF OUR OTHER TOP PLACEMENTS</p>
      </div>
      <div className="industry-placements">
        <div className="placement-cards">
          <div className="placement-card">
            <div className="abt-student">
              <div className="placed-company" style={{ marginTop: "-5px" }}>
                <img src={goldman} alt="" />
              </div>
              <div className="student-package">
                <p>
                  24<span>LPA</span>
                </p>
                <p>PACKAGE</p>
              </div>
            </div>
          </div>
          <div className="placement-card">
            <div className="abt-student">
              <div className="placed-company" style={{ marginTop: "-10px" }}>
                <img src={valiant} alt="" />
              </div>
              <div className="student-package">
                <p>
                  22<span>LPA</span>
                </p>
                <p>PACKAGE</p>
              </div>
            </div>
          </div>
          <div className="placement-card">
            <div className="abt-student">
              <div className="placed-company">
                <img src={nova} alt="" />
              </div>
              <div className="student-package">
                <p>
                  17<span>LPA</span>
                </p>
                <p>PACKAGE</p>
              </div>
            </div>
          </div>
          <div className="placement-card">
            <div className="abt-student">
              <div className="placed-company">
                <img src={cisco} alt="" />
              </div>
              <div className="student-package">
                <p>
                  15<span>LPA</span>
                </p>
                <p>PACKAGE</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Placements;
