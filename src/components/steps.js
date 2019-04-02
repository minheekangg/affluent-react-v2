import React from 'react';

import step1 from '../images/1.png'
import step2 from '../images/2.png'
import step3 from '../images/3.png'
import step1_active from '../images/1_active.png'
import step2_active from '../images/2_active.png'
import step3_active from '../images/3_active.png'

class Steps extends React.Component{
    state = {
        step: 1
    }

        // < div className = "feature-icon" >
        //     <div className="icon" >
        //         {this.state.step === 1 ? <div style={{ backgroundColor: 'var(--color-darkblue)', color: "white" }}>1</div> : <div>1</div>}
        //     </div>
        //         </div>

    render(){
        setTimeout(() => {
            if (this.state.step === 3) {
                this.setState({ step: 1 })
            } else {
                this.setState({ step: this.state.step+1 })
            }
          ;
        }, 3000);


        return (<div id="step-container">
            <div id="steps">
                <img src={this.state.step === 1 ? step1_active : step1 } alt="step1"/>
                <div className="step-content">
                    <h4>Fill out an application</h4>
                    <p>Let us know who you are. We only need some of your employment and financial information to make a decision.</p>
               </div>
            </div>
            <div id="steps">
                <img src={this.state.step === 2 ? step2_active : step2} alt="step2" />
                <div className="step-content">
                    <h4>Screen your application</h4>
                    <p>Our machine-learning algorithms will scan your application and decide whether you qualify or not.</p>
                </div>
            </div>
            <div id="steps">
                <img src={this.state.step === 3 ? step3_active : step3} alt="step3" />
                <div className="step-content">
                    <h4>Directly into your account</h4>
                    <p>If you are approved, we will directly fund your checking account. Funds should be accessible in 24 hours.</p>
                </div>
            </div>
        </div>
        )
    }
}

export default Steps