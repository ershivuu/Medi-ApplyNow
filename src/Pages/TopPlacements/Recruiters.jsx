import React, { useRef, useEffect } from "react";
import "./Recruiters.css";
import amdocs from "../../assets/logos/recruiters/amdocs.png"
import kec from "../../assets/logos/recruiters/kec.png"
import fusion from "../../assets/logos/recruiters/fusionglobal.png"
import tcs from "../../assets/logos/recruiters/tcs.png"
import amazon from "../../assets/logos/recruiters/amazon.png"
import ibm from "../../assets/logos/recruiters/ibm.png"
import eicer from "../../assets/logos/recruiters/eicher.png"
import mahindra from "../../assets/logos/recruiters/mahindra.png"
import cisco from "../../assets/logos/recruiters/cisco.png"
import deloitte from "../../assets/logos/recruiters/Deloitte.png"
import moira from "../../assets/logos/recruiters/moira.png"
import capgimini from "../../assets/logos/recruiters/capgemini.png"
import zensar from "../../assets/logos/recruiters/zensar.png"

function Recruiters() {
  const sliderRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      if (sliderRef.current) {
        sliderRef.current.scrollLeft += 200;
      }
    }, 5000);

    return () => clearInterval(interval);
  }, []);
  return (
    <>
      <div>
        <div className="x-axis-conatiner">
          <p id="x-axis-scroll-heading">OUR PROMINIENT RECRUITERS</p>
          <div>
            <div className="x-axis-slider" ref={sliderRef}>
              <div className="company-logo-card">
                <img src={amdocs} alt="" />
              </div>
              <div className="company-logo-card">
                <img src={kec} alt="" />
              </div>
              <div className="company-logo-card">
                <img src={fusion} alt="" />
              </div>
              <div className="company-logo-card">
                <img src={tcs} alt="" />
              </div>
              <div className="company-logo-card">
                <img src={amazon} alt="" />
              </div>
              <div className="company-logo-card">
                <img src={ibm} alt="" />
              </div>
              <div className="company-logo-card">
                <img src={eicer} alt="" />
              </div>
              <div className="company-logo-card">
                <img src={mahindra} alt="" />
              </div>
              <div className="company-logo-card">
                <img src={cisco} alt="" />
              </div>
              <div className="company-logo-card">
                <img src={deloitte} alt="" />
              </div>
              <div className="company-logo-card">
                <img src={moira} alt="" />
              </div>
              <div className="company-logo-card">
                <img src={capgimini} alt="" />
              </div>
              <div className="company-logo-card" style={{ border: "none" }}>
                <img src={zensar} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Recruiters;
