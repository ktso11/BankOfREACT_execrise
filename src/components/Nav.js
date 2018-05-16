


import React, { Component } from 'react';
import AccountBalance from './AccountBalance';
import {Link} from 'react-router-dom';
    
class Nav extends Component {
  render() {
    return (
        <div>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/userProfile">User Profile</Link></li>
                <li><Link to="/debit">Debit</Link></li>
                <li><Link to="/credit">Credit</Link></li>
                <li><Link to="/login">Login</Link></li>
            </ul>
        </div>
    );
  }
}

export default Nav;
