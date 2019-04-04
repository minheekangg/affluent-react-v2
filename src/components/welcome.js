import React from 'react';
import { Grid, Image, Button } from "semantic-ui-react";


import Steps from './steps.js'

import pupperImg from '../images/sickpupper.png'
import graphImg from '../images/graph.png'
import percentImg from "../images/percent.png"
import dollarImg from "../images/dollar.png"
import buildingImg from "../images/building.png"
import robotImg from "../images/robot.png"
import lockImg from "../images/lock.png"
class Welcome extends React.Component{
    
    renderAboutPageStatic(){
        return (
          <>
            <Grid>
              <Grid.Row id="aboutpage-1">
               <Grid.Column style={{width: "60%"}}>
                    <Image src={pupperImg} alt="pupper" />
                </Grid.Column>
                <Grid.Column
                  id="aboutpage-1-content"
                >
                  <h1>affluent</h1>
                  <span>Short-Term Loans Reinvented</span>
                  <h6>
                    {" "}
                    We understand. <br /> Everyone has emergencies.{" "}
                  </h6>
                </Grid.Column>
              </Grid.Row>

            <Grid.Row id="aboutpage-2">
            <h2>The End of Predatory Finance</h2>
                <div id="about-page-2-container">
               <Grid.Column style={{width: "40%"}}>
                    <div id="aboutpage-2-content">
                    <h6>Moral Lending</h6>
                    <div> No more triple-digit APR for emergency advances and financing. Everyone faces cash flow issues, and we are here to provide support without impossible commitments.</div>
                </div>
                </Grid.Column>
                <Grid.Column style={{ width: "40%" }}>
                <div id="aboutpage-2-content">
                <h6>Fostering Stability</h6>
                  <div> Your financial troubles are our problem to solve. We are here to put you on the path to financial freedom. We promise transparent terms, no hard credit checks, and support to enhance your financial well-being </div>
                </div>
                  
                </Grid.Column>
                </div>
              </Grid.Row> 

              <Grid.Row id="aboutpage-graph" >
              <div id="aboutpage-1">
               <Grid.Column >
                    <Image src={graphImg} alt="graph" style={{width: "100%"}} />
                </Grid.Column>
                <Grid.Column className="graph-emergency">
                    <h4>Emergency advances at a fraction of the cost</h4> <Button>Apply Now</Button>
                </Grid.Column>
              </div>
              </Grid.Row>

            <Grid.Row id="aboutpage-3" >
            <div id="aboutpage-3-container">
                <Grid.Column style={{width: "20%"}}>
                    <div>
                    <Image src={percentImg} />
                    </div>
                    <div id="aboutpage-3-text">
                    <h4>Low Rates</h4> <p> Machine-learning underwriting allows us to cap our maximum rate at [48]% APR.</p>
                    </div>
                </Grid.Column>
                <Grid.Column style={{width: "20%"}}>
                <div>
                    <Image src={dollarImg} />
                </div>
                <div id="aboutpage-3-text">
                    <h4>Quick Process</h4> <p>Funding is quick, and all funds go directly into your checking account.</p>
                </div>
                </Grid.Column>
                <Grid.Column style={{width: "20%"}}>
                  <div>
                      <Image src={buildingImg} />
                  </div>
                  <div id="aboutpage-3-text">
                    <h4>Transparency</h4> <p>We pride ourselves on providing clear and explicit terms and costs.</p>
                  </div>
                </Grid.Column>
                <Grid.Column style={{width: "20%"}}>
                <div>
                    <Image src={robotImg}/>
                </div>
                <div id="aboutpage-3-text">
                    <h4>Machine-Learning</h4><p>Our proprietary underwriting allows us to pick the best partners, and give the best rates.</p>
                </div>
                </Grid.Column>
                <Grid.Column style={{width: "20%"}}>
                <div>
                    <Image src={lockImg}/>
                </div>
                    <div id="aboutpage-3-text">
                      <h4>Security</h4><p>Client information confidentiality and confidence is our number one priority.</p>
                </div>
                </Grid.Column>
            </div>
            </Grid.Row>

            </Grid>
          </>
        );
    }




    render(){
        return <div> {this.renderAboutPageStatic()}

            <div id="aboutpage-4">
                <h5>How it works</h5>
                <Steps />
                <span>Give us a try and check your rate. No credit score checks. <br/> No commitments until you accept the loan terms.</span>
                <button id="start-here-button">Apply Now</button>
                    </div>
                </div>

    }
}

export default Welcome