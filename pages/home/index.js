import { Container, Content, Text } from 'native-base';
import React from "react";
import { FlatList } from "react-native"
import CommonHeader from "../../components/CommonHeader";
import GlobalStyle from "../../constants/GlobalStyle"
import Services from "../../data/Services";
import ListItem from "./ListItem";

const Home = (props) => {

  const [categoriesIT, setCategoriesIT] = React.useState([])
  const [categoriesUS, setCategoriesUS] = React.useState([])


  React.useEffect(() => {
    getContents();
  }, [])


  const getContents = () => {

    Services.categories().then(_categories => {
      console.log("_categories", _categories)
      setCategoriesIT(_categories)
    })

    Services.categories("US").then(_categories => {
      console.log("_categories", _categories)
      setCategoriesUS(_categories)
    })

  }


  const onPressedItem = (pressedItem) => {
    console.log("onPressedItem", pressedItem)
  }


  return (
    <Container>

      <CommonHeader title="Home" />

      <Content scrollEnabled={false}>
        <Container style={{ flex: 1, height: 300 }}>

          <FlatList
            style={{ flex: 1, ...GlobalStyle.bordered }}
            horizontal
            keyExtractor={(item) => "it" + item.etag}
            data={categoriesIT}
            renderItem={({ item }) => (
              <ListItem item={item} onPressed={onPressedItem} />
            )
            }
          />
        </Container>


        <Container style={{ flex: 1, height: 300 }}>
          <FlatList
            style={{ flex: 1, ...GlobalStyle.bordered }}
            horizontal
            keyExtractor={(item) => "ex" + item.etag}
            data={categoriesUS}
            renderItem={({ item }) => (
              <ListItem item={item} onPressed={onPressedItem} />
            )
            }
          />
        </Container>


      </Content>
    </Container>

  )

}

export default Home;
