import React from "react";
import "./Footers.css";
import whitelogo from "../../assets/logos/med-logo-white.png";
import facebook from "../../assets/logos/facebook.png";
import instagram from "../../assets/logos/instagram.png";
import twitter from "../../assets/logos/twitter.png";
import youtube from "../../assets/logos/youtube.png";
import linkedin from "../../assets/logos/linkedin.png";
import locationlogo from "../../assets/logos/location.png";
import tel from "../../assets/logos/telephone.png";

import emaillogo from "../../assets/logos/mail.png";

function Footers() {
  const phoneNumber = "07969024450";
  return (
    <>
      <div className="footer">
        <div className="f-white-logo">
          <img src={whitelogo} />
        </div>
        <div className="f-contact-us">
          <p className="c-heading">
            <span className="f-headingss">ADDRESS</span>
          </p>
          <div style={{ display: "flex" }}>
            <div>
              <img src={locationlogo} className="other-logos loc-logo" alt="" />
            </div>
            <div>
              <p>
                <b style={{ fontSize: "18px" }}>Medi-Caps University </b>
                <br />
                <span
                  style={{
                    color: "rgba(255, 255, 255, 0.655)",
                    fontSize: "16px",
                  }}
                >
                  A.B. Road,Pigdamber,Rau Indore 453331
                </span>
              </p>
            </div>
          </div>
        </div>
        <div className="further-info">
          <p className="info-heading">
            <span className="f-headingss">CONTACT US</span>
          </p>
          <div style={{ display: "flex" }}>
            <div>
              <img src={tel} className="other-logos" alt="" />
            </div>
            <div>
              <p>
                <a
                  href={`tel:${phoneNumber}`}
                  style={{ textDecoration: "none", color: "white" }}
                >
                  {phoneNumber}
                </a>
                ,
                <a
                  href="https://wa.me/7723019450"
                  style={{ textDecoration: "none", color: "white" }}
                  target="_blank"
                >
                  7723019450
                </a>
              </p>
            </div>
          </div>

          <div style={{ display: "flex" }}>
            <div>
              <img src={emaillogo} className="other-logos" alt="" />
            </div>
            <div>
              <p>E-mail: admission@medicaps.ac.in</p>
            </div>
          </div>
          <div className="social-logos">
            <div>
              <a
                href="https://www.facebook.com/medicapsuniversityindore/"
                target="_blank"
              >
                <img src={facebook} />
              </a>
            </div>
            <div>
              <a
                href="https://www.instagram.com/medicaps_university/"
                target="_blank"
              >
                <img src={instagram} />
              </a>
            </div>
            <div>
              <a
                href="https://www.linkedin.com/school/medicaps-university-indore/"
                target="_blank"
              >
                <img src={linkedin} />
              </a>
            </div>

            <div>
              <a
                href="https://www.youtube.com/channel/UCSeSaSzuPcLY8f0Zov01ZuQ/videos"
                target="_blank"
              >
                <img src={youtube} style={{ width: "35px", height: "35px" }} />
              </a>
            </div>
            <div>
              <a href="https://twitter.com/Medicaps_Indore" target="_blank">
                <img src={twitter} style={{ width: "20px", height: "20px" }} />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-2">
        <div>@Copyright 2024. All rights reserved. Medi-caps University.</div>
        <div>
          <p>Designed and Developed by Corusview</p>
        </div>

        <div>
          <a
            href="https://www.medicaps.ac.in/privacy-policy.php"
            style={{
              textDecoration: "none",
              color: "rgba(255, 255, 255, 0.655)",
            }}
          >
            <p style={{ textDecoration: "none" }}>
              Privacy Policy | Terms of Use
            </p>
          </a>
        </div>
      </div>
    </>
  );
}

export default Footers;
