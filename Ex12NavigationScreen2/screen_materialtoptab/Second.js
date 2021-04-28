import React, {Component} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

export default class Second extends Component{
    render(){
        return (
            <View style={style.root}>
                <Text style={style.plainText}>Second TAB</Text>
            </View>
        );
    }

    //컴포넌트가 시작할때 자동으로 호출되는 라이프사이클 콜백메소드
    componentDidMount(){        
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