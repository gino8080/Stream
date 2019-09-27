import { Container, Content, Text, Tab, Tabs, ScrollableTab } from 'native-base';
import React from "react";
import { FlatList } from "react-native"
import CommonHeader from "../../components/CommonHeader";

import Services from "../../data/Services";
import ListItem from "./ListItem";

const Home = (props) => {

  const [categoriesIT, setCategoriesIT] = React.useState([])
  const [categoriesUS, setCategoriesUS] = React.useState([])
  const [categoriesJP, setCategoriesJP] = React.useState([])


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

    Services.categories("JP").then(_categories => {
      console.log("_categories", _categories)
      setCategoriesJP(_categories)
    })

  }


  const onPressedItem = (pressedItem) => {
    console.log("onPressedItem", pressedItem)
  }


  return (
    <Container>

      <CommonHeader title="Home" />


      <Tabs>
        <Tab heading="Italia" >
          <Container style={{ flex: 1 }}>
            <FlatList
              style={{ flex: 1 }}
              // horizontal
              keyExtractor={(item) => "it" + item.etag}
              data={categoriesIT}
              renderItem={({ item }) => (
                <ListItem item={item} onPressed={onPressedItem} />
              )
              }
            />
          </Container>
        </Tab>
        <Tab heading="Estero">
          <Container style={{ flex: 1 }}>
            <FlatList
              style={{ flex: 1 }}
              // horizontal
              keyExtractor={(item) => "ex" + item.etag}
              data={categoriesUS}
              renderItem={({ item }) => (
                <ListItem item={item} onPressed={onPressedItem} />
              )
              }
            />
          </Container>
        </Tab>
        <Tab heading="Oriente">
          <Container style={{ flex: 1 }}>
            <FlatList
              style={{ flex: 1 }}
              // horizontal
              keyExtractor={(item) => "ex" + item.etag}
              data={categoriesJP}
              renderItem={({ item }) => (
                <ListItem item={item} onPressed={onPressedItem} />
              )
              }
            />
          </Container>
        </Tab>
      </Tabs>

    </Container>

  )

}

export default Home;
