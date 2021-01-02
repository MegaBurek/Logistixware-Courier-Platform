import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { configureFonts, DefaultTheme, Provider as PaperProvider } from "react-native-paper";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import { Appbar } from "react-native-paper";
import * as Font from 'expo-font';
import { Button } from 'react-native-paper';
import * as firebase from 'firebase';
import { LinearGradient } from "expo-linear-gradient";

const fontConfig = {
  web: {
    regular: {
      fontFamily: 'MyriadArabic',
      fontWeight: 'normal',
    },
    medium: {
      fontFamily: 'MyriadArabic',
      fontWeight: 'normal',
    },
    light: {
      fontFamily: 'MyriadArabic',
      fontWeight: 'normal',
    },
    thin: {
      fontFamily: 'MyriadArabic',
      fontWeight: 'normal',
    },
  },
  ios: {
    regular: {
      fontFamily: 'MyriadArabic',
      fontWeight: 'normal',
    },
    medium: {
      fontFamily: 'MyriadArabic',
      fontWeight: 'normal',
    },
    light: {
      fontFamily: 'MyriadArabic',
      fontWeight: 'normal',
    },
    thin: {
      fontFamily: 'MyriadArabic',
      fontWeight: 'normal',
    },
  },
  android: {
    regular: {
      fontFamily: 'MyriadArabic',
      fontWeight: 'normal',
    },
    medium: {
      fontFamily: 'MyriadArabic',
      fontWeight: 'normal',
    },
    light: {
      fontFamily: 'MyriadArabic',
      fontWeight: 'normal',
    },
    thin: {
      fontFamily: 'MyriadArabic',
      fontWeight: 'normal',
    },
  }
};

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: "#95d600",
    accent: "#6a143b",
  },
  fonts: configureFonts(fontConfig)
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    flexDirection: 'column'
  },
  appBar: {
    width: "100%",
    height: "50px"
  },
  titleText: {
    fontSize: RFPercentage(3)
  },
  mainView: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "100%",
    backgroundColor: "white",
    background: "linear-gradient(90deg, rgba(255,255,255,1) 90%, rgba(149,214,0,1) 100%);"
  }
});

const firebaseConfig = {
  "apiKey": "AIzaSyCgNV1Y2b2i_a_Yn_tQkTaU3dOlzyP6OC0",
  "authDomain": "logistixware-86caa.firebaseapp.com",
  "databaseURL": "https://logistixware-86caa-default-rtdb.europe-west1.firebasedatabase.app",
  "projectId": "logistixware-86caa",
  "storageBucket": "logistixware-86caa.appspot.com",
  "messagingSenderId": "868906802036",
  "appId": "1:868906802036:web:1ee3bb47d4281ae0076a21",
  "measurementId": "G-4F8RWHWZ3Y",
};

export default function App() {

  const [fontsLoaded, setFontsLoaded] = useState(false)

  useEffect(async () => {
    firebase.initializeApp(firebaseConfig);
    await Font.loadAsync({
      MyriadArabic: require('./assets/fonts/MyArabicBoldItalic.ttf')
    })
    setFontsLoaded(true);
  }, [])

  const addTestCollection = () => {
    const db = firebase.firestore();
    const userRef = db.collection('tests').add({
      description: "something new"
    });
    console.log(userRef)
  }

  const readTestCollection = async () => {
    const db = firebase.firestore();
    const testRef = db.collection('tests');
    const snapshot = await testRef.get();
    snapshot.forEach(doc => {
      console.log(doc.id, '=>', doc.data());
    });
  }


  return (
      <PaperProvider theme={theme}>
        {fontsLoaded ? (
            <View style={styles.container}>
              <Appbar.Header style={styles.appBar}>
                <Appbar.Content title="Logistixware" titleStyle={styles.titleText}/>
                <Appbar.Action icon="magnify" onPress={() => console.log('Pressed')}/>
                <Appbar.Action icon="dots-vertical" onPress={() => console.log('Pressed')}/>
              </Appbar.Header>
              <LinearGradient
                  colors={["#ffffff", "#95d600"]}
                  start={[0.9, 1.0]}
                  style={{width: "100%", height: "100%"}}
              >
                <View style={styles.mainView}>
                  {/*<Button icon="camera" mode="contained" onPress={() => readTestCollection()} style={{width: "150px"}}>*/}
                  {/*  Get Tests*/}
                  {/*</Button>*/}
                  {/*<Button icon="camera" mode="contained" onPress={() => addTestCollection()} style={{width: "150px"}}>*/}
                  {/*  Add Test*/}
                  {/*</Button>*/}
                </View>
              </LinearGradient>
            </View>
        ) : (
            // splash screen goes here
            <View>
              <Text>Fonts not loaded</Text>
            </View>
        )}

      </PaperProvider>
  );
}
