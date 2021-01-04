import React, { useState } from 'react';
import { Button, Card, Snackbar, TextInput } from "react-native-paper";

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

function CollectionRequest(props) {

  const [shipperFullName, setShipperFullName] = useState("");
  const [fullAddress, setFullAddress] = useState("");
  const [fullTelephoneNumber, setFullTelephoneNumber] = useState("");
  const [alternativeNumber, setAlternateNumber] = useState("");
  const [contactPerson, setContactPerson] = useState("");
  const [alternativeContactPerson, setAlternativeContactPerson] = useState("");
  const [shipperCustomExporterCode, setShipperCustomExporterCode] = useState("");
  const [specialInstructions, setSpecialInstructions] = useState("");
  const [readyTime, setReadyTime] = useState("");
  const [closingTime, setClosingTime] = useState("");
  const [receiverFullName, setReceiverFullName] = useState("");
  const [receiverPhysicalDeliveryAddress, setReceiverPhysicalDeliveryAddress] = useState("");
  const [receiverTelephoneNumber, setReceiverTelephoneNumber] = useState("");
  const [receiverEmail, setReceiverEmail] = useState("");
  const [financedBy, setFinancedBy] = useState("");
  const [accountNumber, setAccountNumber] = useState("");

  return (
      <Card style={styles.card}>
        <Card.Title title="Collection Request" titleStyle={styles.cardTitle}/>
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
      </Card>
  );
}

export default CollectionRequest;
