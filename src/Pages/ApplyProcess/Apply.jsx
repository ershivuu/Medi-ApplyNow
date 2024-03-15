import React from "react";
import "./Apply.css";
import nextarrow from "../../assets/logos/next.png";
import user from "../../assets/logos/user.png";
import calender from "../../assets/logos/calendar.png";
import check from "../../assets/logos/check.png";
function Apply() {
  return (
    <>
      <div className="apply-main-container">
        <div className="apply-container">
          <div className="section-heading">
            <p>How to Apply?</p>
          </div>
          <div className="apply-cards">
            <div className="apply-card">
              <div className="icon-div">
                <img src={user} alt="" />
              </div>
              1. CUCET Registration: - Sign up with basic info: Name, Email,
              Mobile, State, Gender, and set a password.
              <br /> 2. Confirmation: - Receive confirmation on mobile and
              email. <br />
              3. Login: - Use Email as Username and set password to log in.
            </div>
            <div className="apply-card arrow">
              <img src={nextarrow} alt="" />
            </div>
            <div className="apply-card">
              <div className="icon-div">
                <img src={calender} alt="" />
              </div>
              1. Create Profile: - Successfully set up CUCET| candidate profile.
              <br />
              2. Log In: - Access your CUCET account.
              <br />
              3. Choose Exam Date: - Select a convenient and preferred
              examination date.
            </div>
            <div className="apply-card arrow">
              <img src={nextarrow} alt="" />
            </div>
            <div className="apply-card">
              <div className="icon-div">
                <img src={check} alt="" />
              </div>
              1. CUCET Eligibility: - Clear MU <br />
              2. Result Notification: - Recelve prompt| communication about your
              MU results. <br />
              3. Application Submission: - Apply for admission <br />
              4. Merit-Based Scholarship: - Avail scholarships based on merit
              after admission.
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Apply;
