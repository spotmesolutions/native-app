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
import { DrawerNavigator } from 'react-navigation';
import SearchBox from "./components/SearchBox";

const RouterComponent = DrawerNavigator({
  "Home": {
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
    screen: SearchBox
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