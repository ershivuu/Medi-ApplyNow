import React from "react";
import "./Countless.css";
import Yukta from "../../assets/images/yukta.png";
import ashish from "../../assets/images/ashish.png";
import aswin from "../../assets/images/Aswin.png";
import top from "../../assets/logos/companies/top.png";
import amazon from "../../assets/logos/companies/Amazon-logo.png";
import nezda from "../../assets/logos/companies/nezda-logo-cropped.png";

function Countless() {
  return (
    <>
      <div className="countless-container">
        <div className="countless-section1">
          <div className="left-section">
            <p>
              Countless Opportunities at One Place. <br />
              Yes! We Are The Medicaps.
            </p>
            <p>
              Glimpses of Our Jaw-dropping Placements Statics. <br />
              <span>A Brief Summary of Our Placements</span>
            </p>
          </div>
          <div className="right-section">
            <p>
              2,500+ <span>companies visited</span>
            </p>
            <p>
              INR 6LPA <br />
              <span>Average Package</span>
            </p>
            <p>
              17,000+ <span>Students Placed</span>
            </p>
            <p>
              INR 48LPA <br />
              <span>Highest Package</span>
            </p>
          </div>
        </div>
        <div className="student-cards">
          <div className="student-card">
            <div className="student-img">
              <img src={Yukta} alt="" />
            </div>
            <div className="thoughts">
              <p>
                "I couldn't have asked for a better university experience, and I
                know that the education and connections I've gained here will
                serve me well in the future."
              </p>
            </div>
            <div className="person-detail">
              <div className="names" style={{ textAlign: "center" }}>
                <p>
                  YUKTA <br />
                  KANDHARI
                </p>
              </div>
              <div className="person-salary">
                <div>
                  <p>2023 Batch</p>
                  <p>
                    48 <span>LPA</span>
                  </p>
                </div>
                <div>
                  <img src={top} alt="" />
                </div>
              </div>
            </div>
          </div>
          <div className="student-card">
            <div className="student-img">
              <img src={aswin} alt="" />
            </div>
            <div className="thoughts">
              <p>
                "I'm so greatful to have found a place where I can pursue my
                passions and be surrounded by like-minded individuals who push
                me to be my best."
              </p>
            </div>
            <div className="person-detail">
              <div className="names" style={{ textAlign: "center" }}>
                <p>
                  Ashwin <br />
                  Jain
                </p>
              </div>
              <div className="person-salary">
                <div >
                  <p>2023 Batch</p>
                  <p>
                    44 <span>LPA</span>
                  </p>
                </div>
                <div>
                  <img src={amazon} alt="" />
                </div>
              </div>
            </div>
          </div>
          <div className="student-card">
            <div className="student-img">
              <img src={ashish} alt="" />
            </div>
            <div className="thoughts">
              <p>
                "I'm appreciative to have found a place where I can freely
                pursue my passions, surrounded by a collective of kindred souls
                who inspire and propel me towards becoming the best version of
                myself."
              </p>
            </div>
            <div className="person-detail">
              <div className="names" style={{ textAlign: "center" }}>
                <p>
                  Ashish <br />
                  Banka
                </p>
              </div>
              <div className="person-salary">
                <div>
                  <p>2023 Batch</p>
                  <p>
                    15 <span>LPA</span>
                  </p>
                </div>
                <div>
                  <img src={nezda} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Countless;
