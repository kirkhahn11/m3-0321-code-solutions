import React from 'react';

// let count = 0;

class HotButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
    this.handleClick = this.handleClick.bind(this);
    this.getColor = this.getColor.bind(this);
  }

  render() {
    const color = this.getColor();
    return (
      <button id='button' style={{ backgroundColor: color }} onClick={this.handleClick}>Hot Button</button>
    );
  }

  handleClick() {
    this.setState({ count: this.state.count + 1 });
  }

  getColor() {
    if (this.state.count < 3) {
      return 'blue';
    } else if (this.state.count >= 3 && this.state.count < 6) {
      return 'green';
    } else if (this.state.count >= 6 && this.state.count < 9) {
      return 'yellow';
    } else if (this.state.count >= 9 && this.state.count < 12) {
      return 'orange';
    } else if (this.state.count >= 12 && this.state.count < 15) {
      return 'red';
    } else if (this.state.count >= 15) {
      this.setState({ count: 0 });
      return 'blue';
    }
  }
}

export default HotButton;
