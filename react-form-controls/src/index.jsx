import React from 'react';
import ReactDOM from 'react-dom';

class NewsletterForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { email: '' };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange() {
    this.setState({ email: event.target.value });
  }

  handleSubmit() {
    event.preventDefault();
    console.log('state: ', this.state);
  }

  render() {
    return (
    <form>
      <input type="email" onChange={this.handleChange}></input>
      <button onClick={this.handleSubmit}>Email!</button>
    </form>
    );
  }
}

ReactDOM.render(
  <NewsletterForm />,
  document.getElementById('root')
);
