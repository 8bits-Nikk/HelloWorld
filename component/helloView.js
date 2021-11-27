import React from "react";
import { StyleSheet,Text,View } from "react-native";

const HelloView = (props) =>{

    return(
        <View style = {styles.box}>
            <Text style = {styles.Text}>Hello {props.text}!!</Text>
        </View>
    )
}

const styles = StyleSheet.create ({
    box: {
        padding: 15,
        backgroundColor: '#fff',
        borderRadius: 10,
        marginTop: 15
    },
    Text:{
        color: '#ad4f5a',
        fontSize: 30,
        textAlign: 'center'
    }
});

export default HelloView;