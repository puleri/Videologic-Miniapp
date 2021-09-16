import React, { Component } from 'react'
import './Testing.css';

export default class Testing extends Component {
  constructor() {
    super()

    this.state = {
      testCases: []
    }
  }
// On load
indexTests() {
  // console.log("props is ", this.props)
  fetch(`http://localhost:9000/docroot/test_case_index.php`, {
    method: 'GET',
  })
  .then(res => res.json())
  .then(response => {
    this.setState({ testCases: response })
    console.log('state is', this.state.testCases)
  })
  // .then(this.setState(prevState => ({
  //   users: {
  //     ...prevState.users,
  //
  //   }
  // })))
  .catch(err=> {
    console.log(err)
  });
}

componentDidMount() {
  this.indexTests();
}

// tableContentsHTML() {this.state.testCases.map((el, i) => (
//   <td key={i}>
//     {el.id ? 'yes' : 'no'}
//   </td>
// ))

  render () {
  return (
      <>
        <h2 style={{margin: "20px 50px",textAlign:'left'}}>Test Case Planning and Execution</h2>

        <div className="test-case-create">
          <input placeholder="test description..."/>
          <input placeholder="date..."/>
          <input placeholder="expected results..."/>
          <input placeholder="actual results..."/>
          <input placeholder="pass/fail..."/>
          <input placeholder="additional notes..."/>
        </div>

        <div className="test-case-notes">

        </div>

        <div className="test-case-table">
          <table>
          </table>
        </div>
      </>
    )
  }
}
