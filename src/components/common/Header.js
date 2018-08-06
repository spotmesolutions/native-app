// Import libraries for making a Component
import React from 'react';
import { Text, View } from 'react-native';
 // Create a Component
const Header = (props) => {
  const { SpotMeStyle, viewStyle, SolutionStyle } = styles;
   return (
    <View style={viewStyle}>
      <Text style={SpotMeStyle}>SpotMe</Text>;
      <Text style={SolutionStyle}>S  o  l  u  t  i  o  n</Text>;
    </View>
  );
};
 const styles = {
  viewStyle: {
    backgroundColor: '#1DE0AB',
    justifyContent: 'center',
    alignItems: 'center',
    //height: 60,
    paddingTop: 15,
    // shadowColor: '#000',
    // shadowOffset: { width: 0, height: 2 },
    // shadowOpacity: 0.2,
    elevation: 2,
    position: 'relative'
  },
  SpotMeStyle: {
    fontSize: 50,
    marginBottom: 20,
    marginTop: 10,
    fontWeight: 'bold'
  },
  SolutionStyle: {
    fontSize: 20,
    fontWeight: '300',
    marginBottom: 40,
  }
};
 // Make the component available to other parts of the app
export { Header };