import React, {Component} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Home from './components/Home';
import UserProfile from './components/UserProfile';
import LogIn from './components/Login';
// import DebitsList from './components/DebitsList';
import CreditPage from './components/CreditPage';
import DebitPage from './components/DebitPage';
import axios from 'axios';

class App extends Component {

  constructor() {
    super();

    this.state = {
      accountBalance: 14568.27,
      currentUser: {
        userName: 'bob_loblaw',
        memberSince: '08/23/99',
      },
      debits: [],
      credits: []
    }
  }
  mockLogIn = (logInInfo) => {
    const newUser = {...this.state.currentUser}
    newUser.userName = logInInfo.userName
    this.setState({currentUser: newUser})
  }

  componentDidMount(){
    this.getDebits();
    this.getCredits();
  }
  
  getDebits(){
    axios.get('http://localhost:4000/debits')
    .then((response)=>{
        this.setState({debits: response.data})
    })
  }
    getCredits(){
      axios.get('http://localhost:4000/credits')
      .then((response)=>{
          this.setState({credits: response.data})
      })    
}


  render() {
    const LogInComponent = () => (<LogIn user={this.state.currentUser} mockLogIn={this.mockLogIn} {...this.props}/>)
    const HomeComponent = () => (<Home accountBalance={this.state.accountBalance}/>);
    const UserProfileComponent = () => (
        <UserProfile userName={this.state.currentUser.userName} memberSince={this.state.currentUser.memberSince}  />
    );
    const DebitComponent = () => (<DebitPage debits = {this.state.debits}/>)
    const CreditComponent = () => (<CreditPage credits = {this.state.credits}/>)
    return (
      
        <Router>
          <div>
            <Route exact path="/" render={HomeComponent}/>
            <Route exact path="/userProfile" render={UserProfileComponent}/>
            <Route exact path="/login" render={LogInComponent}/>
            <Route exact path="/debit" render={DebitComponent}/>
            <Route exact path="/credit" render={CreditComponent}/>
          </div>
        </Router>
        
    );
  }

}

export default App;