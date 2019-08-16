import React, { Component } from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import AppBar from "material-ui/AppBar";

class Success extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <React.Fragment>
          <AppBar title="Enter User Details" />
          <h1>Thank You For Your Submission</h1>
          <p>You will get an email with more information</p>
        </React.Fragment>
      </MuiThemeProvider>
    );
  }
}

export default Success;
