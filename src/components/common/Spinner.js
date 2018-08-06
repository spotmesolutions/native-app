import React from 'react';
import { View, ActivityIndicator } from 'react-native';
<<<<<<< HEAD

const Spinner = ({ size }) => {
=======
 const Spinner = ({ size }) => {
>>>>>>> master
  return (
    <View style={styles.spinnerStyle}>
      <ActivityIndicator size={size || 'large'} />  //large as default
    </View>
  );
};
<<<<<<< HEAD

const styles = {
=======
 const styles = {
>>>>>>> master
  spinnerStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
};
<<<<<<< HEAD

export { Spinner };
=======
 export { Spinner };
>>>>>>> master
