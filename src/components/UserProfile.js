import React, {Component} from 'react';
import DebitsList from './DebitsList';
import Nav from './Nav';


class UserProfile extends Component {
  render() {
    return (
        <div>
          <h1>User Profile</h1>

          <div>Username: {this.props.userName}</div>
          <div>Member Since: {this.props.memberSince}</div>
          <DebitsList/>

          <Nav/>
        </div>
    );
  }
}

export default UserProfile;