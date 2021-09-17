import React, { Component } from 'react'
import './Testing.css';

export default class Testing extends Component {
  constructor() {
    super()

    this.state = {
      testCases: [],
      description: '',
      date: '',
      expected: '',
      actual: '',
      pass: false,
      additional: '',
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
      <div className="test-container">
        <h2 style={{margin: "20px 50px",textAlign:'left'}}>Test Case Planning and Execution</h2>

        <div className="test-case-create">
          <div className="form-group">
            <label className="test-create-label">Test description</label>
            <textarea
            className="case-create-child"
            type='text'
            value={this.state.description}
            onChange={e => this.setState({ description: e.target.value })}
            placeholder="test description..."/>
          </div>
          <div className="form-group">
            <label className="test-create-label">Date</label>
            <input
            className="case-create-child"
            type='date'
            value={this.state.date}
            onChange={e => this.setState({ date: e.target.value })}
            placeholder="date..."/>
          </div>
          <div className="form-group">
            <label className="test-create-label">Expected results</label>
            <textarea
            className="case-create-child"
            type='text'
            value={this.state.expected}
            onChange={e => this.setState({ expected: e.target.value })}
            placeholder="expected results..."/>
          </div>
          <div className="form-group">
            <label className="test-create-label">Actual results</label>
            <textarea
            className="case-create-child"
            type='text'
            value={this.state.actual}
            onChange={e => this.setState({ actual: e.target.value })}
            placeholder="actual results..."/>
          </div>
          <div className="form-group">
            <label className="test-create-label">Passing</label>
            <input
            id="case-create-check"
            type='checkbox'
            onChange={() =>
              this.setState({ pass: !this.state.pass })}
            checked={this.state.pass}/>
          </div>
          <div className="form-group">
            <label className="test-create-label">Additional notes</label>
            <textarea
            className="case-create-child"
            type='text'
            value={this.state.additional}
            onChange={e => this.setState({ additional: e.target.value })}
            placeholder="additional notes..."/>
          </div>
          <button className="case-create-submit"
          onClick={() => console.log(this.state)}>Create Case</button>
        </div>

        <div className="test-case-notes">

        </div>

        <div className="test-case-table">
          <table>
          </table>
        </div>
      </div>
    )
  }
}
