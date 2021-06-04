import React, { Component } from 'react';
import { withRouter, Link } from 'react-router-dom';


class IndexUsers extends Component {
  constructor(props) {
    super(props)
    this.state = {
      users: [],
      user: {
        strUsername: '',
        bolAll: false,
        bolCreate: false,
        bolDelete: false,
        bolDrop: false,
        bolExecute: false,
        bolInsert: false,
        bolSelect: false,
        bolShow: false,
        bolUpdate: false,
      }
    }
    this.indexUsers = this.indexUsers.bind(this);
  }
  indexUsers() {
    fetch(`http://localhost:9000/docroot/index_user.php`, {
      method: 'GET',
    })
    .then(res => res.json())
    .then(response => {
      this.setState({ users: response })
      // this.setState(users: response)
    })
    .catch(err=> {
      console.log(err)
    });
  }

  componentDidMount() {
    this.indexUsers();
  }

  permission(data) {
    if (data == 1) {
      return <i className="db-check fas fa-check"></i>;
    }
  }

  updateUsers(id) {
    if (this.props.location.search === id) {
      console.log('yes')
    }
    console.log('no')
  }


  render() {
    // const table = this.data
    const { users } = this.state
    return (
      <>
          {users.map(user =>
            {if ("?=id" + user.user_number != this.props.location.search) {
              console.log(this.props.location)
              return (<tr key={user.user_number}>
                  <td className="headcol">{user.username}</td>
                  <td className="afterhead">{this.permission(user.all_permission)}</td>
                  <td>{this.permission(user.create_permission)}</td>
                  <td>{this.permission(user.delete_permission)}</td>
                  <td>{this.permission(user.drop_permission)}</td>
                  <td>{this.permission(user.execute_permission)}</td>
                  <td>{this.permission(user.insert_permission)}</td>
                  <td>{this.permission(user.select_permission)}</td>
                  <td>{this.permission(user.show_permission)}</td>
                  <td>{this.permission(user.update_permission)}</td>
                  <td><Link to={"/AdminPanel/?=id" + user.user_number}><i className="db-U fas fa-user-edit"></i></Link>  <i className="db-D fas fa-user-minus"></i></td>
              </tr>)
            }
          return (
            <tr key={user.user_number}>
                <td className="headcol">{user.username}</td>
                <td className="afterhead"><input type="checkbox"/></td>
                <td><input type="checkbox"/></td>
                <td><input type="checkbox"/></td>
                <td><input type="checkbox"/></td>
                <td><input type="checkbox"/></td>
                <td><input type="checkbox"/></td>
                <td><input type="checkbox"/></td>
                <td><input type="checkbox"/></td>
                <td><input type="checkbox"/></td>
                <td><Link className="update-submit" to={"/AdminPanel/?=id" + user.user_number}>Submit</Link></td>
            </tr>
          )}
            )}
      </>
    )
  }
}

export default withRouter(IndexUsers);
