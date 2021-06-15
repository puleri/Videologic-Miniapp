import React, { Component } from 'react';
import CountUp from 'react-countup';

class AdminCount extends Component {
  render(){
  return (
    <CountUp end={8} duration={6} />
  )
}
}

export default AdminCount;
