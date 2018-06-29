import React from 'react';
import { View, Image } from 'react-native';

const LogoImageSection = (props) => {
  const { ImageStyle, viewStyle } = styles;

  return (
    <View style={viewStyle}>
      <Image
        style={ImageStyle}
        source={require('../../images/SpotMeLogoTransparent.png')}
      />
    </View>
  );
};

const styles = {
  viewStyle: {
    backgroundColor: '#1DE0AB',
    justifyContent: 'center',
    alignItems: 'center',
    //height: 60,
    // paddingTop: 15,
    // // shadowColor: '#000',
    // // shadowOffset: { width: 0, height: 2 },
    // // shadowOpacity: 0.2,
    // elevation: 2,
    // position: 'relative'
  },
  ImageStyle: {
    width: 160,
    height: 130
  },
};

export { LogoImageSection };
