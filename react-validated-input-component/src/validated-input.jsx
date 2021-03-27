import React from 'react';

class ValidatedInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = { password: '' };
    this.handleChange = this.handleChange.bind(this);
    this.passwordInstructions = this.passwordInstructions.bind(this);
    this.marks = this.marks.bind(this);
  }

  handleChange(event) {
    this.setState({ password: event.target.value });
  }

  passwordInstructions() {
    if (this.state.password.length === 0) {
      return 'A password is required.';
    } if (this.state.password.length > 0 && this.state.password.length < 8) {
      return 'Your password is too short.';
    } if (this.state.password.length >= 8) {
      return '';
    }
  }

  marks() {
    if (this.state.password.length >= 8) {
      return 'is-valid form-control';
    } else {
      return 'is-invalid form-control';
    }
  }

  render() {
    const passwordText = this.passwordInstructions();
    const changeMark = this.marks();
    return (
      <form>
        <label htmlFor="password">Password</label>
        <input
          type="password"
          name="password"
          value={this.state.password}
          onChange={this.handleChange}
          className={changeMark}
          id='marks'
        />
        <div className='error-message'>{passwordText}</div>
      </form>
    );
  }
}

export default ValidatedInput;
