import React, { Component } from 'react';
import AccountBalance from './AccountBalance';
import {Link} from 'react-router-dom';
import Nav from './Nav';
    
class Home extends Component {
  render() {
    return (
        <div>
          <center>
            <img src="https://letstalkpayments.com/wp-content/uploads/2016/04/Bank.png" alt="bank"/>
            <h1>Bank of React</h1>
            <AccountBalance accountBalance={this.props.accountBalance}/>
            <Link to="/userProfile">User Profile</Link>
            <Nav/>
          </center>
        </div>
    );
  }
}

export default Home;