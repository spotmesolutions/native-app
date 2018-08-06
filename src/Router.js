import React from "react";
import resolveAssetSource from "resolveAssetSource";
import {
  Image,
  Text
} from "react-native";


import Payment from './components/Payment';
import Favorite from './components/Favorite';
import History from './components/History';
import MapScreen from './components/MapScreen';
import MenuScreen from './components/MenuScreen';
import LoginForm from './components/LoginForm';
import {
  DrawerNavigator
} from 'react-navigation';



const RouterComponent = DrawerNavigator({
  Home: {
    path: '/',
    screen: LoginForm
  },
  MapScreen: {
    path: '/',
    screen: MapScreen
  },
  Profile: {
    path: '/',
    screen: MenuScreen
  },
  Favorite: {
    path: '/sent',
    screen: Favorite
  },
  Recent: {
    path: '/sent',
    screen: History
  },
  Payment: {
    path: '/sent',
    screen: Payment
  },
  Account: {
    path: '/sent',
    screen: MenuScreen
  },
  LogOut: {
    path: '/sent',
    screen: MenuScreen
  },
}, {
  initialRouteName: 'Home',
  drawerPosition: 'left',
  drawerWidth: 200,
  contentOptions: {
    activeBackgroundColor: '#b2eae2'
  }
});

export default RouterComponent;