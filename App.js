import React from 'react';
import { View, Text } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { HOME_SCREEN, NEW_DETAILS_SCREEN, SPLASH_SCREEN, LOGIN_SCREEN } from './src/commons/ScreenName';
import { HomeScreen } from './src/components/HomeScreen';
import { NewsDetailScreen } from './src/components/NewsDetailScreen';
import { SplashScreen } from './src/components/SplashScreen';
import { LoginScreen } from './src/components/LoginScreen';


const AppNavigator = createStackNavigator(
  {
    HOME_SCREEN: {
      screen:HomeScreen,
      navigationOptions: {
        headerTitle: 'Trang chủ'
      }
    },
    NEW_DETAILS_SCREEN: {
      screen:NewsDetailScreen,
      navigationOptions: {
        headerTitle: 'Chi tiết'
      }
    },
    SPLASH_SCREEN: {
      screen:SplashScreen,
      navigationOptions: {
        headerTitle: 'Splash'
      },
    },
    LOGIN_SCREEN: {
      screen:LoginScreen,
      navigationOptions: {
        headerTitle: 'Login'
      },
    },
  },
  {
    initialRouteName: SPLASH_SCREEN,
  }
);

const AppContainer = createAppContainer(AppNavigator);

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}