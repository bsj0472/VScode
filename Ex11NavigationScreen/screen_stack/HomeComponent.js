import React,{Component} from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';

export default class HomeComponent extends Component{
    render(){
        return (
            <View style={style.root}>
                <Text style={style.plainText}>Home Screen</Text>

                {/* 화면(screen:컴포넌트)이동을 위한 버튼 */}
                <Button title="Go to the Second screen" onPress={this.gotoSecond}></Button>
            </View>
        );
    }

    //버튼클릭할 때 실행될 콜백메소드
    gotoSecond= ()=>{
        // react navigation에서 네이케이팅하는 코드
        // [Navigator에 의해 보여지는 컴포넌트는 props로 navigation객체를 자동으로 전달받음.]
        // [즉, this.props객체의 멤버로 navigation객체가 존재함]
        //this.props.navigation.navigate('Second');//전환할 screen의 name속성값을 파라미터로 전달

        //현재 컴포넌트를 finish하면서 screen전환
        //this.props.navigation.replace('Second');

        //화면전환시에 데이터 전달하기 [android의 Intent에서 Extra Data와 비슷]
        // navigate()메소드의 두번째 파라미터에 데이터를 가진 객체를 전달[name, age를 멤버로 가진 객체 전달해보기]
        // let data={name:"sam", age:20};
        this.props.navigation.navigate('Second', {name:"sam", age:20});

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