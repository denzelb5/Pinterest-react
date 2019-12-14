import React from 'react';
import firebase from 'firebase/app';

import firebaseConnection from '../helpers/data/connection';
import Auth from '../components/Auth/Auth';
import MyNavbar from '../components/MyNavbar/MyNavbar';

import './App.scss';

firebaseConnection();

class App extends React.Component {
  state = {
    authed: false,
  }

  componentDidMount() {
    this.removeListener = firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ authed: true });
      } else {
        this.setState({ authed: false });
      }
    });
  }

  componentWillUnmount() {
    this.removeListener();
  }

  render() {
    const { authed } = this.state;

    return (
      <div className="App">
        <MyNavbar authed={authed} />
        <button className="btn btn-danger">Bootstrap Button</button>
        {/* if they are authenticated, load the board */}
        {/* else show login button */}
        {
          (authed) ? (<div>You logged in</div>) : (<Auth />)
        }
      </div>
    );
  }
}

export default App;
