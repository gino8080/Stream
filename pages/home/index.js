import { Container, Content, Text } from 'native-base';
import React from "react";
import { FlatList } from "react-native"
import CommonHeader from "../../components/CommonHeader";
import GlobalStyle from "../../constants/GlobalStyle"
import Services from "../../data/Services";
import ListItem from "./ListItem";

const Home = (props) => {

  const [categories, setCategories] = React.useState([])
  const [topLists, setTopLists] = React.useState([])

  React.useEffect(() => {
    getContents();
  }, [])


  const getContents = () => {
    Services.categories().then(_categories => {
      console.log("_categories", _categories)
      setCategories(_categories)
    })
  }
  return (
    <Container>

      <CommonHeader title="Home" />

      <Content scrollEnabled={false}>
        <Container style={{ flex: 1, height: 300 }}>

          <FlatList
            style={{ flex: 1, ...GlobalStyle.bordered }}
            horizontal
            data={categories}
            renderItem={({ item }) => (<ListItem item={item} />)
            }
          />
        </Container>

        <Container style={{ flex: 1, height: 300 }}>
          <FlatList
            style={{ flex: 1, ...GlobalStyle.bordered }}
            horizontal
            data={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}
            renderItem={({ item }) => (
              <Container style={{ width: 200, height: 100, ...GlobalStyle.bordered }}>
                <Text>{item}</Text>
              </Container>
            )
            }
          />
        </Container>

      </Content>
    </Container>

  )

}

export default Home;
