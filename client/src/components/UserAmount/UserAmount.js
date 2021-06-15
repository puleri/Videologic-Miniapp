import React, { Component } from 'react';
import CountUp from 'react-countup';

class UserAmount extends Component {
  constructor() {
    super()
    this.state = {
      arrUser: []
    }
  }
  indexUsers() {
    fetch(`http://localhost:9000/docroot/index_user.php`, {
      method: 'GET',
    })
    .then(res => res.json())
    .then(response => {
      this.setState({ arrUser: response })
    })
    .catch(err=> {
      console.log(err)
    });
  }
  componentDidMount() {
    this.indexUsers();
  }
  render(){
    const arr = this.state.arrUser.length
    console.log(arr)
  return (
    <CountUp end={arr} duration={arr/3} />
  )
}
}

export default UserAmount;
