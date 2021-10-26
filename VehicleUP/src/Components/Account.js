import React, { Component } from 'react';
import UserService from '../Services/UserService';
import { getUserFromStorage } from '../LocalStorage/useLocalStorage';
import { Link } from 'react-router-dom';
// import EntirePlayList from './EntirePlayList';
import '../CSS/account.css';

class ListUsers extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {},
    };
    this.deleteUser = this.deleteUser.bind(this);
  }

  componentDidMount() {
    let user = getUserFromStorage();
    if (user !== null) {
      UserService.getUserByUserName(user).then((res) => {
        this.setState({ user: { ...res.data } });
        // this.setState({ user: res.data });
      });
    }
  }

  // addUser() {
  //   this.props.history.push('/add-user');
  // }

  editUser(id) {
    this.props.history.push(`/update-user/${id}`);
  }

  deleteUser(id) {
    this.props.history.push(`/delete-user/${id}`);
  }

  // viewUser(id) {
  //   this.props.history.push(`/view-user/${id}`);
  // }

  render() {
    return (
      <div>
        {this.state.user.username ? (
          <h2 className='userAccountText'>
            {this.state.user.username}'s Account
          </h2>
        ) : (
          <Link className='signUpLink' to='/add-user'>
            Sign up!
          </Link>
        )}

        <div className='userDetailsContainer'>
          {this.state.user.username ? (
            <>
              <div>
                <image className='userImage' alt='User-Image'></image>
              </div>
              <div className='userDetails'>
                <h3>{this.state.user.name} </h3>
                <h3>{this.state.user.email} </h3>
                <button
                  onClick={() => this.editUser(this.state.user.id)}
                  className='updateBtn btn-primary'
                >
                  Update
                </button>
                <button
                  onClick={() => this.deleteUser(this.state.user.id)}
                  className='deleteBtn btn-danger'
                >
                  Delete
                </button>
              </div>
            </>
          ) : (
            <h3></h3>
          )}
        </div>

        <div>
          <p></p>
        </div>
        <div className='row'>
          {/* {this.state.user.map((user) => (
            <div className='userDetailsContainer' key={user.id}>
              <div>
                <image className='userImage' alt='User-Image'></image>
              </div>
              <div className='userDetails'>
                <h3>{user.name} </h3>
                <h3>{user.email} </h3>
                <button
                  onClick={() => this.editUser(user.id)}
                  className='updateBtn btn-primary'
                >
                  Update
                </button>
                <button
                  onClick={() => this.deleteUser(user.id)}
                  className='deleteBtn btn-danger'
                >
                  Delete
                </button>
              </div>
            </div>
          ))} */}
          ;{/* <h2>{this.state.users.userName}</h2> */}
          {/* Entire playlist */}
          {/* <EntirePlayList /> */}
        </div>
      </div>
    );
  }
}

export default ListUsers;
