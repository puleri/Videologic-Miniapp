import React, { Component } from 'react';
import { withRouter, Link } from 'react-router-dom';
import vv from './icon.png'
import './ThankYou.css';


class ThankYou extends Component {
  render() {
    return (
      <div className="thank-you-div">
        <img id="ty-icon" src={vv} alt="VV Icon" />
        <div className="thank-you">
          <p>Thank you. We have recieved your request and should be back to you in the next 48 hours.</p>
          <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
          <Link className="homepage-link" to="/">Back to the homepage</Link>

        </div>

      </div>
    )
  }
}

export default withRouter(ThankYou);
