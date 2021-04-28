import React, {Component} from 'react';
import {View, Button} from 'react-native';

export default class AAA extends Component{
    render(){
        return (
            <View style={{margin:4}}>
                <Button title="change text" onPress={ this.props.onPress }></Button>
            </View>
        );
    }
}