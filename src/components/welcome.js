import React from 'react';
import { Grid, Image } from "semantic-ui-react";

import pupperImg from '../images/sickpupper.png'
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

            </Grid>
          </>
        );
    }

    // renderRest (){

    //         <div id="aboutpage-1"style={{
    //                 backgroundColor: "var(--color-grey-background)" }} >
    //             <div className="col-md-7">
    //                 <img
    //                     style={{ width: "85%" }}
    //                     align="right"
    //                     src="src/images/graph.png"
    //                     alt="graph"
    //                 />
    //             </div>
    //             <div className="col-md-4">
    //                 <div className="graph-emergency">
    //                     <h4>Emergency advances at a fraction of the cost</h4>
    //                     <button>Apply Now</button>
    //                 </div>
    //             </div>
    //         </div>

    //         <div id="aboutpage-3">
    //             <div className="row" id="about3_row1">
    //                 <div className="col-md-12">
    //                     <h5>Why Affluent?</h5>
    //                 </div>
    //             </div>
    //             <div className="row" id="about3_row2">
    //                 <div className="container">
    //                     <div className="col-md-2 col-sm-6 col-xs-6">
    //                         <img
    //                             src="src/images/percent.png"
    //                             alt="test"
    //                             className="center"
    //                         />
    //                         <h4>Low Rates</h4>
    //                         <p>
    //                             Machine-learning underwriting allows us to cap our
    //                             maximum rate at [48]% APR.
    //                 </p>
    //                     </div>
    //                     <div className="col-md-2 col-sm-6 col-xs-6">
    //                         <img
    //                             src="src/images/dollar.png"
    //                             alt="test"
    //                             className="center"
    //                         />
    //                         <h4>Quick Process</h4>
    //                         <p>
    //                             Funding is quick, and all funds go directly into
    //                             your checking account.
    //                 </p>
    //                     </div>
    //                     <div className="col-md-2 col-sm-6 col-xs-6">
    //                         <img
    //                             src="src/images/building.png"
    //                             alt="test"
    //                             className="center"
    //                         />
    //                         <h4>Transparency</h4>
    //                         <p>
    //                             We pride ourselves on providing clear and explicit
    //                             terms and costs.
    //                 </p>
    //                     </div>
    //                     <div className="col-md-2 col-sm-6 col-xs-6">
    //                         <img
    //                             src="src/images/robot.png"
    //                             alt="test"
    //                             className="center"
    //                         />
    //                         <h4>Machine-Learning</h4>
    //                         <p>
    //                             Our proprietary underwriting allows us to pick the
    //                             best partners, and give the best rates.
    //                 </p>
    //                     </div>
    //                     <div className="col-md-2 col-sm-6 col-xs-6">
    //                         <img
    //                             src="src/images/lock.png"
    //                             alt="test"
    //                             className="center"
    //                         />
    //                         <h4>Security</h4>
    //                         <p>
    //                             Client information confidentiality and confidence
    //                             is our number one priority.
    //                 </p>
    //                     </div>
    //                 </div>
    //             </div>
    //         </div>
    // }
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