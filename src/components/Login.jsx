import React, { Component } from 'react';
import { connect } from 'react-redux';
import  { login } from '../actions/loginActions.jsx';


class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    }
  }

  onSubmit() {
    this.props.login(this.state.emailText, this.state.passwordText);
  }

  handleInput(key, input) {
    this.setState({[key]: input});
  }
  
  render() {
    return (
      <div>
        <input type='text' onChange={(event) => this.handleInput('email', event.target.value)} />
        <input type='password' onChange={(event) => this.handleInput('password', event.target.value)} />
        <div onClick={() => this.onSubmit()}>{'Submit'}</div>
      </div>
    )
  }
}

export default connect (
  state => ({
  }),
  dispatch => ({
    login: (email, password) => {
      dispatch(login(email, password));
    }
  })
)(Login)
