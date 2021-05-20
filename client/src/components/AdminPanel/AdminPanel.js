import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'

class AdminPanel extends Component {
  constructor(props){
    super(props);
    this.state= {
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
  render() {
    return (
      <div class="admin-container">
        <div class="admin-panel">
          <h1 class="admin-header">Admin Panel</h1>
        </div>
        <div className="admin-panel-item1 item">
          <div className="item1-accent">
            <i class="panel-icon fas fa-heartbeat"></i>
          </div>
          <div className="item-content content-slide">
            <h5>Database Status</h5>
            <i class="status-check fas fa-check"></i>
          </div>
        </div>
        <div className="admin-panel-item2 item">
          <div className="item2-accent">
            <i class="panel-icon fas fa-users"></i>
          </div>
          <div className="item-content">
            <h5>Total Users</h5>
            <h2>3,425</h2>
          </div>
        </div>
        <div className="admin-panel-item3 item">
          <div className="item3-accent">
            <i class="panel-icon fas fa-running"></i>
          </div>
          <div className="item-content">
            <h5>Active Users</h5>
            <h2>20%</h2>
          </div>
        </div>
        <div className="admin-panel-item4 item">
          <div className="item4-accent">
            <i class="panel-icon fas fa-cog"></i>
          </div>
          <div className="item-content">
            <h5>Total Admin</h5>
            <h2>30</h2>
          </div>
        </div>
        <div className="admin-panel-item5 item">
          <div className="item5-accent">
            <i class="panel-icon fas fa-comment-alt"></i>
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
            <input className="username" type="text" id="firstname" placeholder="your name..."
              value={this.state.strFname}
              onChange={e => this.setState({ strFname: e.target.value })}
            />
            <label className="chk-label">All</label>
            <input className="checkbox"type="checkbox"/>
            <label className="chk-label">Create</label>
            <input className="checkbox"type="checkbox"/>
            <label className="chk-label">Delete</label>
            <input className="checkbox"type="checkbox"/>
            <label className="chk-label">Drop</label>
            <input className="checkbox"type="checkbox"/>
            <label className="chk-label execute">Execute</label>
            <input className="checkbox"type="checkbox"/>
            <label className="chk-label">Insert</label>
            <input className="checkbox"type="checkbox"/>
            <label className="chk-label">Select</label>
            <input className="checkbox"type="checkbox"/>
            <label className="chk-label">Show</label>
            <input className="checkbox"type="checkbox"/>
            <label className="chk-label">Update</label>
            <input className="checkbox"type="checkbox"/>
            <button className="add-user load" type="submit"><i class="add-user db-add fas fa-user-plus"></i></button>
          </form>
          </div>
          <table id="db-manager-table">
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
              <td>hi</td>
              <td>hi</td>
              <td>hi</td>
              <td>hi</td>
              <td>hi</td>
              <td>hi</td>
              <td>hi</td>
              <td>hi</td>
              <td>hi</td>
              <td>hi</td>
              <td><i class="db-U fas fa-user-edit"></i>  <i class="db-D fas fa-user-minus"></i></td>
            </tr>
            <tr>
              <td>hi</td>
              <td>hi</td>
              <td>hi</td>
              <td>hi</td>
              <td>hi</td>
              <td>hi</td>
              <td>hi</td>
              <td>hi</td>
              <td>hi</td>
              <td>hi</td>
            </tr>
          </table>
        </div>
      </div>
    )
  }
}

export default withRouter(AdminPanel);
