import React from 'react';


class Steps extends React.Component{
    state = {
        step: 1
    }



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
                <div className="feature-icon">
                    <div className="icon" >
                        {this.state.step === 1 ? <div style={{ backgroundColor: 'var(--color-darkblue)', color: "white" }}>1</div> : <div>1</div>}
                    </div>
                </div>
                <div className="step-content">
                    <h4>Fill out an application</h4>
                    <p>Let us know who you are. We only need some of your employment and financial information to make a decision.</p>
                </div>
            </div>
            <div id="steps">
                <div className="feature-icon">
                    <div className="icon">
                        {this.state.step === 2 ? <div style={{ backgroundColor: 'var(--color-darkblue)', color: "white" }}>2</div> : <div>2</div>}
                    </div>
                </div>
                <div className="step-content">
                    <h4>Screen your application</h4>
                    <p>Our machine-learning algorithms will scan your application and decide whether you qualify or not.</p>
                </div>
            </div>
            <div id="steps">
                <div className="feature-icon">
                    <div className="icon">
                        {this.state.step === 3 ? <div style={{ backgroundColor: 'var(--color-darkblue)', color: "white" }}>3</div> : <div>3</div>}
                    </div>
                </div>
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