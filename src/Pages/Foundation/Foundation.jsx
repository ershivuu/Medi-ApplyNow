import React from "react";
import "./Foundation.css";
import miilogo from "../../assets/images/MIIFoundation.png";
import coin from "../../assets/logos/coin.png";
import mentor from "../../assets/logos/mentorship.png";
import workspace from "../../assets/logos/coworking.png";

function Foundation() {
  return (
    <>
      <div className="foundation-container">
        <div className="foundation-heading">
          <p>We Are MIl Foundation: </p>
          <p>Turn Your Ideas into a Business Venture</p>
          <p>
            MIl Foundation was founded in 2018 with the goal of providing
            nurturing support for any business idea or start-up. We believe that
            no business is small and every venture must have 'Limitless growth'.
            We provide need-based services such as mentorship, funding,
            networking, and workspace so that entrepreneurs can focus on
            building their ventures.
          </p>
        </div>

        <div className="foundation-image">
          <div className="foundation-para">
            <p>Funding for Innovative Startups</p>
            <p>(Medi-Caps University and MIl Foundation)</p>
            <div>
              <img src={miilogo} alt="" />
            </div>
            <div className="for-mobile">
              <p>10</p> <span>CR</span>
            </div>
          </div>
          <div className="cr-logo">
            <p>CR</p>
          </div>

          <div className="funding-cards">
            <div className="funding-card">
              <p className="nums">
                6<span>CR+</span>
              </p>
              <p>Innovation Grants</p>
            </div>
            <div className="funding-card">
              <img src={coin} alt="" />
              <p>Seed Funding</p>
            </div>
            <div className="funding-card">
              <img src={workspace} alt="" />
              <p>Workspace</p>
            </div>
            <div className="funding-card">
              <img src={mentor} alt="" />
              <p>Mentorship</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Foundation;
