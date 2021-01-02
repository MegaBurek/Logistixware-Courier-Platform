import React, { useEffect, useState } from "react";
import * as firebase from 'firebase';
import { StyleSheet, Text, View, ActivityIndicator, Dimensions, Platform, PixelRatio } from "react-native";

//--Custom NPM Packages--//
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import { LinearGradient } from "expo-linear-gradient";
import * as Font from 'expo-font';

//--Custom Components--//
import MainLogo from "./assets/MainLogo";

//--React Native Paper--//
import { configureFonts, DefaultTheme, Provider as PaperProvider } from "react-native-paper";
import { Appbar } from "react-native-paper";
import { Button } from 'react-native-paper';

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

const {
  width: SCREEN_WIDTH
} = Dimensions.get('window');

const scale = SCREEN_WIDTH / 320;

function normalize(size) {
  const newSize = size * scale
  if (Platform.OS === 'ios') {
    return Math.round(PixelRatio.roundToNearestPixel(newSize))
  } else {
    return Math.round(PixelRatio.roundToNearestPixel(newSize)) - 2
  }
}

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
    fontSize: normalize(10)
  },
  mainView: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "100%",
    backgroundColor: "white",
    backgroundImage: "linear-gradient(180deg, rgba(255,255,255,1) 90%, rgba(149,214,0,1) 100%);"
  },
  linearGradient:{
    left: 0,
    right: 0,
    bottom: 0,
    width: "100%",
    height: "100%"
  },
  splashScreen: {
    width: "100%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ffffff"
  },
  splashScreenText: {
    fontSize: normalize(6),
    fontFamily: 'MyriadArabic'
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
    await readTestCollection();
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
    if(snapshot){
      setFontsLoaded(true);
    }
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
              <View style={styles.mainView}>
                {/*<LinearGradient*/}
                {/*    colors={["#ffffff", "#95d600"]}*/}
                {/*    start={{x: 0, y: 0.9}}*/}
                {/*    end={{x: 0, y: 1}}*/}
                {/*    style={styles.linearGradient}*/}
                {/*/>*/}
                {/*<Button icon="camera" mode="contained" onPress={() => readTestCollection()} style={{width: "150px"}}>*/}
                {/*  Get Tests*/}
                {/*</Button>*/}
                {/*<Button icon="camera" mode="contained" onPress={() => addTestCollection()} style={{width: "150px"}}>*/}
                {/*  Add Test*/}
                {/*</Button>*/}
              </View>
            </View>
        ) : (
            // splash screen goes here
            <View style={styles.splashScreen}>
              <MainLogo/>
              <Text style={styles.splashScreenText}>Courier Platform</Text>
              <ActivityIndicator size="large" color="#95d600"/>
            </View>
        )}

      </PaperProvider>
  );
}
