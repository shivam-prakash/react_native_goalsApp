import React from 'react';
import {View,Text,StyleSheet,TouchableOpacity} from 'react-native';

const GoalItem=props=>{
    console.log(props);
    return(
        <TouchableOpacity onPress={props.pressHandler}>
            <View 
            style={styles.listItem}>
        <Text>{props.title}</Text> 
            
        </View>
        </TouchableOpacity>
    );
};

const styles=StyleSheet.create({

    listItem: {
        padding: 10,
        backgroundColor: '#ccc',
        borderColor: 'black',
        borderWidth: 1
      },
      
});
export default GoalItem;