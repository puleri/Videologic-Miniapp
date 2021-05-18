import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'

class AdminPanel extends Component {
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
      </div>
    )
  }
}

export default withRouter(AdminPanel);
