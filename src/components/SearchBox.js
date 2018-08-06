import React from "react";
import {Text,Dimensions} from "react-native";
import { View, InputGroup, Input } from "native-base";

import Icon from "react-native-vector-icons/FontAwesome";

// component for search box within google map
 const SearchBox = ({getInputData, getAddressPredictions,inputData})=> {
	function handleInput(text){
		getInputData(text);
		getAddressPredictions(text);
	}
		return(
			<View style={styles.searchBox}>
				<View style={styles.inputWrapper}>
					<InputGroup>
						<Icon name="search" size={15} color="#42b8ba"/>
                        <Input
                            
							style={styles.inputSearch}
							placeholder="Search Garage"
							onChangeText={handleInput.bind(this)}
							value={inputData}
						/>
					</InputGroup>
				</View>
				
			</View>

		);
};
var width = Dimensions.get("window").width; //full width
const styles = {
    searchBox:{
        top:0,
        position:"absolute",
        width:width
    },
    inputWrapper:{
        marginLeft:15,
        marginRight:10,
        marginTop:10,
        marginBottom:0,
        backgroundColor:"#fff",
        opacity:0.9,
        borderRadius:7
    },
    secondInputWrapper:{
        marginLeft:15,
        marginRight:10,
        marginTop:0,
        backgroundColor:"#fff",
        opacity:0.9,
        borderRadius:7
    },
    inputSearch:{
        fontSize:14
    },
    label:{
        fontSize:10,
        fontStyle: "italic",
        marginLeft:10,
        marginTop:10,
        marginBottom:0
    }
};

export default SearchBox;