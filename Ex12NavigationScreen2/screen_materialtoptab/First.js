import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default class First extends Component{
    render(){
        return (
            <View style={style.root}>
                <Text style={style.plainText}>First TAB</Text>
            </View>
        );
    }
}

const style= StyleSheet.create({
    root:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
    },
    plainText:{
        padding:8,
    }
});