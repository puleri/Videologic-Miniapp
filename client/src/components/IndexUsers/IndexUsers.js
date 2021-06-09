import React, { Component } from 'react';
import { withRouter, Link } from 'react-router-dom';


class IndexUsers extends Component {
  constructor(props) {
    super(props)
    this.state = {
      users: [],
      strUsername: '',
      bolAll: '',
      bolCreate: '',
      bolDelete: '',
      bolDrop: '',
      bolExecute: '',
      bolInsert: '',
      bolSelect: '',
      bolShow: '',
      bolUpdate: ''
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
  updateUser(state) {
    this.setState({
      bolAll: state.all_permission
    })
    console.log(this.state.user)
  }


  render() {
    // const table = this.data
    const handleChange = (event) => {
      // this.setState({ user: this.state.users.find(user => user.user_number === this.props.location.search) })
      // console.log('event.target.name is', event.target.name)
      if (event.target.checked) {
        this.setState(oldUser => {
          return { ...oldUser, [event.target.name] : '1' }
        }
        // , () => { console.log(this.state) }
        )
      }
        else {
          this.setState(oldUser => {
            return { ...oldUser, [event.target.name] : '0' }
          }
        // , () => { console.log(this.state) }
        )
      }
    }

    // handleUpdate will send an update request to the server with the state attatched as data. it will then return a response from the server.
    const handleUpdate = (event) => {
      event.persist()
      const user_number = this.props.location.search.slice(-1)

      // console.log(this.state)
      var fd = new FormData();
      fd.append('content', 'test');
      fd.append('user_number', user_number)
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
      fetch(`http://localhost:9000/docroot/update_user.php`, {
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

    const updateState = (num) => {

      const clicked = this.state.users.filter(user => {
        return user.user_number === num
      })[0]

      // console.log("clicked user is ", clicked)

      this.setState(
        {
          strUsername: clicked.username,
          bolAll: clicked.all_permission,
          bolCreate: clicked.create_permission,
          bolDelete: clicked.delete_permission,
          bolDrop: clicked.drop_permission,
          bolExecute: clicked.execute_permission,
          bolInsert: clicked.insert_permission,
          bolSelect: clicked.select_permission,
          bolShow: clicked.show_permission,
          bolUpdate: clicked.update_permission
        }
        // , () => { console.log(this.state) }
      )

    }
    const handleReset = (event) => {
      event.persist()
      this.setState({
        strUsername: '',
        bolAll: '',
        bolCreate: '',
        bolDelete: '',
        bolDrop: '',
        bolExecute: '',
        bolInsert: '',
        bolSelect: '',
        bolShow: '',
        bolUpdate: ''
      })
    }
    const { users } = this.state
    return (
      <>
          {users.map(user =>
            {if ("?=id" + user.user_number != this.props.location.search) {
              // console.log(this.props.location)
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
                  <td><Link to={"/AdminPanel/?=id" + user.user_number} onClick={() => { updateState(user.user_number) }}><i className="db-U fas fa-user-edit"></i></Link>  <i className="db-D fas fa-user-minus"></i></td>
              </tr>)
            }

          return (
            <tr key={user.user_number}>
                <td className="headcol">{user.username}</td>
                <td className="afterhead"><input name="bolAll" onChange={handleChange} defaultChecked={user.all_permission === '1' ? 'checked' : ''} type="checkbox"/></td>
                <td><input name="bolCreate" onChange={handleChange} defaultChecked={user.create_permission === '1' ? 'checked' : ''} type="checkbox"/></td>
                <td><input name="bolDelete" onChange={handleChange} defaultChecked={user.delete_permission === '1' ? 'checked' : ''} type="checkbox"/></td>
                <td><input name="bolDrop" onChange={handleChange} defaultChecked={user.drop_permission === '1' ? 'checked' : ''} type="checkbox"/></td>
                <td><input name="bolExecute" onChange={handleChange} defaultChecked={user.execute_permission === '1' ? 'checked' : ''} type="checkbox"/></td>
                <td><input name="bolInsert" onChange={handleChange} defaultChecked={user.insert_permission === '1' ? 'checked' : ''} type="checkbox"/></td>
                <td><input name="bolSelect" onChange={handleChange} defaultChecked={user.select_permission === '1' ? 'checked' : ''} type="checkbox"/></td>
                <td><input name="bolShow" onChange={handleChange} defaultChecked={user.show_permission === '1' ? 'checked' : ''} type="checkbox"/></td>
                <td><input name="bolUpdate" onChange={handleChange} defaultChecked={user.update_permission === '1' ? 'checked' : ''} type="checkbox"/></td>
                <td><button className="update-submit" onClick={handleUpdate}>Update</button><Link className="update-submit" onClick={handleReset} to={"/AdminPanel"}>Cancel</Link></td>
            </tr>
          )}
            )}
      </>
    )
  }
}

export default withRouter(IndexUsers);
