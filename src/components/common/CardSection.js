import React from 'react';
import { View } from 'react-native';

//this component is not about fetching data or 
// need a life cycle event with state so we 
// will use functional component


const CardSection = (props) => {
    // props.children is the props that it get from
        // the components that import and use CardSection
        // Note: whatever components pass a prop to CardSection will 
        // be its children that you can reference by props.children
        //{[styles.containerStyle, props.style]} - props on the right will overwrite one on the left if it is being passed
    return (
        <View style={[styles.containerStyle, props.style]}>
        {props.children}
        </View>
    );
};

const styles = {
    containerStyle: {
        height: 40,
        borderWidth: 1,
        paddingBottom: 5, 
        marginTop: 20,
        backgroundColor: '#fff',
        justifyContent: 'center',
        flexDirection: 'row',
        borderColor: '#ddd',
    }
};

export {CardSection};
