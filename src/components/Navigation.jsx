import React from "react";
import { Link, withRouter } from "react-router-dom";
import AuthenticationButton from "./AuthenticationButton";

function Navigation(props) {
  return (
    <div className="navigation">
      <nav className="navbar navbar-expand navbar-dark bg-dark">
        <div className="container">
          <Link className="navbar-brand" to="/">
            Cryptoboard
          </Link>

          <div>
            <ul className="navbar-nav ml-auto">
              <li
                className={`nav-item  ${
                  props.location.pathname === "/" ? "active" : ""
                }`}
              >
                <Link className="nav-link" to="/">
                  Home
                  <span className="sr-only">(current)</span>
                </Link>
              </li>
              <li
                className={`nav-item  ${
                  props.location.pathname === "/portfolio" ? "active" : ""
                }`}
              >
                <Link className="nav-link" to="/portfolio">
                  Portfolio
                </Link>
              </li>
              <li>
              <AuthenticationButton/>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default withRouter(Navigation);