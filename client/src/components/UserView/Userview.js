import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

class UserView extends Component {
  constructor(props) {
    super(props)

    this.state = {
      user: props.user
    }
  }
  render() {
    return (
      <>
      <h1>Hello world</h1>
      </>
    )
  }
}
export default withRouter(UserView)
