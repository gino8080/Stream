import { Container, Content } from 'native-base';
import React from "react";
import { FlatList } from "react-native"
import CommonHeader from "../../components/CommonHeader";
import { getBookmarks } from "../../data/Database"
import ListItem from "../home/ListItem";

const Bookmarks = (props) => {

  const [bookmarks, setBookmarks] = React.useState([])

  React.useEffect(() => {
    getBookmarks().then(_bookmarks => {
      console.log("getBookmarks", _bookmarks)
      setBookmarks(_bookmarks)
    })
      .catch(err => console.error(err))
  }, [])

  return (
    <Container>

      <CommonHeader title="BOOKMARKS" />

      <Content>
        <FlatList
          style={{ flex: 1 }}
          // horizontal
          keyExtractor={(item) => "ex" + item.etag}
          data={bookmarks}
          renderItem={({ item }) => (
            <ListItem item={item} />
          )
          }
        />

      </Content>
    </Container>

  )

}

export default Bookmarks;
