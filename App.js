import React, { useContext, useEffect, useState } from "react";
import * as firebase from 'firebase';
import { StyleSheet, Text, View, ActivityIndicator, Dimensions, Platform, PixelRatio } from "react-native";

//--Custom NPM Packages--//
import * as Font from 'expo-font';

//--Custom Components--//
import MainLogo from "./assets/MainLogo";

//--Lib--//
import adjust from './lib/adjustSize';

//--React Native Paper--//
import { configureFonts, DefaultTheme, Provider as PaperProvider } from "react-native-paper";
import { Appbar } from "react-native-paper";
import { Menu } from 'react-native-paper';

//--React Router--//
import { NativeRouter, Route, Link } from "react-router-native";
import Login from "./Login";
import Admin from "./Admin";
import Register from "./Register";
import UserProvider from "./context/UserContext/UserProvider";
import SnackbarProvider from "./context/SnackbarContext/SnackbarProviderr";
import SnackbarContainer from "./context/SnackbarContext/SnackbarContainer";
import SnackbarContext from "./context/SnackbarContext/SnackbarContext";

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
    flexDirection: 'column',
    overflowY: "hidden"
  },
  appBar: {
    width: "100%",
    height: "10vh"
  },
  titleText: {
    fontSize: adjust(50),
    color: "white"
  },
  mainView: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "start",
    alignItems: "center",
    width: "100%",
    height: "90vh",
    backgroundColor: "white",
    backgroundImage: "linear-gradient(180deg, rgba(255,255,255,1) 90%, rgba(149,214,0,1) 100%);"
  },
  linearGradient: {
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
    fontSize: adjust(24),
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

  const [loaded, setLoaded] = useState(false)
  const [visible, setVisible] = useState(false);

  const snackbarContext = useContext(SnackbarContext);

  const openMenu = () => setVisible(true);

  const closeMenu = () => setVisible(false);

  const pixelRatio = PixelRatio.get();
  const deviceHeight = Dimensions.get('window').height;
  const deviceWidth = Dimensions.get('window').width;


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

  const testNotification = () => {
    console.log("clicked")
    snackbarContext.showNotification("update","success")
  }

  const readTestCollection = async () => {
    const db = firebase.firestore();
    const testRef = db.collection('tests');
    const snapshot = await testRef.get();
    if (snapshot) {
      setLoaded(true)
    }
  }

  const MORE_ICON = Platform.OS === 'ios' ? 'dots-horizontal' : 'dots-vertical';


  return (
      <UserProvider>
        <SnackbarProvider>
          <NativeRouter>
            <PaperProvider theme={theme}>
              {loaded ? (
                  <View style={styles.container}>
                    <Appbar.Header style={styles.appBar}>
                      <Appbar.Content title="Logistixware" titleStyle={styles.titleText}/>
                      <Appbar.Action icon="truck" color="white" onPress={() => console.log('Pressed')}/>
                      <Appbar.Action icon="card-account-details-outline" color="white" onPress={() => testNotification()}/>
                      <Appbar.Action icon="package-variant" color="white" onPress={() => console.log('Pressed')}/>
                      <Appbar.Action icon="package-variant-closed" color="white" onPress={() => console.log('Pressed')}/>
                      <Menu
                          visible={visible}
                          onDismiss={closeMenu}
                          anchor={<Appbar.Action icon={MORE_ICON} color="white" onPress={openMenu}/>}>
                        <Menu.Item icon="truck" onPress={() => {
                        }} title="Trucks"/>
                        <Menu.Item icon="card-account-details-outline" onPress={() => {
                        }} title="Drivers"/>
                        <Menu.Item icon="package-variant" onPress={() => {
                        }} title="Collections"/>
                        <Menu.Item icon="package-variant-closed" onPress={() => {
                        }} title="Closed Collections"/>
                      </Menu>
                    </Appbar.Header>
                    <View style={styles.mainView}>
                      <Route exact path="/" component={Login}/>
                      <Route path="/register" component={Register}/>
                      <Route path="/admin" component={Admin}/>
                    </View>
                    <SnackbarContainer />
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
          </NativeRouter>
        </SnackbarProvider>
      </UserProvider>
  );
}
