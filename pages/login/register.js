import { Camera } from 'expo-camera';
//const CommonHeader = require("../../components/CommonHeader")
import * as Permissions from 'expo-permissions';
import { Button, Container, Content, Spinner, Text, Thumbnail, ActionSheet } from 'native-base';
import * as ImagePicker from "expo-image-picker";
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
    const perm = await Permissions.askAsync(Permissions.CAMERA_ROLL);
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
      {
        text: 'Vai', onPress: () => {
          console.log("premuto VAI a settings");
          Linking.openURL('app-settings:');
        }
      },
    ])

  }

  startCamera = () => {
    ActionSheet.show(
      {
        options: ['Scatta foto', 'scegli da galleria', 'Annulla'],
        cancelButtonIndex: 2,
        //destructiveButtonIndex: 3
      },
      (indexSelected) => {
        console.log("Premuta voce index", indexSelected);
        if (indexSelected === 0) {
          //scatta foto
          ImagePicker.launchCameraAsync()
        }
        else if (indexSelected === 1) {
          //Scegli da galleria
          ImagePicker.launchImageLibraryAsync()
        }
      }

    )

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
