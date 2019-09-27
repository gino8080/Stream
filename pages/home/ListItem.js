import React from "react";
import { View, Image, TouchableOpacity } from "react-native";
import { Container, Text } from "native-base";

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
      style={{ width: 200, height: "auto", marginRight: 5, ...GlobalStyle.bordered }} >
      <Container >
        <Image source={{ uri: imageUrl }} style={{ flex: 1 }} />
        <Text style={{ position: "absolute", top: 5, color: "white", ...GlobalStyle.bordered, width: "100%", textAlign: "center" }}>{item.snippet.title}</Text>
      </Container>
    </TouchableOpacity>
  )

}

export default ListItem;
