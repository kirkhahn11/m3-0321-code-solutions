import React from 'react';

class AppDrawer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isClicked: false };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({
      isClicked: !this.state.isClicked
    });
  }

  render() {
    if (this.state.isClicked === false) {
      return (
      <div className="fas fa-bars" onClick={this.handleClick}></div>
      );
    } else {
      return (
        <div className='container'>
          <div className='menu'>
          <h1 onClick={this.handleClick}>Menu</h1>
            <p onClick={this.handleClick}>About</p>
            <p onClick={this.handleClick}>Get Started</p>
            <p onClick={this.handleClick}>Sign In</p>
          </div>
          <div className='gray-area' onClick={this.handleClick}></div>
        </div>
      );
    }
  }
}

export default AppDrawer;
