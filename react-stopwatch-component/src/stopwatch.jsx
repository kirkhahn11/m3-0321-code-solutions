import React from 'react';

class Stopwatch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isPaused: true,
      count: 0
    };
    this.handleClick = this.handleClick.bind(this);
    this.pausePlaySwitch = this.pausePlaySwitch.bind(this);
    this.timer = this.timer.bind(this);
    this.startTimer = this.startTimer.bind(this);
    this.stopTimer = this.stopTimer.bind(this);
    this.handleReset = this.handleReset.bind(this);
  }

  render() {
    const pausePlay = this.pausePlaySwitch();
    return (
      <div>
        <button className="counter" onClick={this.handleReset}>{this.state.count}</button>
        <button className={pausePlay} onClick={this.handleClick}></button>
      </div>
    );
  }

  handleClick() {
    if (this.state.isPaused === true) {
      this.startTimer();
      this.setState({ isPaused: false });
    } else {
      this.setState({ isPaused: true });
      this.stopTimer();
    }
  }

  pausePlaySwitch() {
    if (this.state.isPaused === false) {
      return 'pause';
    } else {
      return 'play';
    }
  }

  timer() {
    this.setState({ count: this.state.count + 1 });
  }

  stopTimer() {
    if (this.state.isPaused === false) {
      clearInterval(this.intervalId);
    }
  }

  startTimer() {
    if (this.state.isPaused === true) {
      this.intervalId = setInterval(this.timer, 1000);
    }
  }

  handleReset() {
    if (this.state.isPaused === true) {
      this.setState({ count: 0 });
    }
  }
}

export default Stopwatch;
