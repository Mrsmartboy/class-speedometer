import {Component} from 'react'
import './index.css'

class Speedometer extends Component {
  state = {speed: 0}

  onApplyAccelerate = () => {
    const {speed} = this.state
    if (speed < 200) {
      this.setState(prevState => ({
        speed: prevState.speed + 10,
      }))
    }
  }

  onApplyBrake = () => {
    const {speed} = this.state
    if (speed > 0)
      this.setState(prevState => ({
        speed: prevState.speed - 10,
      }))
  }

  render() {
    const {speed} = this.state

    return (
      <div className="container">
        <h1 className="heading">SPEEDOMETER</h1>
        <img
          src="https://assets.ccbp.in/frontend/react-js/speedometer-img.png"
          alt="speedometer"
          className="image"
        />
        <h1 className="speed">Speed is {speed}mph</h1>
        <p className="description">Min Limit is 0mph, Max Limit is 200mph</p>
        <div className="button-container">
          <button
            className="accelerate"
            type="button"
            onClick={this.onApplyAccelerate}
          >
            Accelerate
          </button>
          <button className="brake" type="button" onClick={this.onApplyBrake}>
            Apply Brake
          </button>
        </div>
      </div>
    )
  }
}

export default Speedometer
