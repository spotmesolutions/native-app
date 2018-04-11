import React, { Component } from "react";
import { View, Text, Image } from "react-native";
import {Input, Button, Spinner } from "./common";
// 1.2-import connect and emailChanged

class LoginForm extends Component {
  renderButton() {
    return <Button>Login</Button>;
  }
  render() {
    return (
      <View style={styles.cardStyle}>

        <View style={styles.logoStyle}>
          <Image
            style={styles.imageStyle}
            source={require("../images/logo.jpg")}
          />
        </View>

        <View style={styles.cardSectionStyle}>
          <Input label="Email" placeholder="email@gmail.com" />
        </View>

        <View style={styles.cardSectionStyle}>
          <Input label="Password" placeholder="password" />
        </View>

        <View style={styles.loginContainerStyle}>
        <View>{this.renderButton()}</View>
        <Image
        source={require("../images/fbIcon.jpg")}
      />
        </View>
        
        <View style={styles.notAMemberStyle}>
          <Text style={{ marginLeft: 100 }}>Not a member? </Text>
          <Text style={styles.registerStyle}>Register here!</Text>
        </View>

      </View>
    );
  }
}
const styles = {
  cardStyle:{
    flex:1,
    flexDirection: "column",
    alignItems: "center",
      borderWidth: 1,
        borderRadius: 2,
        borderColor: '#ddd',
        borderBottomWidth: 0,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 2,
        elevation: 1,
        marginLeft: 5, 
        marginRight: 5
        },
  
  cardSectionStyle: {
    borderBottomWidth: 1,
    padding: 5, 
    backgroundColor: '#fff',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    borderColor: '#ddd',
    position: 'relative',
    margin: 20
  },
  loginContainerStyle: {
    flexDirection:"row"
  },
  notAMemberStyle:{
    padding: 5, 
    backgroundColor: '#fff',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    borderColor: '#ddd',
    position: 'relative',
    margin: 20
  },
  logoStyle:{
    padding: 5, 
    backgroundColor: '#fff',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    borderColor: '#ddd',
    position: 'relative',
    margin: 20
  },
  errorTextStyle: {
    fontSize: 20,
    alignSelf: "center",
    color: "red"
  },
  imageStyle: {
    height: 110,
    width: 30,
    flex: 1
  },
  registerStyle: {
    color: "blue"
  }
};

export default LoginForm;
