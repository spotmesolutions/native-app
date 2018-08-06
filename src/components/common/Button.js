import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
<<<<<<< HEAD

const Button = ({ onPress, children }) => {
  const { buttonStyle, textStyle } = styles;

  return (
=======
 const Button = ({ onPress, children }) => {
  const { buttonStyle, textStyle } = styles;
   return (
>>>>>>> master
    <TouchableOpacity onPress={onPress} style={buttonStyle}>
      <Text style={textStyle}>
        {children}
      </Text>
    </TouchableOpacity>
  );
};
<<<<<<< HEAD

const styles = {
=======
 const styles = {
>>>>>>> master
  buttonStyle: {
    borderBottomWidth: 3,
    //padding: 5,
    backgroundColor: '#1DE0AB',
    //justifyContent: 'flex-start',
    flexDirection: 'row',
    borderColor: '#000000',
    position: 'relative',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 3,
    borderRadius: 20,
    height: 40,
    width: 150,
    elevation: 1,
    // marginLeft: 20,
    // marginRight: 20,
    // marginTop: 20,
  },
  textStyle: {
    alignSelf: 'center',
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
    //paddingTop: 10,
    //paddingBottom: 10
  }
};
<<<<<<< HEAD

export { Button };
=======
 export { Button };
>>>>>>> master
