import React from "react";
import { View, Image, TouchableOpacity, Dimensions, StyleSheet } from "react-native";
import { Container, Text } from "native-base";
import { SIZES } from "../../constants/GlobalStyle"

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

const ListItem = ({ item = defaultItem, onPressed = () => { console.log("press") } }) => {

  const imageUrl = item.snippet.thumbnails.medium.url
  return (
    <TouchableOpacity onPress={() => onPressed(item)}
      style={styles.item} >
      <Container >
        <Image source={{ uri: imageUrl }} style={{ flex: 1 }} />
        <Text style={styles.title}>{item.snippet.title}</Text>
      </Container>
    </TouchableOpacity>
  )

}

const styles = StyleSheet.create({
  item: {
    width: SIZES.width,
    height: SIZES.height * .3,
    marginBottom: 5
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
