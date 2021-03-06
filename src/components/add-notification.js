import React, { Component } from 'react';
import { Container, Header, Content, Form, Item, Input, Label } from 'native-base';
import { Button } from 'react-native';
import TimePicker from './time-picker';


export default class AddNotification extends Component {
  static navigationOptions = {
    title: "Add a Notification",
    headerStyle: {
      backgroundColor: 'lightblue',
      height: 72,
      paddingTop: 20
    },
    headerTitleStyle: {
      alignSelf: 'center'

    }
  }

  render() {
    return (
      <Container>
        <Content>
          <Form>
            <Item fixedLabel>
              <Label>Title</Label>
              <Input placeholder="Drink Water"/>
            </Item>
            <Item fixedLabel last>
              <Label>Days</Label>
              <Input placeholder="Mon - Tues - Wed"/>
            </Item>
            <Item fixedLabel last>
              <Label>Start Time</Label>
              <TimePicker />
            </Item>
            <Item fixedLabel last>
              <Label>End Time</Label>
              <TimePicker />
            </Item>
            <Item fixedLabel last>
              <Label>Frequency</Label>
              <Input placeholder="45 minutes"/>
            </Item>
            <Button 
          onPress 
          title="Add Notification"
        />
          </Form>
        </Content>
      </Container>
    );
  }
}