import { Container, Content, Text } from 'native-base';
import React from "react";
import { FlatList } from "react-native"
import CommonHeader from "../../components/CommonHeader";
import GlobalStyle from "../../constants/GlobalStyle"
import Services from "../../data/Services";
import ListItem from "./ListItem";

const Home = (props) => {

  const [categories, setCategories] = React.useState([])
  const [newReleases, setNewReleases] = React.useState([])

  React.useEffect(() => {
    getContents();
  }, [])


  const getContents = () => {
    Services.categories().then(_categories => {
      console.log("_categories", _categories)
      setCategories(_categories)
    })

    Services.newReleases().then(_newReleases => {
      console.log("_newReleases", _newReleases)
      setNewReleases(_newReleases)
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
            data={newReleases}
            renderItem={({ item }) => (<ListItem item={item} />)
            }
          />
        </Container>

      </Content>
    </Container>

  )

}

export default Home;
