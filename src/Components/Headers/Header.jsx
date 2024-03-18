import React from "react";
import logo from "../../assets/logos/medi-logo.png";
import { Outlet, Link } from "react-router-dom";
import "./Header.css";

function Header() {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  let rbndata = "Contact Us: admission@medicaps.ac.in | Call: 7723019450";
  return (
    <>
      <div className="full-header">
        <div className="ribbon-top">{rbndata}</div>
        <div className="my-header">
          <nav
            className="navbar navbar-expand-lg navbar-light bg-light"
            style={{ marginTop: "-16px" }}
          >
            <div className="container-fluid">
              <a className="navbar-brand" href="/">
                <img src={logo} className="medi-logo" alt="medi-logo" />
              </a>
              <button
                className="navbar-toggler "
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNavDropdown"
                aria-controls="navbarNavDropdown"
                aria-expanded="false"
                aria-label="Toggle navigation"
                style={{ paddingLeft: "6px", paddingRight: "6px" }}
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarNavDropdown">
                <ul className="navbar-nav">
                  <li className="nav-item">
                    <Link className="nav-link active" aria-current="page">
                      <a onCflick={() => scrollToSection("why-mu")}>
                        Why MU-SAT
                      </a>
                    </Link>
                  </li>

                  <li className="nav-item">
                    <Link className="nav-link">
                      <a onClick={() => scrollToSection("carrer")}>
                        Career Opportunities
                      </a>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link">
                      <a onClick={() => scrollToSection("programs")}>
                        Programs
                      </a>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link">
                      <a onClick={() => scrollToSection("alumni")}>
                     Our Alumni
                      </a>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
        <Outlet />
      </div>
    </>
  );
}

export default Header;
