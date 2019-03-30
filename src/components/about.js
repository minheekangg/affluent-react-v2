import React from 'react';
import { Grid } from "semantic-ui-react";

import Team from './team'

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

            <Grid.Row id="aboutpage-2" style={{textAlign: "center"}}>
            <h4>Bringing ethical lending back</h4>
                <div id="ethical-table">
                   <div><h3>Accessible financing</h3>We position ourselves as an alternative option to the payday or personal loan industry. Affluent provides simple financing options with quick access to cash.</div>
                   <div><h3>Surviving a loan</h3>Traditional consumer lenders have made a business trapping borrowers into debt. We want to change that, so we pride ourselves on transparent terms and making sure you know what you’re paying.</div>
                </div>
                <div className="line"></div>
                <div id="ethical-table">
                   <div><h3>Improving credits</h3>Helping our borrowers solve their cash emergencies is important, but we also want to facilitate our borrowers to improve their credit scores. </div>
                   <div><h3>Innovation</h3>Using machine-learning and new technology, we are able to offer better rates and terms than traditional lenders.</div>
                </div>
              </Grid.Row> 
                <div id="team-div">
                    <h1><span style={{ color: 'var(--color-lightgreen)', fontFamily: "var(--main-font)"}}>affluent's</span> team is made up of</h1>
                    <Team />
                    <br/>
                    <div className="line2"></div>
                </div>
        


          </>
        );
    }
}

export default About;