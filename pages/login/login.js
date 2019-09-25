import React from "react";
import { View } from "react-native";
import { Button, Text } from "native-base"

const Login = (props) => {

  console.log(props)
  return (
    <View>
      <Text>LOGIN PAGE</Text>
      <Button onPress={() => props.navigation.navigate("register")}>
        <Text>VAI A REGISTER</Text>
      </Button>
      <Button onPress={() => props.navigation.navigate("reset")}>
        <Text>VAI A RESET</Text>
      </Button>
    </View>
  )

}

export default Login;
