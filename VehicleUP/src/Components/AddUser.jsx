import React, { Component } from 'react';
import UserService from '../Services/UserService';
import "../CSS/adduser.css";

class AddUser extends Component {
constructor(props) {
super(props);
this.state = {
id: '',
name: '',
email: '',
};

// this.idHandler = this.idHandler.bind(this);
this.nameHandler = this.nameHandler.bind(this);
this.emailHandler = this.emailHandler.bind(this);
} //constructor

// idHandler = (event) => {
//   this.setState({
//     id: event.target.value,
//   });
// };

nameHandler = (event) => {
this.setState({
name: event.target.value,
});
};

emailHandler = (event) => {
this.setState({
email: event.target.value,
});
};

saveUser = (e) => {
e.preventDefault();
let user = {
id: this.state.id,
name: this.state.name,
email: this.state.email,
};
console.log(user);
UserService.createUser(user)
.then((res) => {
this.props.history.push('/users');
})
.catch((err) => {
console.log('record not saved.');
});
}; //closing save method

cancel() {
this.props.history.push('/login');
}

render() {
return (
<div>

<div className='signUpContainer'>
  <div className='backgroundCard'>
  <h2 className='textInfo'>Sign Up!</h2>
  <div className='card-body'>
    <form className='signUpForm'>
      
      <div className='form-group signUpText'>
        <label>User Name: </label>
        <input
          placeholder='Name'
          name='name'
          className='form-control'
          value={this.state.name}
          onChange={this.nameHandler}
        />
      </div>
      <div className='form-group signUpText'>
        <label>User Email: </label>
        <input
          placeholder='Email'
          name='email'
          className='form-control'
          value={this.state.email}
          onChange={this.emailHandler}
        />
      </div>
      <button className='btn btn-success saveBtn' onClick={this.saveUser}>
        {' '}
        Save{' '}
      </button>
      <button
        className='btn btn-danger'
        onClick={this.cancel.bind(this)}
      >
        {' '}
        Cancel{' '}
      </button>
    </form>
  </div>
</div>
</div>
</div>
 
);
}
}

export default AddUser;
