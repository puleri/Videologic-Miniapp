import React, { Component } from 'react';
import { withRouter, Link } from 'react-router-dom';


class ThankYou extends Component {
  render() {
    return (
      <div className="thank-you-div">
        <div className="thank-you">
          <h2>Thank you</h2>
          <p>We have recieved your request and should be back to you in the next 48 hours.</p>

          <Link className="homepage-link" to="/">Back to the homepage</Link>
        </div>
      </div>
    )
  }
}

export default withRouter(ThankYou);
