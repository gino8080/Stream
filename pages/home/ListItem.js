import React from "react";
import { View, Image, TouchableOpacity } from "react-native";
import { Container, Text } from "native-base";

const defaultItem =
{
  "href": "https://api.spotify.com/v1/browse/categories/toplists",
  "icons": [
    {
      "height": 275,
      "url": "https://t.scdn.co/media/derived/toplists_11160599e6a04ac5d6f2757f5511778f_0_0_275_275.jpg",
      "width": 275
    }
  ],
  "id": "toplists",
  "name": "Top Lists"
}

const ListItem = ({ item = defaultItem, onPressed = () => { console.log("press") } }) => {

  const imageUrl = item.icons ? item.icons[0].url : item.images[0].url
  return (
    <TouchableOpacity onPress={() => onPressed(item)}
      style={{ width: 200, height: "auto", marginRight: 5, ...GlobalStyle.bordered }} >
      <Container >
        <Image source={{ uri: imageUrl }} style={{ flex: 1 }} />
        <Text style={{ position: "absolute", top: 5, color: "white", ...GlobalStyle.bordered, width: "100%", textAlign: "center" }}>{item.name}</Text>
      </Container>
    </TouchableOpacity>
  )

}

export default ListItem;
