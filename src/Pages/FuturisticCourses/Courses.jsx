import React from "react";
import "./Courses.css";

function Courses() {
  return (
    <>
      <div className="courses-super-container">
        <div className="courses-sub-container">
          <div className="course-heading">
            <p>
              Explore Our Futuristic Courses For The Future Business Leaders
            </p>
          </div>
          <div className="courses-cards">
            <div className="courses-card">
              <p className="course-card-heading">
                BBA/MBA in Business Analytics
              </p>
              <p className="course-card-data">
                Our BBA/MBA in Business Analytics is a multi-disciplinary
                program intended to equip students with analytical tools and
                methodologies to solve business and social problems. The program
                will enable the students to define problems, use analytical
                tools and techniques to identify patterns, gain insights,
                develop business strategies and make better decisions.
              </p>
              <button>
                <a href="#">Apply</a>
              </button>
            </div>
            <div className="courses-card">
              <p className="course-card-heading">B.Com in Global Finance</p>
              <p className="course-card-data">
                Explore the dynamic world of finance with our B.Com in Global
                Finance program at Medicaps University. Gain comprehensive
                insights into international financial markets, risk management,
                and strategic financial decision-making. Join us to develop the
                skills needed for a successful career in global finance. Enroll
                now for a transformative learning experience!
              </p>
              <button>
                <a href="#">Apply</a>
              </button>
            </div>
            <div className="courses-card">
              <p className="course-card-heading">M.Pharma</p>
              <p className="course-card-data">
                Explore cutting-edge pharmaceutical education at Medicaps
                University's M.Pharma program. Our industry-aligned curriculum,
                expert faculty, and state-of-the-art facilities ensure a
                holistic learning experience. Join us to develop the skills
                needed for a career in pharmaceutical sciences.
              </p>
              <button>
                <a href="#">Apply</a>
              </button>
            </div>
            <div className="courses-card">
              <p className="course-card-heading">B.Sc in Biotechnology</p>
              <p className="course-card-data">
                B.Sc. in Biotechnology exposes students to its diverse
                applications in various fields. It allows the candidates to
                learn how technology is utilized to create useful and necessary
                products from living organisms.
              </p>
              <button>
                <a href="#">Apply</a>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Courses;
