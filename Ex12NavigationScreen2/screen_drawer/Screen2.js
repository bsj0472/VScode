import React, {Component} from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';

export default class Screen2 extends Component{
    render(){
        return (
            <View style={style.root}>
                <Text style={style.plainText}>SCREEN TWO</Text>

                {/* Drawer를 버튼클릭으로 열수있도록 */}
                <Button title="toggle drawer" onPress={ ()=> this.props.navigation.toggleDrawer() }></Button>
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