import React from 'react';
import "materialize-css/dist/css/materialize.min.css";
import { Link } from "react-router-dom";
export default class WelcomeView extends React.Component{
    state = {renderSecondNav: false }
    componentDidMount() {
        window.addEventListener('scroll', (e) => {
            const mainbottom = 728
            // const mainbottom = document.querySelector("#aboutpage-1").offsetHeight;
            const stop = e.target.scrollingElement.scrollTop;
                if (stop < mainbottom) {
                    this.setState({ renderSecondNav: false }, () => {
                    })
                } else if (stop > mainbottom) {
                    this.setState({ renderSecondNav: true }, () => {
                    })
                }
        })
         
    }

    renderNav2() {
    return <>
      <nav
        id="nav2"
        className="sticky"
        style={{ backgroundColor: "white" }}
      >
        <div className="nav-wrapper">
          <Link onClick={this.handleClick} to="/" className="brand-logo" style={{ color: "var(--color-lightgreen)", fontSize: "33px" }}>affluent
          </Link>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li>
              <Link onClick={this.handleClick} to="/about">
                About Us
              </Link>
            </li>
            <li>
              <Link onClick={this.handleClick} to="/contact">
                Contact Us
              </Link>
            </li>
            <li>
              <Link onClick={this.handleClick} to="/faq">Questions</Link>
            </li>
            <li>
              <Link onClick={this.handleClick} to="/login">Login In</Link>
            </li>
            <li>
              <Link onClick={this.handleClick} to="/apply"
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


    renderNav1 = () => {
       return (
            <nav id="nav1" className="sticky" style={{ fontSize: "33px" }}>
                <div className="index-nav">
                    <Link onClick={this.handleClick} to="/apply">Apply Now</Link>
                    <Link onClick={this.handleClick} to="/about">About Us</Link>
                    <Link onClick={this.handleClick} to="/contact">Contact Us</Link>
                    <Link onClick={this.handleClick} to="/faq">Questions</Link>
                    <Link onClick={this.handleClick} to="/login">Sign In</Link>
                </div>
            </nav>
       )
    }
    render(){
        const { Properties } = this.props
        return (
            <>
                {this.state.renderSecondNav ? this.renderNav2() : this.renderNav1()}
                <Properties />
            </>
        )
    }
}