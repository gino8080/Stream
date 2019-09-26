import { Camera } from 'expo-camera';
//const CommonHeader = require("../../components/CommonHeader")
import * as Permissions from 'expo-permissions';
import { Button, Container, Content, Spinner, Text, Thumbnail } from 'native-base';
import React from "react";
import { Linking, Alert } from "react-native";
import CommonHeader from "../../components/CommonHeader";

const Register = (props) => {

  const [hasCameraPermission, setHasCameraPermission] = React.useState(null);

  const [type, setType] = React.useState(Camera.Constants.Type.back)

  React.useEffect(() => {
    //allo start del componente 
    initCamera()
  }, [])

  const initCamera = async () => {
    const perm = await Permissions.askAsync(Permissions.CAMERA);
    const { status } = perm;

    console.log("permission status", status)

    setHasCameraPermission(status === "granted")
  }


  goToSetting = () => {
    Alert.alert("Permesso richiesto", "Devi autorizzare la camera, premi vai per aprire le impostazioni", [
      {
        text: 'Annulla',
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel',
      },
      { text: 'Vai', onPress: () => Linking.openURL('app-settings:') },
    ])

  }

  startCamera = () => {

  }



  //non so ancora se ho il permesso
  if (hasCameraPermission === null) {
    return <Spinner />
  }

  return (
    <Container>

      <CommonHeader title="SIGNUP" hasBack />

      <Content scrollEnabled={false} padder>
        <Container
          style={{ alignItems: "center" }}>
          <Thumbnail
            large
            style={{ width: 130, height: 130 }}
            source={require("../../assets/images/user_placeholder.png")}
          />


          <Button onPress={() => {
            !hasCameraPermission ? goToSetting() : startCamera()
          }}>
            <Text>Scegli / scatta foto</Text>
          </Button>

        </Container>


      </Content>
    </Container>
  )

}

export default Register;
