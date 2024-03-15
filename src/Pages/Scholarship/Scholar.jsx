import React from "react";
import "./Scholar.css";
import scholarimg from "../../assets/images/percent.png";

function Scholar() {
  return (
    <>
      <div className="scholar-super-container">
        <div className="scholar-ship">
          <div>
            <p>
              HURRY UP <br />
              DON'T MISS THE <br /> <span>CHANCE</span> <br />
              TO GET UP TO
            </p>
          </div>
          <div>
            <img src={scholarimg} alt="" />
            <p>SCHOLARSHIP</p>
          </div>
        </div>
        <div className="sat-para">
          <p>
            <span> MU-SAT:</span> Medicaps University Scholarship cum Admission
            Test (MU-SAT 2024) is a national-level entrance exam and scholarship
            test mandatory for admission in Integrated Law programs,
            Engineering, Management, Agriculture, Pharmacy, Science, and Art
            Humanities & Social Science. The amount of the scholarship depends
            on the performance of the student in MU-SAT 2024 & the fee of the
            program.
          </p>
        </div>
        <div className="phase-container">
          <div className="line"></div>
          <div className="phases">
            <div className="phase">
              <p className="number">1</p>
              <p>MU SAT PHASE 1</p>
              <p>
                To be conducted on <br /> 1st & 2nd June 2024{" "}
              </p>
            </div>
            <div className="phase">
              <p className="number">2</p>
              <p>MU SAT PHASE 2</p>
              <p>
                To be conducted on <br />
                20th & 21st June 2024{" "}
              </p>
            </div>
            <div className="phase">
              <p className="number">3</p>
              <p>MU SAT PHASE 3</p>
              <p>
                To be conducted on <br /> 16th & 17th August 2024{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Scholar;
