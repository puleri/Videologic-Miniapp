import React, { Component } from 'react';

import Profile from './Profile.js';
import Credentials from './Credentials.js';
import Permissions from './Permissions.js';
import DeleteAccount from './DeleteAccount.js';
import Footer from '../Footer/Footer.js';

import "./AccountSettings.css";

import { withRouter } from 'react-router-dom';


class AccountSettings extends Component {
  constructor(props){
    super(props)
    this.state = {
      active: 'Profile'
    }
    this.handleClick = this.handleClick.bind(this);
  }
  componentDidMount() {
    console.log("isAuth is", this.props.isAuth())
  }
  handleClick(e) {
    // console.log(e.target.innerHTML)
    this.setState({
      active: e.target.innerHTML
    })
  }
  render(){
    let profileStyle =  {  };
    let credentialsStyle = { };
    let permissionsStyle = { };
    let deleteAcctStyle = { };

    if (this.state.active === 'Profile') {
      profileStyle =  { color: "black",   borderRight: "5px solid rgb(194,38,15)"};
      credentialsStyle = { };
      permissionsStyle = { };
      deleteAcctStyle = { };
    }
    if (this.state.active === "Credentials") {
      profileStyle =  {  };
      credentialsStyle = { color: "black", borderRight: "5px solid rgb(194,38,15)" };
      permissionsStyle = { };
      deleteAcctStyle = { };
    }
    if (this.state.active === "Permissions") {
      profileStyle =  {  };
      credentialsStyle = { };
      permissionsStyle = { color: "black", borderRight: "5px solid rgb(194,38,15)" };
      deleteAcctStyle = { };
    }
    if (this.state.active === "Delete Account") {
      profileStyle =  {  };
      credentialsStyle = { };
      permissionsStyle = { };
      deleteAcctStyle = { color: "black", borderRight: "5px solid rgb(194,38,15)" };
    }
    switch (this.state.active) {
      case "Credentials":
        return (
          <>
          <div className="tab-container">
            <button style={ profileStyle } onClick={this.handleClick} className="tab profile-tab">
              Profile
            </button>
            <button style={ credentialsStyle } onClick={this.handleClick} className="tab credentials-tab">
              Credentials
            </button>
            <button style={ permissionsStyle } onClick={this.handleClick} className="tab permissions-tab">
              Permissions
            </button>
            <button style={ deleteAcctStyle } onClick={this.handleClick} className="tab deleteAcct-tab">
              Delete Account
            </button>
            <div className="tab-highlight">

            </div>
            <div className="settings-side-bar">
            <i className="settings-icon-header fas fa-cogs"></i>
            </div>
          </div>
            <div className="settings-container">
              <Credentials />
            </div>
            <div className="Profile-Footer">
              <Footer />
            </div>          </>
        )
        case "Permissions":
          return (
            <>
            <div className="tab-container">
              <button style={ profileStyle } onClick={this.handleClick} className="tab profile-tab">
                Profile
              </button>
              <button style={ credentialsStyle } onClick={this.handleClick} className="tab credentials-tab">
                Credentials
              </button>
              <button style={ permissionsStyle } onClick={this.handleClick} className="tab permissions-tab">
                Permissions
              </button>
              <button style={ deleteAcctStyle } onClick={this.handleClick} className="tab deleteAcct-tab">
                Delete Account
              </button>
              <div className="tab-highlight">

              </div>
              <div className="settings-side-bar">
              <i className="settings-icon-header fas fa-cogs"></i>
              </div>
            </div>
              <div className="settings-container">
                <Permissions />
              </div>
              <div className="Profile-Footer">
                <Footer />
              </div>            </>
          )
      case "Delete Account":
        return (
          <>
          <div className="tab-container">
            <button style={ profileStyle } onClick={this.handleClick} className="tab profile-tab">
              Profile
            </button>
            <button style={ credentialsStyle } onClick={this.handleClick} className="tab credentials-tab">
              Credentials
            </button>
            <button style={ permissionsStyle } onClick={this.handleClick} className="tab permissions-tab">
              Permissions
            </button>
            <button style={ deleteAcctStyle } onClick={this.handleClick} className="tab deleteAcct-tab">
              Delete Account
            </button>
            <div className="tab-highlight">

            </div>
            <div className="settings-side-bar">
            <i className="settings-icon-header fas fa-cogs"></i>
            </div>
          </div>
            <div className="settings-container">
              <DeleteAccount />
            </div>
            <div className="Profile-Footer">
              <Footer />
            </div>          </>
        )
      default:
        return (
          <>
          <div className="tab-container">
            <button style={ profileStyle } onClick={this.handleClick} className="tab profile-tab">
              Profile
            </button>
            <button style={ credentialsStyle } onClick={this.handleClick} className="tab credentials-tab">
              Credentials
            </button>
            <button style={ permissionsStyle } onClick={this.handleClick} className="tab permissions-tab">
              Permissions
            </button>
            <button style={ deleteAcctStyle } onClick={this.handleClick} className="tab deleteAcct-tab">
              Delete Account
            </button>
            <div className="tab-highlight">

            </div>
            <div className="settings-side-bar">
            <i className="settings-icon-header fas fa-cogs"></i>
            </div>
          </div>
            <div className="settings-container">
              <Profile />
            </div>
            <div className="Profile-Footer">
              <Footer />
            </div>
          </>
        )
    }
  }
}

export default withRouter(AccountSettings);
