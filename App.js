import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity, TextInput, FlatList } from 'react-native';
import { createAppContainer, createSwitchNavigator } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import { createDrawerNavigator } from 'react-navigation-drawer'
import WelcomeScreen from './components/screens/AppSwitchNavigator/WelcomeScreen'
import HomeScreen from './components/screens/HomeScreen'
import LoginScreen from './components/screens/LoginScreen'
import LoadingScreen from './components/screens/AppSwitchNavigator/LoadingScreen'
import { Ionicons } from '@expo/vector-icons';
import SettingsScreen from './components/screens/SettingsScreen'
import CustomDrawerComponent from './components/screens/DrawerNavigator/CustomDrawerComponent';
import * as firebase from 'firebase/app'
import { firebaseConfig } from './config/config'

class App extends React.Component {
  constructor() {
    super()
    this.initializeFirebase()
  }
  initializeFirebase = () => {
    firebase.initializeApp(firebaseConfig)
  }
  render() {
    return <AppContainer />
  }
}



const AppDrawerNavigator = createDrawerNavigator({
  HomeScreen: {
    screen: HomeScreen,
    navigationOptions: {
      title: 'Home',
      drawerIcon: () => <Ionicons name="ios-home" size={24} />
    }
  },
  SettingsScreen: {
    screen: SettingsScreen,
    navigationOptions: {
      title: "Settings",
      drawerIcon: () => <Ionicons name="ios-settings" size={24} />
    }
  }
}, {
  contentComponent: CustomDrawerComponent
})

const LoginStackNavigator = createStackNavigator({
  WelcomeScreen: {
    screen: WelcomeScreen,
    navigationOptions: {
      header: null
    }
  },
  LoginScreen: {
    screen: LoginScreen
  }
}, {
  mode: 'modal',
  defaultNavigationOptions: {
    headerStyle: {
      backgroundColor: 'white'
    }
  }
})
const AppSwitchNavigator = createSwitchNavigator({ LoadingScreen, LoginStackNavigator, AppDrawerNavigator })
const AppContainer = createAppContainer(AppSwitchNavigator)
export default App


