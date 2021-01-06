import React from "react";

import SnackbarContext from "./SnackbarContext";

class SnackbarProvider extends React.Component {
  constructor(props) {
    super(props);

    this.showNotification = this.showNotification.bind(this);
    this.hideNotification = this.hideNotification.bind(this);

    this.state = {
      status: {},
      showNotification: this.showNotification,
      hideNotification: this.hideNotification
    };
  }

  showNotification(message, type) {

    let msg = "";
    switch (message) {
      case "update":
        msg = "You have successfully updated";
        break;
      case "create":
        msg = "You have successfully created";
        break;
      case "delete":
        msg = "You have successfully deleted";
        break;
      default:
        if (message && message.length > 0) {
          msg = "Successful action"
        }
        break;
    }

    let newVariant;
    switch (type) {
      case "success":
      case "info":
      case "error":
      case "warning":
        newVariant = type;
    }

    this.setState({
      status: { visible: true, message: msg, variant: newVariant }
    });
  }

  hideNotification() {
    this.setState({
      status: { visible: false, message: "", variant: "" }
    });
  }

  render() {
    return (
        <SnackbarContext.Provider value={this.state}>
          {this.props.children}
        </SnackbarContext.Provider>
    );
  }
}

export default SnackbarProvider;
