import { Container, Content, Text, Spinner, Title } from 'native-base';
import React from "react";
import { WebView } from 'react-native-webview';
import CommonHeader from "../../components/CommonHeader";
import { SIZES } from "../../constants/GlobalStyle"
const Video = (props) => {

  const [currentVideo, setCurrentVideo] = React.useState(props.navigation.getParam("currentVideo") || null)


  return (
    <Container>

      <CommonHeader title="Video" hasBack />

      <Content>
        {
          currentVideo ?
            <>
              <WebView
                style={{ width: SIZES.width, height: 200 }}
                javaScriptEnabled={true}
                source={{ uri: `https://www.youtube.com/embed/${currentVideo.id}?rel=0&autoplay=0&showinfo=0&controls=0` }}
              />
              <Title>{currentVideo.snippet.title}</Title>

            </>
            : <Spinner />
        }

      </Content>
    </Container>

  )

}

export default Video;
