import React from 'react';

class ToggleSwitch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isClicked: true
    };
    this.handleClick = this.handleClick.bind(this);
    this.toggleWord = this.toggleWord.bind(this);
    this.toggleInnerBox = this.toggleInnerBox.bind(this);
    this.toggleOuterBox = this.toggleOuterBox.bind(this);
  }

  render() {
    this.toggleWord();
    const textContent = this.toggleWord();
    const outerBox = this.toggleOuterBox();
    const innerBox = this.toggleInnerBox();
    return (
      <div className="container">
        <button className={outerBox} onClick={this.handleClick}>
        <div className={innerBox}></div>
      </button>
      {textContent}
      </div>
    );
  }

  handleClick() {
    if (this.state.isClicked === true) {
      this.setState({ isClicked: false });
    } else {
      this.setState({ isClicked: true });
    }
  }

  toggleWord() {
    if (this.state.isClicked === false) {
      return 'Off';
    } else {
      return 'On';
    }
  }

  toggleOuterBox() {
    if (this.state.isClicked === false) {
      return 'outer-box-2';
    } else {
      return 'outer-box';
    }
  }

  toggleInnerBox() {
    if (this.state.isClicked === false) {
      return 'inner-box-2';
    } else {
      return 'inner-box';
    }
  }
}

export default ToggleSwitch;
