import React from 'react'

const navbar1 = document.querySelector("#nav1");
const navbar2 = document.querySelector("#nav2");
const navbars = document.querySelector("nav");

class Nav extends React.Component{

    componentDidMount(){
        window.addEventListener('scroll', this.handleScroll)
    }

    handleScroll(event){
        // console.log(event)
    }

    renderNavBar(){
        window.onscroll = function(){
            console.log('scrolled')
            if (navbar1) {
                // renderIndexHTMLNav()
            } else {
                // renderSecondStickyNavBar(navbar2);
            }
        }
        }
    

    renderNav1 (){
        return (<nav id="nav1" style={{"fontSize": "18px"}}>
            <div className="index-nav">
                <a href="apply.html">Apply</a>
                <a href="faq.html">FAQ</a>
                <a href="about.html">About</a>
                <a href="contact.html">Contact Us</a>
                <a href="login.html">Login</a>
            </div>
        </nav>)
    }
    renderNav2(){
       return <nav id="nav2" className="hidden" style={{"background-color": "white"}}>
            <div className="nav-wrapper">
                <a href="/" className="brand-logo" style={{"color": "var(--main-lightgreen)", "font-size": "30px"}}>affluent</a>
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                    <li><a href="apply.html">Apply</a></li>
                    <li><a href="faq.html">FAQ</a></li>
                    <li><a href="about.html">About</a></li>
                    <li><a href="contact.html">Contact Us</a></li>
                    <li><a href="login.html">Login</a></li>
                </ul>
            </div>

        </nav>
    }

    render(){
        return <nav id="nav1" style={{ "fontSize": "18px" }}>
            <div className="index-nav">
                <a href="apply.html">Apply</a>
                <a href="faq.html">FAQ</a>
                <a href="about.html">About</a>
                <a href="contact.html">Contact Us</a>
                <a href="login.html">Login</a>
            </div>
        </nav>
    }
}

export default Nav