// import react and destructure component out of it to avoid tying "React.Component"
// import router and this pages css
import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import "./Login.css";
import 'whatwg-fetch';

// Creating a class component
class Login extends Component {
// constructor is created to create local state which will be populated with
// form data
  constructor(props){
    super(props)
    this.state = {
      email: '',
      password: '',
      user: null
    }
    this.signIn = this.signIn.bind(this);
    // const loggedIn = localStorage.getItem('user')

}
// any time a change happens in the form the state is updated! thanks react!
  handleChange = event => this.setState({
    [event.target.name]: event.target.value
  })


// this is our arrow function for signing in on a click event
  signIn = event =>
  {
    event.preventDefault()
    // const { user, setUser } = this.props
    // creating a new form data object will let us send the data to php easier
    var login = new FormData();
    // here we are appending data to the form object we just created
    login.append('Login', 'Credentials');
    login.append('email', this.state.email)
    login.append('password', this.state.password)
    fetch(`http://localhost:9000/docroot/admin_login.php`, {
      method: 'POST',
      body: login
    })
    // .then(console.log(login.get('email')))
    .then(res => res.json())
    .then(response => {
      // create an object with a uniqid and abstract this logic away from the front end
      if (response === "Logging in..."){
        this.props.setUser(this.state.email)
        this.props.history.push('/')
        // localStorage.setItem('user', this.state.email)
        // const loggedIn = localStorage.getItem('user')
        // console.log("logged in user in storage is, ", loggedIn);
        // next delete local storage user on logout
    } else {
      throw Error("Cannot log in");
    }
    })
    // .then(console.log(this.props))
    .catch(err => {
      console.log(err.toString())
    } );


  }

  // onSignIn = event => {
  //   event.preventDefault()
  //
  //   const setUser = this.props
  //   console.log(this.state)
  // }
  render() {
    if (localStorage.getItem('user')) {
      const loggedIn = localStorage.getItem('user')
      return (
        <h1>logged in as {loggedIn}</h1>
      )
    }
    return (
      <div className="login">
        <div className="blob">
        <svg width="25%" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <path fill="#325662" d="M42.2,-33.5C48.3,-26.1,42.4,-8.9,35.8,3.3C29.2,15.5,21.8,22.7,12.1,28.8C2.4,34.8,-9.5,39.7,-16.3,35.8C-23.1,31.8,-24.7,18.9,-26.2,7.4C-27.6,-4,-28.9,-14.1,-24.5,-21.1C-20.2,-28.1,-10.1,-32.1,4,-35.3C18.1,-38.5,36.2,-40.9,42.2,-33.5Z" transform="translate(100 100)" />
        </svg>
        </div>
        <div className="oblong">
        <svg width="25%" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <path fill="#C2260E" d="M43.2,-45.4C56,-40.8,66.3,-27.1,66.1,-13.8C65.9,-0.4,55.1,12.6,47.6,29.3C40.1,46,35.8,66.3,25.8,69.1C15.8,71.9,0.2,57.3,-18.3,50.5C-36.8,43.7,-58.1,44.8,-70.6,35C-83,25.3,-86.5,4.7,-78.6,-9.3C-70.7,-23.3,-51.4,-30.8,-36.4,-35C-21.4,-39.2,-10.7,-40.2,2.3,-42.9C15.2,-45.7,30.4,-50,43.2,-45.4Z" transform="translate(100 100)" />
        </svg>
        </div>
        <div className="blorb">
        <svg width="200%" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <path fill="#B099AC" d="M23.4,-32.2C36,-33.1,56.1,-38.5,69.6,-33.9C83.2,-29.3,90.3,-14.6,82.6,-4.4C74.9,5.8,52.4,11.5,40.7,19.3C28.9,27,27.9,36.8,22.9,48.4C17.9,60,9,73.4,-1.6,76.2C-12.2,78.9,-24.4,71.1,-31.1,60.6C-37.8,50,-39.1,36.6,-47,26.1C-55,15.5,-69.5,7.8,-71.8,-1.3C-74,-10.4,-64,-20.8,-57.7,-34.1C-51.4,-47.4,-48.8,-63.7,-39.8,-64.9C-30.8,-66.1,-15.4,-52.2,-5,-43.5C5.3,-34.8,10.7,-31.2,23.4,-32.2Z" transform="translate(100 100)" />
        </svg>
        </div>
        <div className="greenblob">
        <svg width="15%" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <path fill="#40B31E" d="M29,-53.1C35.3,-46.7,36.4,-34.2,37.6,-24.3C38.8,-14.4,40.2,-7.2,46.6,3.7C53,14.6,64.5,29.2,61.6,36.2C58.7,43.2,41.4,42.5,28.8,43C16.1,43.4,8.1,44.9,-3.8,51.5C-15.7,58.2,-31.5,70,-39.4,66.8C-47.4,63.7,-47.6,45.6,-46.8,32C-46.1,18.4,-44.5,9.2,-42.8,1C-41,-7.2,-39.1,-14.3,-40.2,-28.6C-41.2,-42.8,-45.3,-64.1,-39.1,-70.6C-32.9,-77,-16.4,-68.6,-2.5,-64.3C11.4,-59.9,22.8,-59.5,29,-53.1Z" transform="translate(100 100)" />
        </svg>
        </div>
        <div className="orangeblob">
        <svg width="40%" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <path fill="#EB851C" d="M30.2,-57.9C39.4,-47.1,47.1,-39.4,57.8,-30.2C68.6,-21.1,82.3,-10.5,84.1,1C85.9,12.6,75.8,25.3,65.6,35.3C55.4,45.4,45.1,52.8,34.1,57.6C23.2,62.3,11.6,64.4,-1.9,67.6C-15.3,70.8,-30.6,75.1,-37.9,68.3C-45.3,61.5,-44.7,43.4,-45.9,30.2C-47.2,17,-50.4,8.5,-52,-0.9C-53.6,-10.3,-53.6,-20.6,-48.9,-28C-44.2,-35.4,-34.9,-39.8,-26,-50.8C-17,-61.7,-8.5,-79.1,1,-80.9C10.5,-82.7,21.1,-68.7,30.2,-57.9Z" transform="translate(100 100)" />
        </svg>
        </div>

        <div className="login-element">
          <form className="login-form">
            <h2>Sign In</h2>
            <hr className="hr"/>
            <label className="login-label">Email</label>
            <input
            value={this.state.email}
            onChange={e => this.setState({ email: e.target.value })}
            type="email" placeholder="email..."/>
            <label className="login-label">Password</label>
            <input
            value={this.state.password}
            onChange={e => this.setState({ password: e.target.value })}
            id="password" type="password" placeholder="password..."/>
            <button onClick={this.signIn}id="sign-in-button">Submit</button>
          </form>
        </div>
      </div>
    )
  }
}
export default withRouter(Login)
