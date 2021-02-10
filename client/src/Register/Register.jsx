import React, { Component } from "react";
import RegistrationForm from "./../components/registrationForm/registrationForm"

class Register extends Component {
  
  render() {
    return (
      <div className= "container-fluid" style={{
        backgroundColor: "#add8e6"}}>
        <RegistrationForm />
      </div>
    );
  }
}

export default Register;
