import React from 'react';

class Accordion extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: ''
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(id) {
    if (this.state.id === id) {
      this.setState({ id: '' });
    } else {
      this.setState({ id: id });
    }
  }

  render() {
    const books = this.props.books;
    const bookItems = books.map(books =>
      <div className='author' onClick={() => this.handleClick(books.id)} key={books.id}>{books.author}
        <div className={`content ${books.id === this.state.id ? 'title show' : 'title hidden'}`}>{books.title}</div>
      </div>);
    return (
      <div>{bookItems}</div>
    );
  }
}

export default Accordion;
