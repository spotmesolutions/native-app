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
<<<<<<< HEAD
import { DrawerNavigator } from 'react-navigation';
import SearchBox from "./components/SearchBox";
=======
import LoginForm from './components/LoginForm';
import {
  DrawerNavigator
} from 'react-navigation';


>>>>>>> f9220a16a4a41961e6d9feb3a4dc8e7628b2176e

const RouterComponent = DrawerNavigator({
  "Home": {
    path: '/',
    screen: LoginForm
  },
  MapScreen: {
    path: '/',
    screen: MapScreen
  },
  "Favorites": {
    path: '/sent',
    screen: Favorite
  },
  "Recent": {
    path: '/sent',
    screen: History
  },
  "Payment": {
    path: '/sent',
    screen: Payment
  },
 "Account": {
    path: '/sent',
    screen: MenuScreen
  },
  "Log Out": {
    path: '/sent',
    screen: MenuScreen
  },
  // GarageInfo: {
  //   path: '/sent',
  //   screen: MenuScreen
  // },
}, {
  initialRouteName: 'Home',
  drawerPosition: 'left',
  drawerWidth: 200,
  contentOptions: {
    activeBackgroundColor: '#b2eae2'
  }
});

export default RouterComponent;