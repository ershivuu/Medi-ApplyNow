import React from "react";
import "./Authorized.css";
import bci from "../../assets/logos/authlogo/bci.png";
import ugc from "../../assets/logos/authlogo/ugc.png";
import aicte from "../../assets/logos/authlogo/aicte.png";
import pci from "../../assets/logos/authlogo/pci.png";
function Authorized() {
  return (
    <>
      <div className="auth-cards">
        <div className="auth-card">
          <img src={bci} alt="" />
          <p>APPROVED BY <br />BCI (Bar Council of India)</p>
        </div>
        <div className="auth-card">
          <img src={ugc} alt="" />
          <p>ACCREDITED BY <br /> UGC (University Grants Commission)</p>
        </div>
        <div className="auth-card">
          <img src={aicte} alt="" />
          <p>ACCREDITED BY <br />AICTE (All India Council for Technical Education)</p>
        </div>
        <div className="auth-card">
          <img src={pci} alt="" />
          <p>ACCREDITED BY <br />PCI (Pharmacy Council of India)</p>
        </div>
      </div>
    </>
  );
}

export default Authorized;
