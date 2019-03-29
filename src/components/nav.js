import React from 'react'
import { Link } from "react-router-dom";

class Nav extends React.Component{
    state = {
        renderSecondNav: true
    }
    
    componentDidMount(){
        window.addEventListener('scroll', (e)=>this.handleScroll(e))
    }
    
    handleScroll = (event) => {
        const mainbottom = document.querySelector("#aboutpage-1").offsetHeight;
        const stop = event.target.scrollingElement.scrollTop
        const navbar1 = document.querySelector('#nav1')
        const navbar2 = document.querySelector('#nav2')
        
        if (navbar1 && (stop < mainbottom)){
            navbar1.classList.add("sticky");
            navbar1.classList.remove("hidden");
            navbar2.classList.add("hidden");
        } else if (navbar1 && (stop > mainbottom)){
            navbar1.classList.add("hidden");
            navbar2.classList.remove("hidden");
            navbar2.classList.add("sticky");
        }
    }

  
    

    renderNav1 (){
        return <><nav id="nav1" className="sticky" style={{"fontSize": "50px"}}>
            <div className="index-nav">
                <Link to="/apply">Apply Now</Link>
                <Link to="/about">About Us</Link>
                <Link to="/contact">Contact Us</Link>
                <Link to="/faq">Questions</Link>
                <Link to="/login">Sign In</Link>
            </div>
        </nav>
            <nav id="nav2" className="hidden" style={{ "backgroundColor": "white" }}>
                <div className="nav-wrapper">
                    <Link to="/" className="brand-logo" style={{ "color": "var(--color-lightgreen)", "fontSize": "60px" }}>affluent</Link>
                    <ul id="nav-mobile" className="right hide-on-med-and-down">
                        <li><Link to="/about">About Us</Link></li>
                        <li><Link to="/contact">Contact Us</Link></li>
                        <li><Link to="/faq">Questions</Link></li>
                        <li><Link to="/login">Login In</Link></li>
                        <li><Link to="/apply" id="apply-button" style={{ fontSize: "16px", lineHeight: "3.5", color: "white"}} >Apply Now</Link></li>
                    </ul>
                </div>

            </nav> 
        </>
    }

    renderNav2(){
       return (
         <nav
           id="nav2"
           className="sticky"
           style={{ "background-color": "white" }}
         >
           <div className="nav-wrapper">
             <Link
               to="/"
               className="brand-logo"
               style={{
                 color: "var(--color-lightgreen)",
                 "font-size": "60px"
               }}
             >
               affluent
             </Link>
             <ul id="nav-mobile" className="right hide-on-med-and-down">
               <li>
                 <Link to="/about">About Us</Link>
               </li>
               <li>
                 <Link to="/contact">Contact Us</Link>
               </li>
               <li>
                 <Link to="/faq">Questions</Link>
               </li>
               <li>
                 <Link to="/login">Login In</Link>
               </li>
               <li>
                 <Link to="/apply" id="apply-button" style={{ fontSize: "16px", lineHeight: "3.5", color: "white"}} >Apply Now</Link>
               </li>
             </ul>
           </div>
         </nav>
       );
    }



    render(){
        if (window.location.pathname === '/' || window.location.pathname === '/welcome') {
            return this.renderNav1()
        } else {
            return this.renderNav2()
        }
        
    }
}

export default Nav