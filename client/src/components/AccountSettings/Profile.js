import React, { Component } from 'react';

import "./Profile.css";

class Profile extends Component {
  constructor(props) {
    super(props)

    this.state = {
      strFirst: '',
      strLast: '',
      username: ''
    }
  }
    getProfile() {
      const username = localStorage.getItem('user')

      var fd = new FormData();
      fd.append('username', username);
      fetch(`http://localhost:9000/docroot/read_user.php`, {
        method: 'POST',
        body: fd
      })
      .then(res => res.json())
      .then(res=>{
        const fullName = res[0]
        // console.log('res is', fullName.strFirst)
        this.setState({
          strFirst: fullName.strFirst,
          strLast: fullName.strLast
        })
      })

      .catch(err => console.err)


      this.setState({
        username: username
      })
      console.log('username is', username)
    }
    componentDidMount() {
      this.getProfile()
    }

  render() {
    return (
      <>
        <div className="profile-card-container">
        <i className="account-cogs fas fa-cogs"></i>
          <h3 className="account-header">Your Profile</h3>
          <h5 className="profile-info" >Name</h5>
          <p>{this.state.strFirst} {this.state.strLast}</p>
          <h5 className="profile-info" >Email</h5>
          <p>{this.state.username}</p>
        </div>
      </>
    )
  }
}
export default Profile
