import React, { useState } from "react";
import { Alert } from "react-native";
import { Button, Text, Container, Header, Content, Form, Item, Input, Label, Left, Icon, Right, Body, Title, Footer, FooterTab } from 'native-base';
import CommonHeader from "../../components/CommonHeader"
import Storage from "../../data/Storage";

const Login = (props) => {

  //const [username, setUsername] = useState("");
  //const [password, setPassword] = useState("");

  const [user, setUser] = useState({ username: "", password: "" })

  const doLogin = () => {
    console.log(user)

    if (user.username.toLowerCase().trim() === "admin" &&
      user.password.toLowerCase().trim() === "password") {
      //login ok!
      Storage.set("isLogged", true);
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

      <Content padder>

        <Form>
          <Item >

            <Input
              placeholder="username"
              value={user.username}
              onChangeText={(_username) => { changedUsername(_username) }} />
          </Item>
          <Item last>

            <Input
              placeholder="password"
              value={user.password}
              onChangeText={(_password) => { changedPassword(_password) }} />
          </Item>



          {/* <Text>{JSON.stringify(user, "", "\t")}</Text> */}
        </Form>

        <Button onPress={doLogin} success block>
          <Text>Accedi</Text>
        </Button>
        <Button onPress={() => props.navigation.navigate("reset")} transparent>
          <Text>Hai dimenticato la password?</Text>
        </Button>
      </Content>

      <Footer>
        <FooterTab>
          <Button onPress={() => props.navigation.navigate("register")} >
            <Text>Registrati</Text>
          </Button>
        </FooterTab>
      </Footer>

    </Container>

  )

}

export default Login;
