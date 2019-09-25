import React, { useState } from "react";
import { Alert } from "react-native";
import { Button, Text, Container, Header, Content, Form, Item, Input, Label, Left, Icon, Right, Body, Title } from 'native-base';
import CommonHeader from "../../components/CommonHeader"

const Login = (props) => {

  //const [username, setUsername] = useState("");
  //const [password, setPassword] = useState("");

  const [user, setUser] = useState({ username: "", password: "" })

  const doLogin = () => {
    console.log(user)

    if (user.username.toLowerCase().trim() === "admin" &&
      user.password.toLowerCase().trim() === "password") {
      //login ok!
      props.navigation.navigate("home")
    } else {
      Alert.alert("Errore", "Attenzione credenziali errate!")
    }
  }


  const changedUsername = (_username) => {

    const _user = { ...user, username: _username }
    setUser(_user)
  }

  const changedPassword = (password) => {

    const _user = { ...user, password }
    setUser(_user)
  }

  return (
    <Container>

      <CommonHeader title="LOGIN" />

      <Content>

        <Form>
          <Item >
            <Label>Username</Label>
            <Input value={user.username}
              onChangeText={(_username) => { changedUsername(_username) }} />
          </Item>
          <Item last>
            <Label>Password</Label>
            <Input value={user.password}
              onChangeText={(_password) => { changedPassword(_password) }} />
          </Item>
          <Item>
            <Button onPress={doLogin}>
              <Text>Accedi</Text>
            </Button>
          </Item>
          <Text>{JSON.stringify(user, "", "\t")}</Text>
        </Form>

        <Button onPress={() => props.navigation.navigate("register")}>
          <Text>VAI A REGISTER</Text>
        </Button>
        <Button onPress={() => props.navigation.navigate("home")}>
          <Text>ENTRA</Text>
        </Button>
      </Content>
    </Container>

  )

}

export default Login;
