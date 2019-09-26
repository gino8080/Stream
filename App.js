import React, { useEffect, useState } from 'react';
import { SafeAreaView, StatusBar, View, Platform } from "react-native"
import { createStackNavigator } from "react-navigation-stack";
import { createBottomTabNavigator } from "react-navigation-tabs"
import { createAppContainer, createSwitchNavigator } from "react-navigation"
import { Logs, AppLoading } from "expo";

import * as Font from 'expo-font';
import { Ionicons } from '@expo/vector-icons';

//importo i componenti pagine
import Login from "./pages/login/login";
import Register from "./pages/login/register";
import Reset from "./pages/login/reset";
import Profile from "./pages/profile/";
import Search from "./pages/search/index";
import Bookmarks from "./pages/bookmarks/index";

if (__DEV__) {
  // https://github.com/expo/expo/issues/2623#issuecomment-441364587
  const isRemoteDebuggingEnabled = typeof atob !== 'undefined';
  if (isRemoteDebuggingEnabled) {
    Logs.disableExpoCliLogging();
  } else {
    Logs.enableExpoCliLogging();
  }
  console.disableYellowBox = true;
}

const LoginStack = createStackNavigator({
  "login": Login,
  "register": Register,
  "reset": Reset
}, {
  initialRouteName: "register",
  "headerMode": "none"
})

const TabNavigator = createBottomTabNavigator({
  "profile": Profile,
  "search": Search,
  "bookmarks": Bookmarks
}, {
  "initialRouteName": "search",
  defaultNavigationOptions: ({ navigation }) => ({
    tabBarIcon: ({ focused, horizontal, tintColor }) => {
      const { routeName } = navigation.state;
      let IconComponent = Ionicons;
      let iconName = "ios-information-circle";

      switch (routeName) {
        case "profile":
          iconName = `ios-information-circle${focused ? '' : '-outline'}`;
          break;

        case "search":
          iconName = `ios-options`;
          break;

        case "bookmarks":
          iconName = "ios-home"
          break;

        default:
          iconName = ""
          break;
      }
      return <IconComponent name={iconName} size={25} color={tintColor} />;
    },
  }),
  tabBarOptions: {
    activeTintColor: 'tomato',
    inactiveTintColor: 'gray',
  },
})

const MainStack = createSwitchNavigator({
  "auth": LoginStack,
  "home": TabNavigator
}, {
  initialRouteName: "auth"
})

const AppContainer = createAppContainer(MainStack)

export default function App() {

  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    //appena la app si carica === al vecchio ComponentDidMount
    loadFonts();
  }, [])


  const loadFonts = async () => {
    await Font.loadAsync({
      Roboto: require("native-base/Fonts/Roboto.ttf"),
      Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
      ...Ionicons.font
    })
    setIsReady(true)
  }

  if (!isReady) return <AppLoading />

  return (
    <View style={{ flex: 1 }}>
      <StatusBar translucent hidden={Platform.OS === "android"} />
      <AppContainer />
    </View>
  );

} 
