import React from 'react';
import { View } from 'react-native';
<<<<<<< HEAD

const ButtonSection = (props) => {
=======
 const ButtonSection = (props) => {
>>>>>>> master
  return (
      <View style={styles.containerStyle}>
        {props.children}
      </View>
  );
};
<<<<<<< HEAD

const styles = {
=======
 const styles = {
>>>>>>> master
  containerStyle: {
    borderBottomWidth: 3,
    padding: 5,
    backgroundColor: '#fff',
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
    marginLeft: 20,
    marginRight: 20,
    marginTop: 20,
    //justifyContent: 'flex-start',
  }
};
<<<<<<< HEAD

export { ButtonSection };
=======
 export { ButtonSection };
>>>>>>> master
