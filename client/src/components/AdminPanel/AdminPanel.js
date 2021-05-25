import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'

class AdminPanel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      strUsername: '',
      bolAll: false,
      bolCreate: false,
      bolDelete: false,
      bolDrop: false,
      bolExecute: false,
      bolInsert: false,
      bolSelect: false,
      bolShow: false,
      bolUpdate: false
    }
  }
  handleCheck = (event) => {
    event.persist()
    console.log(this.state)
    // this.setState(prevState => ({
    //   event: !prevState.completed
    // }))
  }

  handleSubmit = (event) => {
    event.persist()
    // console.log(this.state)
    var fd = new FormData();
    fd.append('content', 'test');
    fd.append('strUsername', this.state.strUsername)
    fd.append('bolAll', this.state.bolAll)
    fd.append('bolCreate', this.state.bolCreate)
    fd.append('bolDelete', this.state.bolDelete)
    fd.append('bolDrop', this.state.bolDrop)
    fd.append('bolExecute', this.state.bolExecute)
    fd.append('bolInsert', this.state.bolInsert)
    fd.append('bolSelect', this.state.bolSelect)
    fd.append('bolShow', this.state.bolShow)
    fd.append('bolUpdate', this.state.bolUpdate)

    // console.log(Array.from(fd));
    fetch(`http://localhost:9000/docroot/create_user.php`, {
      method: 'POST',
      body: fd,
    }).then(res => res.json())
    .then(response => {
      console.log('response: ', response)
    })
    .catch(err => {
      console.log(err)
    } );
  }
  render() {
    return (
      <div className="admin-container">
        <div className="admin-panel">
          <h1 className="admin-header">Admin Panel</h1>
        </div>
        <div className="admin-panel-item1 item">
          <div className="item1-accent">
            <i className="panel-icon fas fa-heartbeat"></i>
          </div>
          <div className="item-content content-slide">
            <h5>Database Status</h5>
            <i className="status-check fas fa-check"></i>
          </div>
        </div>
        <div className="admin-panel-item2 item">
          <div className="item2-accent">
            <i className="panel-icon fas fa-users"></i>
          </div>
          <div className="item-content">
            <h5>Total Users</h5>
            <h2>3,425</h2>
          </div>
        </div>
        <div className="admin-panel-item3 item">
          <div className="item3-accent">
            <i className="panel-icon fas fa-running"></i>
          </div>
          <div className="item-content">
            <h5>Active Users</h5>
            <h2>20%</h2>
          </div>
        </div>
        <div className="admin-panel-item4 item">
          <div className="item4-accent">
            <i className="panel-icon fas fa-cog"></i>
          </div>
          <div className="item-content">
            <h5>Total Admin</h5>
            <h2>30</h2>
          </div>
        </div>
        <div className="admin-panel-item5 item">
          <div className="item5-accent">
            <i className="panel-icon fas fa-comment-alt"></i>
          </div>
          <div className="item-content content-slide">
            <h5>Support Tickets</h5>
            <h2>4</h2>
          </div>
        </div>
        <div className="db-manager">
          <h5 className="db-form-header">Database-Manager</h5>
          <div className="db-form">
            <form className="form-inline">
              <label className="username">Username</label>
              <input className="username" type="text" id="firstname" placeholder="username..."
                value={this.state.strUsername}
                onChange={e => this.setState({ strUsername: e.target.value })}
              />
              <label className="chk-label">All</label>
              <input className="checkbox" type="checkbox"
                onChange={() =>
                  this.setState({ bolAll: !this.state.bolAll })} checked={this.state.bolAll}
              />
              <label className="chk-label">Create</label>
              <input className="checkbox" type="checkbox"
                onChange={() => this.setState({ bolCreate: !this.state.bolCreate })} checked={this.state.bolCreate}
              />
              <label className="chk-label">Delete</label>
              <input className="checkbox" type="checkbox"
                onChange={() => this.setState({ bolDelete: !this.state.bolDelete })} checked={this.state.bolDelete}
              />
              <label className="chk-label">Drop</label>
              <input className="checkbox" type="checkbox"
                onChange={() => this.setState({ bolDrop: !this.state.bolDrop })} checked={this.state.bolDrop}
              />
              <label className="chk-label execute">Execute</label>
              <input className="checkbox" type="checkbox"
                onChange={() => this.setState({ bolExecute: !this.state.bolExecute })} checked={this.state.bolExecute} />
              <label className="chk-label">Insert</label>
              <input className="checkbox" type="checkbox"
                onChange={() => this.setState({ bolInsert: !this.state.bolInsert })} checked={this.state.bolInsert} />
              <label className="chk-label">Select</label>
              <input className="checkbox" type="checkbox"
                onChange={() => this.setState({ bolSelect: !this.state.bolSelect })} checked={this.state.bolSelect} />
              <label className="chk-label">Show</label>
              <input className="checkbox" type="checkbox"
                onChange={() => this.setState({ bolShow: !this.state.bolShow })} checked={this.state.bolShow} />
              <label className="chk-label">Update</label>
              <input className="checkbox" type="checkbox"
                onChange={() => this.setState({ bolUpdate: !this.state.bolUpdate })} checked={this.state.bolUpdate} />
            </form>
            <button onClick={this.handleSubmit} className="add-user load" type="submit"><i className="add-user db-add fas fa-user-plus"></i></button>
          </div>
          <table id="db-manager-table">
          <tbody>
            <tr>
              <th>Username</th>
              <th>All</th>
              <th>Create</th>
              <th>Delete</th>
              <th>Drop</th>
              <th>Execute</th>
              <th>Insert</th>
              <th>Select</th>
              <th>Show</th>
              <th>Update</th>
              <th>Edit | Delete</th>
            </tr>
            <tr>
              <td>test@vectorventures.com</td>
              <td></td>
              <td><i className="db-check fas fa-check"></i></td>
              <td></td>
              <td></td>
              <td></td>
              <td><i className="db-check fas fa-check"></i></td>
              <td><i className="db-check fas fa-check"></i></td>
              <td><i className="db-check fas fa-check"></i></td>
              <td><i className="db-check fas fa-check"></i></td>
              <td><i className="db-U fas fa-user-edit"></i>  <i className="db-D fas fa-user-minus"></i></td>
            </tr>
            <tr>
              <td>demo@vectorventures.com</td>
              <td><i className="db-check fas fa-check"></i></td>
              <td><i className="db-check fas fa-check"></i></td>
              <td><i className="db-check fas fa-check"></i></td>
              <td><i className="db-check fas fa-check"></i></td>
              <td><i className="db-check fas fa-check"></i></td>
              <td><i className="db-check fas fa-check"></i></td>
              <td><i className="db-check fas fa-check"></i></td>
              <td><i className="db-check fas fa-check"></i></td>
              <td><i className="db-check fas fa-check"></i></td>
              <td><i className="db-U fas fa-user-edit"></i>  <i className="db-D fas fa-user-minus"></i></td>
            </tr>
          </tbody>
          </table>
        </div>
      </div>
    )
  }
}

export default withRouter(AdminPanel);
