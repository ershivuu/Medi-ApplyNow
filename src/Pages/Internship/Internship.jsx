import React from "react";
import "./Internship.css";
import amazon from "../../assets/logos/companies/Amazon-logo.png";
import goldman from "../../assets/logos/companies/goldman.png";
function Internship() {
  return (
    <>
      <div className="intern-super-container">
        <div className="intern-sub-container">
          <div className="intern-section-heading">
            <p>Highest Internship Offered</p>
          </div>
          <div className="internship-cards">
            <div className="internship-card">
              <div className="card-content">
                <div className="student-details">
                  <p>
                    Niyanshi <br /> Agrawal
                  </p>
                  <p>Batch: B.Tech (AI )</p>
                </div>
                <div className="student-quote">
                  <div>
                    <p>
                      “The opportunities for research, internships, and hands-on
                      learning experiences have been life-changing and have set
                      me up for success beyond graduation.”
                    </p>
                  </div>
                  <div className="student-packages">
                    <p>1,10,000/-</p>
                    <p> per month Stipend </p>
                    <div className="company-logo">
                      <img src={amazon} alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="internship-card">
              <div className="card-content">
                <div className="student-details">
                  <p>
                    Sakshi <br />
                    Bhate
                  </p>
                  <p>Batch: B.Tech - CSE Core 2023</p>
                </div>
                <div className="student-quote">
                  <div>
                    <p>
                      My involvement in research, internships, and hands-on
                      learning opportunities has been life-altering, equipping
                      me with the skills and knowledge essential for success
                      beyond the confines of academia.
                    </p>
                  </div>
                  <div className="student-packages">
                    <p>1,00,000/-</p>
                    <p> per month Stipend </p>
                    <div className="company-logo">
                      <img src={goldman} alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="internship-card">
              <div className="card-content">
                <div className="student-details">
                  <p>
                    Yashasvi <br />
                    Bhamare
                  </p>
                  <p>B.Tech (Cloud Technology & Information System) </p>
                </div>
                <div className="student-quote">
                  <div>
                    <p>
                      Engaging in research, internships, and hands-on learning
                      opportunities has been transformative, providing
                      invaluable experiences that have paved the way for success
                      beyond my graduation.
                    </p>
                  </div>
                  <div className="student-packages">
                    <p>1,10,000/-</p>
                    <p> per month Stipend </p>
                    <div className="company-logo">
                      <img src={amazon} alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Internship;
