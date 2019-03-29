import React from 'react';
import { Grid, Image, Button } from "semantic-ui-react";

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
            <h5>The End of Predatory Finance</h5>
                <div id="about-page-2-container">
               <Grid.Column style={{width: "40%"}}>
                    <div id="aboutpage-2-content">
                    <h4>Moral Lending</h4>
                    <div> No more triple-digit APR for emergency advances and financing. Everyone faces cash flow issues, and we are here to provide support without impossible commitments.</div>
                </div>
                </Grid.Column>
                <Grid.Column style={{ width: "40%" }}>
                <div id="aboutpage-2-content">
                <h4>Fostering Stability</h4>
                  <div> Your financial troubles are our problem to solve. We are here to put you on the path to financial freedom. We promise transparent terms, no hard credit checks, and support to enhance your financial well-being </div>
                </div>
                  
                </Grid.Column>
                </div>
              </Grid.Row> 

              <Grid.Row id="aboutpage-graph" >
              <div id="aboutpage-1">
               <Grid.Column style={{width: "80%"}}>
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
                    <Image src={percentImg} />
                    <h4>Low Rates</h4> <p> Machine-learning underwriting allows us to cap our maximum rate at [48]% APR.</p>
                </Grid.Column>
                <Grid.Column style={{width: "20%"}}>
                    <Image src={dollarImg} />
                    <h4>Quick Process</h4> <p>Funding is quick, and all funds go directly into your checking account.</p>
                </Grid.Column>
                <Grid.Column style={{width: "20%"}}>
                    <Image src={buildingImg} />
                    <h4>Transparency</h4> <p>We pride ourselves on providing clear and explicit terms and costs.</p>
                </Grid.Column>
                <Grid.Column style={{width: "20%"}}>
                    <Image src={robotImg}/>
                    <h4>Machine-Learning</h4> 
                    <p>Our proprietary underwriting allows us to pick the best partners, and give the best rates.</p>
                </Grid.Column>
                <Grid.Column style={{width: "20%"}}>
                    <Image src={lockImg} />
                    <h4>Security</h4>
                    <p>Client information confidentiality and confidence is our number one priority.</p>
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
                <div className="row" id="about4_row1">
                    <div className="col-md-12">
                        <h5>How it works</h5></div>
                </div>
                <div className="row" style={{display: "flex"}}>
                    <div className="col-md-8 col-md-offset-2" style={{display: "flex"}}>
                        <div className="steps">
                            <div className="feature-icon">
                                <div className="icon" id={1} >
                                <div>1</div>
                            </div>
                        </div>
                        <div className="step-content">
                            <h4>Fill out an application</h4>
                            <p>Let us know who you are. We only need some of your employment and financial information to make a decision.</p>
                        </div>
                    </div>
                    <div className="steps">
                        <div className="feature-icon">
                            <div className="icon" id={2}>
                                <div>2</div>
                        </div>
                    </div>
                    <div className="step-content">
                        <h4>Screen your application</h4>
                        <p>Our machine-learning algorithms will scan your application and decide whether you qualify or not.</p>
                    </div>
                </div>
                <div className="steps">
                    <div className="feature-icon">
                        <div className="icon" id={3}>
                                <div>3</div>
                    </div>
                </div>
                <div className="step-content">
                    <h4>Directly into your account</h4>
                    <p>If you are approved, we will directly fund your checking account. Funds should be accessible in 24 hours.</p>
                </div>
            </div>
        </div>
        </div>
    </div >

            <div id="start-here">
                <div>
                    <h3>Start Here</h3>
                    <span>Give us a try and check your rate. No credit score checks.
            No commitments until you accept the loan terms.</span>
                    <br/>
                        <button className="start-here-button">Apply Now</button>
        </div>
                </div>
</div>
    }
}

export default Welcome