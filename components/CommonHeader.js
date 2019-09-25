import React from "react";
import { Button, Text, Container, Header, Content, Form, Item, Input, Label, Left, Icon, Right, Body, Title } from 'native-base';


const CommonHeader = ({ title = false, hasBack = false }) => {

  return (
    <Header>
      <Left>
        {
          hasBack && (
            <Button transparent>
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
