import React, { Component } from 'react';
import '../CSS/login.css';
import { Link } from 'react-router-dom';

export default class LogIn extends Component {
  render() {
    return (
      <div>
        <div className='signUpContainer'>
          <h3 className='textInfo'>Log In!</h3>
          <div className='logInCard-body'>
            <form className='signInForm'>
              <div className='form-group signInText'>
                <label>User Name: </label>
                <input
                  placeholder='Name'
                  name='name'
                  className='form-control'
                  // value={this.state.name}
                  // onChange={this.nameHandler}
                />
              </div>

              <div className='form-group signInText'>
                <label>Password: </label>
                <input
                  placeholder='Password'
                  name='password'
                  className='form-control'
                  // value={this.state.password}
                  // onChange={this.passwordHandler}
                />
              </div>
              <button className='loginSubmit'>Submit</button>
            </form>
            <div className='signUpSection'>
              <h3 className='signUpTextArea'>
                Need To Sign Up?
                <Link to='/add-user'>
                  <button>Sign Up</button>
                </Link>
              </h3>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
