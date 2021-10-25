import React, { Component } from 'react';
import UserService from '../Services/UserService';
import EntirePlayList from './EntirePlayList';
import '../CSS/account.css';

class ListUsers extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
    };
    // this.addUser = this.addUser.bind(this);
    this.editUser = this.editUser.bind(this);
    this.deleteUser = this.deleteUser.bind(this);
    // this.viewUser = this.viewUser.bind(this);
  }

  componentDidMount() {
    UserService.getUsers().then((res) => {
      this.setState({ users: res.data });
    });
  }

  // addUser() {
  //   this.props.history.push('/add-user');
  // }

  editUser(id) {
    this.props.history.push(`/update-user/${id}`);
  }

  deleteUser(id) {
    this.props.history.push(`/delete-user/${id}`);
    // UserService.deleteUser(id).then(res => {
    //     this.setState({
    //          user: this.state.users.filter(user => user.id !== id)
    //     })
    // })
  }

  // viewUser(id) {
  //   this.props.history.push(`/view-user/${id}`);
  // }

  render() {
    return (
      <div>
        <h2 className='userAccountText'>{this.state.users.name} Account</h2>
        {/* <div>
          <button className='btn btn-primary' onClick={this.addUser}>
            {' '}
            Add User
          </button>
        </div> */}
        <div>
          <p></p>
        </div>
        <div className='row'>
          {/* <table className='table table-striped table-bordered'>
            <thead>
              <tr>
                <th>User Name</th>
                <th>User Email</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody> */}
          {/* {this.state.users.map().filter((u) => u.id === id)} */}
          {this.state.users.map((user) => (
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
          ))}
          ;{/* <h2>{this.state.users.userName}</h2> */}
          {/* Entire playlist */}
          <EntirePlayList />
          {/* {this.state.users.map((user) => (
                <tr>
                  <div key={user.id}>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                  </div>
                  <td>
                    <button
                      onClick={() => this.editUser(user.id)}
                      className='btn btn-primary'
                    >
                      Update
                    </button>
                    <button
                      onClick={() => this.deleteUser(user.id)}
                      className='btn btn-danger'
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))} */}
          {/* </tbody>
          </table> */}
        </div>
      </div>
    );
  }
}

export default ListUsers;
