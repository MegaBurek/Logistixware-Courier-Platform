import * as React from 'react';
import { Button, Card, Title, Paragraph, TextInput } from 'react-native-paper';
import { Text, StyleSheet } from "react-native";
import { useState } from "react";
import * as firebase from 'firebase';
import { useHistory } from "react-router-dom";

const styles = StyleSheet.create({
  card: {
    width: "350px",
    boxShadow: "0px 3px 5px 0px rgba(0,0,0,0.75)",
    marginTop: "15px"
  },
  cardTitle: {
    fontSize: "47px"
  },
  button: {
    height: "35px",
    marginRight: "5px",
    textAlign: "center",
    color: "white"
  },
  textInput: {
    height: "50",
    marginBottom: "5px"
  }
});

function Login(props) {

  let history = useHistory();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const login = () => {
    firebase.auth().signInWithEmailAndPassword(email, password)
        .then((user) => {
          history.push("/admin")
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.error(errorCode, " ", errorMessage)
        });
  }

  const toRegister = () => {
    history.push("/register");
  }

  return (
      <Card style={styles.card}>
        <Card.Title title="Login" titleStyle={styles.cardTitle}/>
        <Card.Content>
          <TextInput
              label="Email"
              mode="flat"
              style={styles.textInput}
              value={email}
              onChangeText={text => setEmail(text)}
          />
          <TextInput
              label="Password"
              mode="flat"
              style={styles.textInput}
              value={password}
              onChangeText={text => setPassword(text)}
          />
        </Card.Content>
        <Card.Actions>
          <Button mode="contained" icon="login-variant" style={styles.button} onPress={() => login()}>Login</Button>
          <Button mode="outlined" icon="account-plus" style={styles.button} onPress={() => toRegister()}>Register</Button>
        </Card.Actions>
      </Card>
  );
}

export default Login;
