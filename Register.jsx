import * as React from 'react';
import { Button, Card, Title, Paragraph, TextInput, Snackbar  } from 'react-native-paper';
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
    height: "50px",
    marginBottom: "5px"
  }
});

function Register(props) {

  let history = useHistory();

  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [number, setNumber] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repassword, setRepassword] = useState("");

  const [visible, setVisible] = useState(false);

  const onDismissSnackBar = () => setVisible(false);

  const register = () => {
    const db = firebase.firestore();
    firebase.auth().createUserWithEmailAndPassword(email, password)
        .then((user) => {
          const userRef = db.collection('users').add({
            id: user.user.uid,
            name: name,
            surname: surname,
            number: number,
            email: email,
            password: password
          });
          setVisible(!visible);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.error(errorCode, " ", errorMessage)
        });
  }

  return (
      <Card style={styles.card}>
        <Card.Title title="Register" titleStyle={styles.cardTitle}/>
        <Card.Content>
          <TextInput
              label="Name"
              mode="flat"
              style={styles.textInput}
              value={name}
              onChangeText={text => setName(text)}
          />
          <TextInput
              label="Surname"
              mode="flat"
              style={styles.textInput}
              value={surname}
              onChangeText={text => setSurname(text)}
          />
          <TextInput
              label="Number"
              mode="flat"
              style={styles.textInput}
              value={number}
              onChangeText={text => setNumber(text)}
          />
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
          <TextInput
              label="Repeat Password"
              mode="flat"
              style={styles.textInput}
              value={repassword}
              onChangeText={text => setRepassword(text)}
          />
        </Card.Content>
        <Card.Actions>
          <Button mode="contained" icon="account-check" style={styles.button} onPress={() => register()}>Finish</Button>
        </Card.Actions>
        <Snackbar
            visible={visible}
            onDismiss={onDismissSnackBar}
            action={{
              label: 'Done',
              onPress: () => {
                // Do something
              },
            }}>
          Hey there! I'm a Snackbar.
        </Snackbar>
      </Card>
  );
}

export default Register;
