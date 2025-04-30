import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [show, setShow] = useState(false);


  return (
    <>
      <nav
        className="navbar navbar-expand-lg bg-body-tertiary "
        style={{ position: "fixed", width: "100%" }}
        id="footer_back_to_top"
      >
        <div className="container ">
          <NavLink className="logo" to="/" onClick={() => setShow(!show)}>
            <img src="https://publicassets.leverageedu.com/landing-pages-new/logo-dark.svg" alt="logo" />
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
            onClick={() => setShow(!show)}
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div
            className={`collapse navbar-collapse ${show ? "show" : ""}`}
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink
                  className="nav-link  fw-bold "
                  aria-current="page"
                  to="/"
                  onClick={() => setShow(!show)}
                >
                  Home
                </NavLink>
              </li>
              <li className="nav-item ">
                <NavLink
                  className="nav-link fw-bold "
                  to="/about"
                  onClick={() => setShow(!show)}
                >
                  About
                </NavLink>
              </li>
              <li className="nav-item ">
                <NavLink
                  className="nav-link fw-bold "
                  to="/experienceCentres"
                  onClick={() => setShow(!show)}
                >
                  Experience Centres
                </NavLink>
              </li>
              <li className="nav-item ">
                <NavLink
                  className="nav-link fw-bold "
                  to="/destinations"
                  onClick={() => setShow(!show)}
                >
                  Destinations
                </NavLink>
              </li>

              <li className="nav-item ">
                <NavLink
                  className="nav-link fw-bold "
                  to="/community"
                  onClick={() => setShow(!show)}
                >
                  Community
                </NavLink>
              </li>
            </ul>

          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
