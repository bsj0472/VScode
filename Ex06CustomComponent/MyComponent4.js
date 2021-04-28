import React, {Component} from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';

// 다른 js에서 사용하도록 export
export default class MyComponent4 extends Component{

    // props가 전달되지 않았을때를 대비하기 - defaultProps
    // *주의* : static 을 사용할때는 save를 통한 hot-reload 기능말고
    // 다시 run-android를 해야함!
    static defaultProps={
        title : 'untitled',
        color : 'orange',
        callback : ()=>{}         //아무 동작없는 함수를 기본값으로 부여
    }

    render(){
        return (
            <View style={ style.root }>
                <Text>MyComponent #4</Text>
                <Button onPress={ this.props.callback } title={this.props.title} color={this.props.color}></Button>
            </View>
        );
    }

}

const style= StyleSheet.create({
    root:{ padding:16},
});