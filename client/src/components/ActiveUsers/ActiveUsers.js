import React, { Component } from 'react';
import CountUp from 'react-countup';

class ActiveUsers extends Component {
  render(){
  return (
    <CountUp end={20} duration={6} />
  )
}
}

export default ActiveUsers;
