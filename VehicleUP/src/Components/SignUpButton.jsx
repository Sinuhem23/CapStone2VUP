import React, { Component } from 'react';
import UserService from '../Services/UserService';
import "../CSS/signup.css"





class SignUp extends Component {

  constructor(props) {
    super(props);
    this.state = {
      users: [],
    };
    this.addUser = this.addUser.bind(this);
  }

  componentDidMount() {
    UserService.getUsers().then((res) => {
      this.setState({ users: res.data });
    });
  }

  addUser() {
    this.props.history.push('/add-user');
  }




  render(){
    return (
  <div>
      <div>
          <button className='btn btn-primary' onClick={this.addUser}>
            {' '}
            Add User
          </button>
        </div>
        </div>
    )
  }








}
export default SignUp;
