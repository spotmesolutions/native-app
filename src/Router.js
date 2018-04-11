import React from "react";
import resolveAssetSource from "resolveAssetSource";
import { Image, Text } from "react-native";

import LoginForm from './components/LoginForm';
import GarageDetail from './components/GarageDetail';
import FloorSpace from './components/FloorSpace';
import Payment from './components/Payment';
import Favorite from './components/Favorite';
import History from './components/History';
import MapScreen from './components/MapScreen';
import MenuScreen from './components/MenuScreen';

import {DrawerNavigator} from 'react-navigation';

// const iconSpotMe = resolveAssetSource(
//   require("/Users/Minh/WorkSpace/ReactNative/SpotMe/icon.jpg")
// );

// const menuBar = resolveAssetSource(
// require("/Users/Minh/WorkSpace/ReactNative/SpotMe/menu.png")
// );

const RouterComponent = DrawerNavigator(
  {
    Home: {
      path:'/',
      screen: MapScreen
    },
    Favorite: {
      path: '/sent',
      screen: Favorite
    },
    Payment: {
      path: '/sent',
      screen: Payment
    },
    History: {
      path: '/sent',
      screen: History
    },
    Settings: {
      path: '/sent',
      screen: MenuScreen
    },
    LogOut: {
      path: '/sent',
      screen: MenuScreen
    },
  },
  {
    initialRouteName: 'Home',
    drawerPosition: 'left',
    drawerWidth: 200,
    contentOptions:{
      activeBackgroundColor: '#b2eae2',
      
    }
  }
);

export default RouterComponent;