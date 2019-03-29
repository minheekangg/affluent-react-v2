import React from 'react'

import shark from '../images/shark.png'

class About extends React.Component{
    render(){
        return (
          <>
            <div id="about-top">
              <div>
              <h2>
                  Challenging Consumer Finance
              </h2>
                  Affluent started as an alternative to predatory lenders. <br/>We believe cash shortages happens to everyone. <br/> Our goal is to promote consumer financial stability for our borrowers
              </div>
            </div>
            <div id="left-text-right-picture">
            <span><h3 style={{fontWeight: "bold"}}>We care. <br/>
                Perhaps too much.</h3>
            </span>
                
            <div id="image-container"><img src={shark} alt="test" /></div>
            </div>

          </>
        );
    }
}

export default About;