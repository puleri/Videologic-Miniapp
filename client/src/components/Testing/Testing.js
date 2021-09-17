import React, { Component } from 'react'
import './Testing.css';

export default class Testing extends Component {
  constructor() {
    super()
    const today = new Date()
    const month = (today.getMonth() + 1).toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false})
    const day = (today.getDate()).toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false})
    const date = today.getFullYear() + '-' + month + '-' + day

    this.state = {
      testCases: [],
      description: '',
      date: date,
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
    // console.log('state is', this.state.testCases)
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
// On Load
componentDidMount() {
  this.indexTests();
}

handleSubmit = (event) => {
  event.persist()

  if (this.state.description === '' || this.state.date === '' || this.state.expected === '' || this.state.actual === '') {
    return console.log("Error: Please fill out required fields")
  }
  var fd = new FormData();
  fd.append('content', 'test');
  fd.append('strDescript', this.state.description)
  fd.append('strDate', this.state.date)
  fd.append('strExpected', this.state.expected)
  fd.append('strActual', this.state.actual)
  fd.append('bolPass', this.state.pass)
  fd.append('strAdditional', this.state.additional)

  // console.log(Array.from(fd));
  fetch(`http://localhost:9000/docroot/create_test_case.php`, {
    method: 'POST',
    body: fd,
  }).then(res => res.json())
  .then(response => {
    console.log('response: ', response)
  })
  // reset form
  .then(
    this.setState({
      description: '',
      date: '',
      expected: '',
      actual: '',
      pass: false,
      additional: '',
    })
  )
  .catch(err => {
    console.log(err)
  } );
}


permission(data) {
  if (data === '1') {
    return <i className="db-check fas fa-check"></i>;
  }
}

  render () {
    const handleChange = (event) => {
      event.persist()
      // this.setState({ user: this.state.users.find(user => user.user_number === this.props.location.search) })
      // console.log('event.target.name is', event.target.name)
      if (event.target.checked) {
        this.setState(oldVal => {
          return { ...oldVal, [event.target.name] : '1' }
        }
        // , () => { console.log(this.state) }
        )
      }
        else {
          this.setState(oldVal => {
            return { ...oldVal, [event.target.name] : '0' }
          }
        // , () => { console.log(this.state) }
        )
      }
    }
    // reference for test index
    const tests = this.state.testCases

  return (
      <div className="test-container">
        <h2 style={{margin: "20px 50px",textAlign:'left'}}>Test Case Planning and Execution</h2>

        <div className="test-case-create">
          <div className="form-group">
            <label className="test-create-label">Test description</label>
            <textarea
            required
            className="case-create-child"
            type='text'
            value={this.state.description}
            onChange={e => this.setState({ description: e.target.value })}
            placeholder="test description..."/>
          </div>
          <div className="form-group">
            <label className="test-create-label">Date</label>
            <input
            required
            className="case-create-child"
            id="test-date"
            type='date'
            value={this.state.date}
            onChange={e => this.setState({ date: e.target.value })}
            />
          </div>
          <div className="form-group">
            <label className="test-create-label">Expected results</label>
            <textarea
            required
            className="case-create-child"
            type='text'
            value={this.state.expected}
            onChange={e => this.setState({ expected: e.target.value })}
            placeholder="expected results..."/>
          </div>
          <div className="form-group">
            <label className="test-create-label">Actual results</label>
            <textarea
            required
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
            required
            className="case-create-child"
            type='text'
            value={this.state.additional}
            onChange={e => this.setState({ additional: e.target.value })}
            placeholder="additional notes..."/>
          </div>
          <input
          value="Create Case"
          type="submit"
          onClick={this.handleSubmit}
          className="case-create-submit"
          />
        </div>

        <div className="test-case-notes">

        </div>

        <div className="test-case-table">
          <table>
            <tbody>
              <tr className="test-table-header">
                <td>id</td>
                <td>description</td>
                <td>expected_results</td>
                <td>test_date</td>
                <td>actual_results</td>
                <td>additional_notes</td>
                <td>passing</td>
                <td>delete</td>
              </tr>
          { tests.map(test => {
            return (
              <tr key={test.id}>
                <td>{test.id}</td>
                <td>{test.description}</td>
                <td>{test.expected_results}</td>
                <td>{test.test_date}</td>
                <td>{test.actual_results}</td>
                <td>{test.additional_notes}</td>
                <td><input className="index-passing" name="bolUpdate" onChange={handleChange} defaultChecked={test.passing === '1' ? 'checked' : ''} type="checkbox"/></td>
                <td><i className="test-delete far fa-trash-alt"></i></td>
              </tr>
            )
          })}
            </tbody>
          </table>
        </div>
      </div>
    )
  }
}
