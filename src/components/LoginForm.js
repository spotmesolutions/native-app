import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import { emailChanged, passwordChanged, loginUser } from '../actions';
import {
  Card,
  CardSection,
  Input,
  Button,
  Spinner,
  Header,
  ButtonSection,
  LogoImageSection
} from './common';
 class LoginForm extends Component {
   onEmailChange(text) {
    this.props.emailChanged(text);
  }
   onPasswordChange(text) {
    this.props.passwordChanged(text);
  }
   onButtonPress() {
    const { email, password } = this.props;
     this.props.loginUser({ email, password });
  }
   onLoginFail() {
    this.setState({
      error: 'Authentication Failed.',
      loading: false
    });
  }
<<<<<<< HEAD

  renderButton() {
    if (this.props.loading) {
      return <Spinner size="large" />;
    }

    //()=>this.props.navigation.navigate('DrawerOpen')
    //this.onButtonPress.bind(this)

    return (
     <Button onPress={() => this.props.navigation.navigate('DrawerOpen')}>
=======
   renderButton() {
    if (this.props.loading) {
      return <Spinner size="large" />;
    }
     //()=>this.props.navigation.navigate('DrawerOpen')
    //this.onButtonPress.bind(this)
     return (
     <Button onPress={() => this.props.navigation.navigate('MapScreen')}>
>>>>>>> master
      Log in
      </Button>
    );
  }
<<<<<<< HEAD

  renderError() {
=======
   renderError() {
>>>>>>> master
    if (this.props.error) {
      return (
        <View style={{ backgroundColor: 'white' }}>
        <Text style={styles.errorTextStyle}>
        {this.props.error}
        </Text>
        </View>
      );
    }
  }
<<<<<<< HEAD

  render() {
    return (
      <Card>

      <LogoImageSection />

      <Header />

      <CardSection>
=======
   render() {
    return (
      <Card>
       <LogoImageSection />
       <Header />
       <CardSection>
>>>>>>> master
      <Input
      label="Email"
      placeholder="e-mail"
      onChangeText={this.onEmailChange.bind(this)}
      value={this.props.email}
      />
      </CardSection>
<<<<<<< HEAD

      <CardSection>
=======
       <CardSection>
>>>>>>> master
      <Input
      secureTextEntry
      label="Password"
      placeholder="password"
      onChangeText={this.onPasswordChange.bind(this)}
      value={this.props.password}
      />
      </CardSection>
<<<<<<< HEAD

      {this.renderError()}

      <ButtonSection>
=======
       {this.renderError()}
       <ButtonSection>
>>>>>>> master
      {this.renderButton()}
      </ButtonSection>
      </Card>
    );
  }
}
<<<<<<< HEAD

const styles = {
=======
 const styles = {
>>>>>>> master
  errorTextStyle: {
    fontSize: 20,
    alignSelf: 'center',
    color: 'red'
  }
};
<<<<<<< HEAD

const mapStateToProps = ({ auth }) => {
  const { email, password, error, loading } = auth;

  return { email, password, error, loading };
};

export default connect(mapStateToProps, {
  emailChanged, passwordChanged, loginUser
})(LoginForm);
=======
 const mapStateToProps = ({ auth }) => {
  const { email, password, error, loading } = auth;
   return { email, password, error, loading };
};
 export default connect(mapStateToProps, {
  emailChanged, passwordChanged, loginUser
})(LoginForm);
>>>>>>> master
