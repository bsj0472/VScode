import React, {Component} from 'react';
import {View, Button, TouchableHighlight} from 'react-native';

export default class MyComponent5 extends Component{
    render(){
        return (
            <View style={{margin:16}}>
                {/* 버튼에 적용할 속성을 props로 받아올때 */}
                {/* 속성값이 여러개면 직접 하나씩 설정하기 번거로움 */}
                {/* 전달받은 props를 한방에 적용하기 - Spread(전개) 연산자(...연산자) */}
                <Button {...this.props} ></Button>
            </View>
        );
    }
}