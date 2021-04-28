import React, {Component} from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';

// 다른 js에서 사용하도록 export
export default class MyComponent3 extends Component{
    render(){
        return (
            <View style={ style.root }>
                <Text>MyComponent #3</Text>
                {/* 메소드도 props로 전달받을 수 있음 */}
                <Button onPress={ this.props.callback } title={this.props.title}></Button>
            </View>
        );
    }

}

const style= StyleSheet.create({
    root:{ padding:16},
});