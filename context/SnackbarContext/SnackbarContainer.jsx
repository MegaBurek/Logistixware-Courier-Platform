import React from 'react';
import SnackbarConsumer from "./SnackbarConsumer";
import Snackbar from "react-native-paper/src/components/Snackbar";
import { StyleSheet } from "react-native";

const snackbarClassKey = StyleSheet.create({
  success: {
    backgroundColor: "#95d600"
  },
  error: {
    backgroundColor: "#f50057"
  },
  info: {
    backgroundColor: "#95d600"
  },
  warning: {
    backgroundColor: "#ff9100"
  }
})

function SnackbarContainer(props) {

  return (
      <SnackbarConsumer>
        {({status, hideNotification}) => (
            <Snackbar
                visible={status.visible}
                onDismiss={hideNotification}
                style={snackbarClassKey[status.variant]}
                action={{
                  label: 'Close',
                  onPress: () => {
                    // Do something
                  },
                }}>
              {status.message}
            </Snackbar>
        )}
      </SnackbarConsumer>
  );
}

export default SnackbarContainer;
