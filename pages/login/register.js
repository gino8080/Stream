import { Camera } from 'expo-camera';
//const CommonHeader = require("../../components/CommonHeader")
import * as Permissions from 'expo-permissions';
import Constants from "expo-constants";
import { Button, Container, Content, Spinner, Text, Thumbnail, ActionSheet } from 'native-base';
import * as ImagePicker from "expo-image-picker";
import React, { useState } from "react";
import { Linking, Alert, Platform } from "react-native";
import CommonHeader from "../../components/CommonHeader";
import * as IntentLauncher from 'expo-intent-launcher';

const Register = (props) => {

  const [hasCameraPermission, setHasCameraPermission] = React.useState(null);

  const [selectedImage, setSelectedImage] = useState({})


  React.useEffect(() => {
    //allo start del componente 
    initCamera()
  }, [])

  const initCamera = async () => {
    const perm = await Permissions.askAsync(
      Permissions.CAMERA, Permissions.CAMERA_ROLL
    );
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

          if (Platform.OS === "ios") {
            Linking.openURL('app-settings:');

          } else {

            const pkg = Constants.manifest.releaseChannel
              ? Constants.manifest.android.package  // When published, considered as using standalone build
              : "host.exp.exponent"; // In expo client mode

            IntentLauncher.startActivityAsync(
              IntentLauncher.ACTION_APPLICATION_DETAILS_SETTINGS,
              { data: 'package:' + pkg },
            )
          }
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
      async (indexSelected) => {
        console.log("Premuta voce index", indexSelected);
        if (indexSelected === 0) {
          //scatta foto
          const imageResult = await ImagePicker.launchCameraAsync({
            allowsEditing: true,
            mediaTypes: "Images"
          })
          setSelectedImage(imageResult)

        }
        else if (indexSelected === 1) {
          //Scegli da galleria
          ImagePicker.launchImageLibraryAsync({
            allowsEditing: true,
            mediaTypes: "Images"
          })
            .then(imageResult => {
              console.log("imageResult", imageResult)
              setSelectedImage(imageResult)
            })
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

            source={selectedImage.uri ? selectedImage : require("../../assets/images/user_placeholder.png")}
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
