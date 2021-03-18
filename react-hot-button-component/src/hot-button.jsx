import React from 'react';

// let count = 0;

class HotButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      color: 'purple',
      count: 0
    };
    this.handleClick = this.handleClick.bind(this);
  }

  render() {
    return (
      <button id='button' style={{ backgroundColor: this.state.color }} onClick={this.handleClick}>Hot Button</button>
    );
  }

  handleClick() {
    this.setState({ count: this.state.count + 1 });
    if (this.state.count > 1) {
      this.setState({ color: 'blue' });
    } if (this.state.count > 4) {
      this.setState({ color: 'green' });
    } if (this.state.count > 7) {
      this.setState({ color: 'yellow' });
    } if (this.state.count > 10) {
      this.setState({ color: 'orange' });
    } if (this.state.count > 13) {
      this.setState({ color: 'red' });
    } if (this.state.count > 14) {
      this.setState({ count: 0 });
    }
  }
}

export default HotButton;
