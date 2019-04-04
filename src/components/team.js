import React from 'react'; 


class Team extends React.Component {
  state = {
    currentJobIdx: 0
  };


  render() {
      const jobs = ["entrepreneurs", "software engineers", "dreamers", "FRANCO"];
      setTimeout(() => {
          if (this.state.currentJobIdx < jobs.length -1) {
              this.setState({ currentJobIdx: this.state.currentJobIdx+1 })
          } else {
              this.setState({ currentJobIdx: 0})
          }
          ;
      }, 500);

    return (
      <div id="team-box">
        {jobs[this.state.currentJobIdx]}
      </div>
    )
  }
}
export default Team;