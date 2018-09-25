import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image
} from "react-native";
import Icon from 'react-native-vector-icons/Ionicons'
import Icon1 from 'react-native-vector-icons/FontAwesome'
import Icon2 from 'react-native-vector-icons/MaterialIcons'


import { createSwitchNavigator, createStackNavigator, createDrawerNavigator, createBottomTabNavigator } from 'react-navigation'
import AuthLoadingScreen from './SRC/screens/AuthLoadingScreen'
import WelcomeScreen from './SRC/screens/WelcomeScreen'
import SignInScreen from './SRC/screens/SignInScreen'
import SignUpScreen from './SRC/screens/SignUpScreen'
import HomeScreen from './SRC/screens/HomeScreen'
import ChatScreen from './SRC/screens/ChatScreen'
import CollectionScreen from './SRC/screens/CollectionScreen'
import ProfileScreen from './SRC/screens/ProfileScreen'
import SearchScreen from './SRC/screens/SearchScreen'
import SettingScreen from './SRC/screens/SettingsScreen'
import Logo from './SRC/image/qpicon.png'
import ForgetPassword from "./SRC/screens/ForgetPassword";
import IntroVideo from "./SRC/screens/IntroVideo";
import ChatBox from "./SRC/screens/ChatBox";
import TutorDetail from "./SRC/screens/TutorDetail";
import Animate from "./SRC/screens/Animate";
import CalenderView from "./SRC/screens/CalenderView";
import TutorCalender from "./SRC/screens/TutorCalender";

const AuthStackNavigator = createStackNavigator({
  Welcome: WelcomeScreen,
  SignIn: SignInScreen,
  SignUp: SignUpScreen,
  ForgetPassword: ForgetPassword,
  Intro: IntroVideo,
  ChatBox: ChatBox,
  TutorDetail:TutorDetail,
  CalenderView:CalenderView,
  Animate:Animate,
  TutorCalender:TutorCalender
})

const AppTabNavigator = createBottomTabNavigator({
  SearchScreen: {
    screen: SearchScreen,
    navigationOptions: {
      
      tabBarIcon: ({tintColor}) => (
        <Icon name="ios-search" color={tintColor} size={24} />
      )
    }
  },
  CollectionScreen: {
    screen: CollectionScreen,
    navigationOptions: {
      tabBarLabel: 'CollectionScreen',
      tabBarIcon: ({tintColor}) => (
        <Icon1 name="bookmark-o" color={tintColor} size={24} />
      )
    }

  },
  HomeScreen: {
    screen: HomeScreen,
    navigationOptions: {
      tabBarLabel: 'Home',
      tabBarIcon: ({tintColor}) => (
        <Image source={Logo} style={{height:45,width:45, tintColor:tintColor}}/>
      )
    },

  },
  ChatScreen: {
    screen: ChatScreen,
    navigationOptions: {
      tabBarLabel: 'ChatScreen',
      tabBarIcon: ({tintColor}) => (
        <Icon1 name="comment-o" color={tintColor} size={24} />
      )
    }

  },
  ProfileScreen: {
    screen: ProfileScreen,
    navigationOptions: {
      tabBarLabel: 'ProfileScreen',
      tabBarIcon: ({tintColor}) => (
        <Icon1 name="user-o" color={tintColor} size={24} />
      )
    }

  },
  
}, {
tabBarOptions: {
  showLabel: false,
  activeTintColor : '#d91009',
  inactiveTintColor : 'black'
}
})


export default createSwitchNavigator({
  AuthLoading: AuthLoadingScreen,
  Auth: AuthStackNavigator,
  App: AppTabNavigator
})

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  

  // logo:{
    
  // }
});