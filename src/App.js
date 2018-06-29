import React, { Component } from 'react';
import { View, Text } from 'react-native';

//provider use to connect react to redux
// connect() methods in components use provider
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers';
import thunk from 'redux-thunk';

//Components
import Payment from './components/Payment';
import Favorite from './components/Favorite';
import History from './components/History';
import MapScreen from './components/MapScreen';

//Router for navigating screens
import Router from './Router';

import firebase from 'firebase';

import LoginForm from './components/LoginForm';

const store = createStore(reducers, {}, applyMiddleware(thunk));

class App extends Component {

  //connect to firebase when app first started
  componentWillMount() {
    const config = {
      apiKey: 'AIzaSyB01aoHYr0DStrYr7Me7fEpWgWZ5iGJYZQ',
      authDomain: 'native-app-21e6b.firebaseapp.com',
      databaseURL: 'https://native-app-21e6b.firebaseio.com',
      projectId: 'native-app-21e6b',
      storageBucket: 'native-app-21e6b.appspot.com',
      messagingSenderId: '278704427993'
    };
    firebase.initializeApp(config);
  }

  render() {
    return (
      <Provider store={store}>
        <Router />
      </Provider>
    );
  }
}
export default App;
