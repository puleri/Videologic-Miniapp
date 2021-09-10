import React, { Component } from 'react';

import "./Profile.css";

class Permissions extends Component {
  
  // React way to get scroll height --
  // ************ DO NOT DELETE********************
//   constructor() {
//     super()
//     this.state = {
//       theposition: 0
//     }
//   }
//   componentDidMount() {
//   window.addEventListener('scroll', this.listenToScroll)
// }
//
// componentWillUnmount() {
//   window.removeEventListener('scroll', this.listenToScroll)
// }
//
// listenToScroll = () => {
//   const winScroll =
//     document.body.scrollTop || document.documentElement.scrollTop
//
//   const height =
//     document.documentElement.scrollHeight -
//     document.documentElement.clientHeight
//
//   const scrolled = winScroll / height
//   const rounded = Math.round(100*scrolled);
//
//   this.setState({
//     theposition: rounded,
//   })
//   console.log(this.state.theposition)
// }
//  *********** DO NOT DELETE **************
  render() {
    return (
      <>
        <div className="profile-card-container">
        <i className="account-cogs fas fa-cogs"></i>
          <h3 className="account-header">Your Permissions</h3>
          <div className="permissions-card-container">
          <div>
          <p className="profile-info">Hello, here are <br/> your permissions:</p>
          </div>
          <div>
          <p>-Create<br/></p>
          </div>
          </div>
        </div>
      </>
    )
  }
}
export default Permissions
