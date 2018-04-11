import React,{Component} from 'react';
import {View, Text} from 'react-native';

//provider use to connect react to redux
// connect() methods in components use provider
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './reducers';

//Components
import LoginForm from './components/LoginForm';
import GarageDetail from './components/GarageDetail';
import FloorSpace from './components/FloorSpace';
import Payment from './components/Payment';
import Favorite from './components/Favorite';
import History from './components/History';
import MapScreen from './components/MapScreen';

//Router for navigating screens
import Router from './Router';

import firebase from  'firebase';

class App extends Component{

    //connect to firebase when app first started 
    componentWillMount(){
        const config = {
            apiKey: 'AIzaSyCA8Ywe9YFjWHSKuhB3NdNzgjtL1oICCOU',
            authDomain: 'spotme-5eeda.firebaseapp.com',
            databaseURL: 'https://spotme-5eeda.firebaseio.com',
            projectId: 'spotme-5eeda',
            storageBucket: 'spotme-5eeda.appspot.com',
            messagingSenderId: '457180824943'
          };

          firebase.initializeApp(config);
    }

    render(){
        return(
            //  <Router/> Will later be used here

            // store is a container for redux and state
            <Provider store={createStore(reducers )}>
            <Router/>           
            </Provider>
        );
    }
}
export default App;