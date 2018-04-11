import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

const CustomedButton = ({ onPress, children }) => {
    //children = props.children
    // onPress = props.onPress
    const { buttonStyle, textStyle } = styles;
    return (
        <TouchableOpacity onPress={onPress} style={buttonStyle}>
            <Text style={textStyle}>
                {children}
            </Text>
        </TouchableOpacity>
    );
}; 

const styles = {
    textStyle: {
        alignSelf: 'center', //manipulate text and put it in the middle
        color: '#007aff',
        fontSize: 16,
        fontWeight: '600',
        paddingBottom: 10,
        marginTop: 5
    },
    buttonStyle: {
        height:40,//changed to adapted to login form on Mon Mar 12
        width :100,
        backgroundColor: '#fff',
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#007aff',
        marginLeft: 5,
        marginRight: 5
    }
};

export {CustomedButton};
