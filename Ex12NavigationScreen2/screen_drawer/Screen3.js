import React, {Component} from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';

export default class Screen3 extends Component{
    render(){
        return (
            <View style={style.root}>
                <Text style={style.plainText}>SCREEN THREE</Text>

                {/* goBack()도 됨 */}
                <Button title="go back" onPress={()=>this.props.navigation.goBack()}></Button>
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