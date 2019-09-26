import { Container, Content, Text } from 'native-base';
import React from "react";
import { FlatList } from "react-native"
import CommonHeader from "../../components/CommonHeader";
import GlobalStyle from "../../constants/GlobalStyle"
const Home = (props) => {


  return (
    <Container>

      <CommonHeader title="Home" />

      <Content scrollEnabled={false}>
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
