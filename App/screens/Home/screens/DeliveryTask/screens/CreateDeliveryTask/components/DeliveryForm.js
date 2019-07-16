import React from 'react';
import { StyleSheet } from 'react-native';
import { Item, Form, Label, Input, Content } from 'native-base';

const styles = StyleSheet.create({
  form: {
    marginBottom: 15,
  },
});

const DeliveryForm = () => (
  <Content>
    <Form style={styles.form}>
      <Item floatingLabel>
        <Label>Address</Label>
        <Input />
      </Item>
      <Item floatingLabel>
        <Label>First name</Label>
        <Input />
      </Item>
      <Item floatingLabel>
        <Label>Last name</Label>
        <Input />
      </Item>
      <Item floatingLabel last>
        <Label>Phone number</Label>
        <Input />
      </Item>
    </Form>
  </Content>
);

export default DeliveryForm;
