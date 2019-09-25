import React from "react";
import { Button, Text, Container, Header, Content, Form, Item, Input, Label, Left, Icon, Right, Body, Title } from 'native-base';
import { useNavigation } from "react-navigation-hooks"

const CommonHeader = ({ title = false, hasBack = false }) => {
  const navigation = useNavigation();

  return (
    <Header>
      <Left>
        {
          hasBack && (
            <Button transparent
              onPress={() => navigation.goBack()}>
              <Icon name='arrow-back' />
            </Button>
          )
        }
      </Left>
      <Body>
        <Title>{title}</Title>
      </Body>
      <Right>
        {
          /*  
          <Button transparent>
            <Icon name='menu' />
          </Button>  
          */
        }
      </Right>
    </Header>
  )

}

export default CommonHeader;
