import React, { useEffect, useState } from 'react';
import { SafeAreaView, StatusBar, View, Platform, Image } from "react-native"
import { createStackNavigator } from "react-navigation-stack";
import { createBottomTabNavigator } from "react-navigation-tabs"
import { createAppContainer, createSwitchNavigator } from "react-navigation"
import { Logs, AppLoading } from "expo";
import { Root } from "native-base"
import * as Font from 'expo-font';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import CommonColors from "./constants/CommonColors"
//importo i componenti pagine
import Login from "./pages/login/login";
import Register from "./pages/login/register";
import Reset from "./pages/login/reset";
import Profile from "./pages/profile/";
import Search from "./pages/search/index";
import Video from "./pages/video";
import Bookmarks from "./pages/bookmarks/index";
import Home from "./pages/home";
import AuthManager from "./pages/AuthManager"

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
  "home": Home,
  "search": Search,
  "bookmarks": Bookmarks,
  "profile": Profile
}, {
  "initialRouteName": "home",
  defaultNavigationOptions: ({ navigation }) => ({
    tabBarIcon: ({ focused, horizontal, tintColor }) => {
      const { routeName } = navigation.state;
      let IconComponent = Ionicons;
      let iconName = "ios-information-circle";

      switch (routeName) {
        case "home":
          iconName = "ios-home"
          //return <Image source={require("./assets/images/user_placeholder.png")} />
          break;

        case "profile":
          iconName = `ios-information-circle${focused ? '' : '-outline'}`;
          break;

        case "search":
          iconName = `ios-search`;
          break;

        case "bookmarks":
          iconName = "ios-bookmark"
          break;

        default:
          iconName = ""
          break;
      }
      return <IconComponent name={iconName} size={25} color={tintColor} />;
    },
  }),
  tabBarOptions: {
    activeTintColor: CommonColors.primary,
    inactiveTintColor: 'gray',
  },
})


const MainNavigator = createStackNavigator({
  "tabs": TabNavigator,
  "video": Video
}, {
  headerMode: 'none',
  mode: "modal"
})

const MainStack = createSwitchNavigator({
  "start": AuthManager,
  "auth": LoginStack,
  "main": MainNavigator
}, {
  initialRouteName: "start"
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
      ...Ionicons.font,
      ...MaterialCommunityIcons.font
    })
    setIsReady(true)
  }

  if (!isReady) return <AppLoading />

  return (
    <Root>
      <View style={{ flex: 1 }}>
        <StatusBar translucent hidden={Platform.OS === "android"} />
        <AppContainer />
      </View>
    </Root>
  );

} 
