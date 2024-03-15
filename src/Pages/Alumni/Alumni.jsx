import React from "react";
import "./Alumni.css";
import amit from "../../assets/images/amit.png";
import alok from "../../assets/images/alok.png";
import ankur from "../../assets/images/ankur.png";
import gaurav from "../../assets/images/gaurav.png";
import cognizant from "../../assets/logos/companies/Cognizant.png";
import tata from "../../assets/logos/companies/tata.png";
import ministry from "../../assets/logos/companies/ministry.png";
import bank from "../../assets/logos/companies/bank.png";

function Alumni() {
  return (
    <>
      <div>
        <div id="carouselExample" className="carousel slide">
          <div className="carousel-inner">
            <p className="alumni-heading">our alumni</p>
            <div className="carousel-item active">
              <img src={amit} className="d-block w-100" alt="..." />
              <div className="card-data">
                <img src={cognizant} alt="" />
                <p>
                  AMIT MAKHIJANI <br />
                  <span>SENIOR ANALYST</span>
                </p>
              </div>
            </div>
            <div className="carousel-item">
              <img src={alok} className="d-block w-100" alt="..." />
              <div className="card-data">
                <img src={tata} alt="" />
                <p>
                  ALOK VIJAYVERGIYA <br />
                  <span>AVP- SLISTAINABILITY</span>
                </p>
              </div>
            </div>
            <div className="carousel-item">
              <img src={ankur} className="d-block w-100" alt="..." />
              <div className="card-data">
                <img src={ministry} alt="" />
                <p>
                  ANKUR LAHOTY <br />
                  <span>IAS OFFICER</span>
                </p>
              </div>
            </div>
            <div className="carousel-item">
              <img src={gaurav} className="d-block w-100" alt="..." />
              <div className="card-data">
                <img src={bank} alt="" />
                <p>
                  GAURAV ARAS VP <br />
                  <span>ENTERPRISE RISK MANAGEMENT</span>
                </p>
              </div>
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExample"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExample"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </>
  );
}

export default Alumni;
