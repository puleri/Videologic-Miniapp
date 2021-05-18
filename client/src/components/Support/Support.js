import React, { Component } from 'react';
import { withRouter, Link } from 'react-router-dom';
// import logo from './elephant.png';
import 'whatwg-fetch';

class Support extends Component {
  constructor(props){
    super(props);
    this.state= {
      strFname: '',
      strLname: '',
      strEmail: '',
      strMessage: '',
      mailSent: '',
      error: null
  }
    this.getPHP = this.getPHP.bind(this);
  }

  getPHP()
  {
    var fd = new FormData();
    fd.append('content', 'test2');
    fd.append('strFname', this.state.strFname)
    fd.append('strLname', this.state.strLname)
    fd.append('strEmail', this.state.strEmail)
    fd.append('strMessage', this.state.strMessage)
    // console.log(Array.from(fd));
    fetch(`http://localhost:9000/docroot/demo.php`, {
      method: 'POST',
      body: fd,
    }).then(res => res.json())
    .then(response => {
      console.log('response: ', response)
    })
    .catch(err => {
      console.log(err)
    } );
  }

  render()
  {
    return (
      <div className='background'>
        <div className="header-div">
            <div>
              <h1 className="support-header">Support Center</h1>
              <h4 className="header">Need help? Submit a support request and we'll get back to you ASAP.</h4>
            </div>
        </div>
        <br />
        <br />
        <div className="form-div">
          <div className="form">
          <h1 className="form-header">Get in touch</h1>
          <form>
            <label>First name</label>
            <input type="text" id="firstname" placeholder="your name..."
              value={this.state.strFname}
              onChange={e => this.setState({ strFname: e.target.value })}
            />
            <label>Last name</label>
            <input type="text" id="lastname" placeholder="your last name..."
              value={this.state.strLname}
              onChange={e => this.setState({ strLname: e.target.value })}
            />
            <label>Email</label>
            <input type="email" id="email" placeholder="your email..."
              value={this.state.strEmail}
              onChange={e => this.setState({ strEmail: e.target.value })}
            />
            <label>Message</label>
            <textarea rows="10" type="text" id="message" placeholder="your message..."
              value={this.state.strMessage}
              onChange={e => this.setState({ strMessage: e.target.value })}
            />

          </form>
          <Link to="/ThankYou"><button className="load" onClick={this.getPHP}>Send it along</button></Link>
          </div>
        </div>
      </div>
    )
  }
}

// sliding accent on load
// <div className="mid-page-top"></div>
// <div className="mid-page-bottom"></div>

export default withRouter(Support);
