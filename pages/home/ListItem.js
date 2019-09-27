import React from "react";
import { View, Image, TouchableOpacity, Dimensions, StyleSheet } from "react-native";
import { Container, Text, Icon } from "native-base";
import { SIZES } from "../../constants/GlobalStyle"
import { addBookmark } from "../../data/Database";
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import { useNavigation } from "react-navigation-hooks"

const defaultItem = {
  "kind": "youtube#searchResult",
  "etag": "p4VTdlkQv3HQeTEaXgvLePAydmU/qrRmbI7VsHyhlSfgjtSyTru7frI",
  "id": {
    "kind": "youtube#channel",
    "channelId": "UC2b9IFlgcfZ_2TOW_BQTh0A"
  },
  "snippet": {
    "publishedAt": "2007-12-14T19:50:24.000Z",
    "channelId": "UC2b9IFlgcfZ_2TOW_BQTh0A",
    "title": "PLACEBO",
    "description": "This is the official YouTube channel of Placebo, on this channel you will find all of the official video content from the band including music videos, full album ...",
    "thumbnails": {
      "default": {
        "url": "https://yt3.ggpht.com/-e-WNAh0RjFI/AAAAAAAAAAI/AAAAAAAAAAA/TJ46bU8uO9Q/s88-c-k-no-mo-rj-c0xffffff/photo.jpg"
      },
      "medium": {
        "url": "https://yt3.ggpht.com/-e-WNAh0RjFI/AAAAAAAAAAI/AAAAAAAAAAA/TJ46bU8uO9Q/s240-c-k-no-mo-rj-c0xffffff/photo.jpg"
      },
      "high": {
        "url": "https://yt3.ggpht.com/-e-WNAh0RjFI/AAAAAAAAAAI/AAAAAAAAAAA/TJ46bU8uO9Q/s800-c-k-no-mo-rj-c0xffffff/photo.jpg"
      }
    },
    "channelTitle": "PLACEBO",
    "liveBroadcastContent": "none"
  }
}

const ListItem = ({ item, onPressed = null }) => {

  const navigation = useNavigation();

  const imageUrl = item.image ? item.image : item.snippet ? item.snippet.thumbnails.medium.url : "https://yt3.ggpht.com/-e-WNAh0RjFI/AAAAAAAAAAI/AAAAAAAAAAA/TJ46bU8uO9Q/s800-c-k-no-mo-rj-c0xffffff/photo.jpg";


  const internalPress = () => {
    if (onPressed) onPressed(item)
    else navigation.navigate("video", { currentVideo: item })
  }

  const toggleBookmark = (item) => {
    addBookmark(item)
  }

  return (

    <Container style={styles.item}>
      <TouchableOpacity onPress={internalPress} style={{ flex: 1 }}  >
        <Image source={{ uri: imageUrl }} style={styles.image} />
        <Text style={styles.title}>{item.title || item.snippet.title}</Text>
      </TouchableOpacity>
      <Ionicons name="ios-heart" onPress={() => toggleBookmark(item)} color="grey" style={{ position: "absolute", fontSize: 40, bottom: 0, right: 0 }} />
    </Container>

  )

}

const styles = StyleSheet.create({
  item: {
    width: SIZES.width,
    height: SIZES.height * .3,
    marginBottom: 5
  },

  image: {
    flex: 1,
    width: SIZES.width,
    height: SIZES.height * .3,
  },
  title: {
    position: "absolute",
    top: 0,
    backgroundColor: "black",
    padding: 5,
    opacity: .8,
    color: "white",
    width: "100%",
    textAlign: "center"
  }
})

export default ListItem;
