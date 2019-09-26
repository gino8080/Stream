import React from "react";
import { View, Image } from "react-native";
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

const ListItem = ({ item = defaultItem }) => {

  return (
    <Container style={{ width: 200, height: "auto", ...GlobalStyle.bordered }}>
      <Image source={{ uri: item.icons[0].url }} style={{ flex: 1 }} />
      <Text>{item.name}</Text>
    </Container>
  )

}

export default ListItem;
