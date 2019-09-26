import { Container, Content, Button, Icon, Text } from 'native-base';
import React from "react";
import CommonHeader from "../../components/CommonHeader";
import Storage from "../../data/Storage";
const Profile = (props) => {

  const logOut = (clearAll = false) => {
    if (clearAll) {
      Storage.clear();
    } else {
      Storage.removeItem("isLogged");
    }
    props.navigation.navigate("auth")
  }

  return (
    <Container>

      <CommonHeader title="Profile" />

      <Content>

        <Button iconLeft onPress={logOut}>
          <Icon name='arrow-back' />
          <Text>Log Out</Text>
        </Button>

        <Button iconLeft onPress={() => logOut(true)}>
          <Icon name='arrow-back' />
          <Text>Clear All</Text>
        </Button>
      </Content>
    </Container>

  )

}

export default Profile;
