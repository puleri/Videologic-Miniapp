import React, { Component } from 'react';
import CountUp from 'react-countup';

class TicketCounter extends Component {
  render(){
  return (
    <CountUp end={4} duration={8} />
  )
}
}

export default TicketCounter;
