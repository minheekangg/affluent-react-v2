import React from 'react';
import "materialize-css/dist/css/materialize.min.css";
import { Link } from "react-router-dom";

class Nav extends React.Component {
  renderNav2() {
    return <>
      <nav
        id="nav2"
        className="sticky"
        style={{ backgroundColor: "white" }}
      >
        <div className="nav-wrapper">
          <Link to="/" className="brand-logo" style={{ color: "var(--color-lightgreen)", fontSize: "33px" }}>affluent
          </Link>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li>
              <Link to="/about">
                About Us
              </Link>
            </li>
            <li>
              <Link to="/contact">
                Contact Us
              </Link>
            </li>
            <li>
              <Link to="/faq">Questions</Link>
            </li>
            <li>
              <Link to="/login">Login In</Link>
            </li>
            <li>
              <Link to="/apply"
                id="apply-button"
                style={{
                  fontSize: "15px",
                  lineHeight: "3.5",
                  color: "white"
                }}
              >
                Apply Now
              </Link>
            </li>
          </ul>
        </div>
      </nav>
      <ul id="dropdown1" className="dropdown-content">
        <li><a href="#!">one</a></li>
        <li><a href="#!">two</a></li>
        <li><a href="#!">three</a></li>
      </ul>
      </>
  }

  render() {
    const { Properties } = this.props;
    return <>
      {this.renderNav2()}
      <Properties />
    </>
    
  }
}

export default Nav