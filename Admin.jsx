import React from 'react';
import { Button, Card, TextInput } from "react-native-paper";

function Admin(props) {
  return (
      <Card>
        <Card.Title title="Admin Panel"/>
        <Card.Content>
          
        </Card.Content>
        <Card.Actions>
          <Button mode="contained" icon="login-variant" onPress={() => console.log("pressed")}>Something</Button>
          <Button mode="outlined" icon="account-plus" onPress={() => console.log("pressed")}>Something</Button>
        </Card.Actions>
      </Card>
  );
}

export default Admin;
