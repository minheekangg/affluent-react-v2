import React from 'react';
// import MenuIcon from "@material-ui/icons/Menu";
import M from "materialize-css";  
import "materialize-css/dist/css/materialize.min.css";
import { Link } from "react-router-dom";

class Nav extends React.Component {
  state = {
    renderSecondNav: false
  };

  componentDidMount() {
    if (window.location.pathname === '/' ){
      this.setState({ renderSecondNav: false }, () => {
        window.addEventListener('scroll', (e)=>{
          this.renderWelcomePage(e)
        })
      });
    } else {
      this.setState({ renderSecondNav: true })
    }
  }
  
  
  handleOpenNav = ()=>{
    let elems = document.querySelectorAll('.dropdown-content');
    return M.Dropdown.init(elems, { inDuration: 300, outDuration: 225 });
  }


  handleClick = (event) =>{
    // console.log(event.target.pathname, this.state)
      return event.target.pathname === '/' ? this.setState({ renderSecondNav: false }, ()=>{
      window.addEventListener("scroll", e => this.renderWelcomePage(e));
    }) : this.setState({ renderSecondNav: true })
  }

  renderWelcomePage(event) {
    if (window.location.pathname === '/') {
      const mainbottom = document.querySelector("#aboutpage-1").offsetHeight;
      const stop = event.target.scrollingElement.scrollTop;
      // console.log(stop)
      // const navbar2 = document.querySelector("#nav2");
      // const navbar1 = document.querySelector("#nav1");
  
      if (stop < mainbottom) {
        this.setState({ renderSecondNav: false }, () => {
          // console.log('FIRST NAV')
        })
      } else if (stop > mainbottom) {
        this.setState({ renderSecondNav: true }, ()=>{
          // console.log('SECOND NAV')
        })
      }
    }
  }

  renderNav1() {
    return (
      <>
        <nav id="nav1" className="sticky" style={{ fontSize: "50px" }}>
          <div className="index-nav">
            <Link onClick={this.handleClick} to="/apply">Apply Now</Link>
            <Link onClick={this.handleClick} to="/about">About Us</Link>
            <Link onClick={this.handleClick} to="/contact">Contact Us</Link>
            <Link onClick={this.handleClick} to="/faq">Questions</Link>
            <Link onClick={this.handleClick} to="/login">Sign In</Link>
          </div>
        </nav>
      </>
    );
  }

  renderNav2() {
    return <>
      <nav
        id="nav2"
        className="sticky"
        style={{ backgroundColor: "white" }}
      >
        <div className="nav-wrapper">
          <Link onClick={this.handleClick} to="/" className="brand-logo" style={{ color: "var(--color-lightgreen)", fontSize: "55px" }}>affluent
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
                  fontSize: "16px",
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
    
    return this.state.renderSecondNav ? this.renderNav2() : this.renderNav1()
  }
}

export default Nav