import React, { Component } from 'react';
import UserContext from "./UserContext";

class UserProvider extends Component {
  constructor(props) {
    super(props);

    this.state = {
      uid: null,
      name: null,
      surname: null,
      number: null,
      email: null
    };
  }

  render() {
    return <UserContext.Provider value={this.state}>{this.props.children}</UserContext.Provider>;
  }
}

export default UserProvider;
