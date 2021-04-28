import React, {Component} from 'react';
import {View, Text} from 'react-native';

export default class BBB extends Component{
    render(){
        return (
            <View style={{margin:4}}>
                <Text style={{fontWeight:'bold'}}> {this.props.msg} </Text>
            </View>
        );
    }
}