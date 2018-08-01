import React, {Component} from 'react';
import {Text, View, Button } from 'react-native';

export default class MenuScreen extends Component{
    render(){
        return (
            <View style = {styles.containerStyle}>
            <Text>* Here is the latest Garage Info* </Text>
            <Button
            onPress={() => this.props.navigation.navigate('DrawerOpen')}
            title="Back"
            />
            </View>
        );
    }
}

const styles = {
    containerStyle:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
}