import React from "react";
import { Badge } from "react-bootstrap";
import "./styles.css";
const Options = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav">
            <li className ="nav-item">
              <a className="nav-link" href="#">
                Code 
              </a>
            </li>
            <li className="nav-item active">
              <a className="nav-link" href="#" id="issue" className="block-example border-bottom border-dark">
                Issues<span className="sr-only">(current)</span><Badge variant="light">210</Badge>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Pull requests<Badge variant="light">111</Badge>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Projects<Badge variant="light">1</Badge>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Wiki
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Insights
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Options;
