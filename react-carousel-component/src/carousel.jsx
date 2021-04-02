import React from 'react';

class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: 1
    };
    this.handleClickLeft = this.handleClickLeft.bind(this);
    this.handleClickRight = this.handleClickRight.bind(this);
    this.stepper = this.stepper.bind(this);
    this.componentDidMount = this.componentDidMount.bind(this);
  }

  handleClickLeft() {
    clearInterval(this.timerID);
    if (this.state.id === 1) {
      this.setState({ id: 1 });
    } else {
      this.setState({ id: this.state.id - 1 });
    }
    this.componentDidMount();
  }

  handleClickRight() {
    clearInterval(this.timerID);
    if (this.state.id === this.props.pokemon.length) {
      this.setState({ id: 1 });
    } else {
      this.setState({ id: this.state.id + 1 });
    }
    this.componentDidMount();
  }

  stepper() {
    if (this.state.id === this.props.pokemon.length) {
      this.setState({ id: 1 });
    } else {
      this.setState({ id: this.state.id + 1 });
    }
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => this.stepper(),
      3000
    );
  }

  render() {
    const pokemon = this.props.pokemon;
    return (
        <div>
          <div className='img-container'>
            <div className='fas fa-chevron-left arrow' onClick={this.handleClickLeft}></div>
            {pokemon.map(pokemon =>
            <div key={pokemon.id} className={`content ${pokemon.id === this.state.id ? pokemon.name : 'hidden'}`}></div>
            )}
            <div className='fas fa-chevron-right arrow' onClick={this.handleClickRight}></div>
          </div>
          <div className='dot-container'>
            {pokemon.map(pokemon =>
            <div key={pokemon.id} className={`content ${pokemon.id === this.state.id ? 'dot black-dot' : 'dot'}`}></div>
            )}
          </div>
        </div>
    );
  }
}

export default Carousel;
