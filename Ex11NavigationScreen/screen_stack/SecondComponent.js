import React,{Component} from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';

export default class SecondComponent extends Component{

    constructor(){
        this.props.navigation.setOptions();
    }

    render(){

        // Home으로 부터 전달받은 데이터객체를 구조분해 할당
        const {name, age}= this.props.route.params;

        return (
            <View style={style.root}>
                <Text style={style.plainText}>Second Screen</Text>

                {/* Home화면으로 돌아가는 버튼 */}
                <Button title="Go to the Home screen" color="indigo" onPress={ ()=>this.props.navigation.navigate('Home') }></Button>

                {/* navigate()는 특정컴포넌트로 이동하라는 메소드임. */}
                {/* 이전 컴포넌트로 이동하라는 기능 메소드도 존재함 */}
                {/* goBack() */}
                <Button title="Go Back" color="orange" onPress={ ()=>this.props.navigation.goBack() }></Button>

                {/* push() : 기존 컴포넌트를 또 다시 만들어 이동하고 싶을때 사용 */}
                <Button title="Go to Second again.." color="green" onPress={()=>this.props.navigation.push('Second')}></Button>

                {/* replace() : 현재컴포넌트를 finish하면서 화면 전환 [HomeComponent에서 실습]*/}

                {/* navigate()로 화면전환시 두번째 파라미터를 통해 데이터객체가 전달되었다면 */}
                {/* 데이터를 전달받은 Component는 props에 자동으로 route.params 라는 변수에 전달된 데이터 객체를 받음 */}
                <Text style={{padding:16, color:'blue', fontWeight:'bold'}}>{ this.props.route.params.name } , {this.props.route.params.age}</Text>
                {/* 전달받은 데이터를 쓰기위한 코드가 길어서 대부분 '구조분해할당'기법을 사용함 */}
                <Text style={{padding:16, color:'blue', fontWeight:'bold'}}>{ name } , {age}</Text>

                {/* Headr bar 옵션 설정 */}
                {/* 1. StackNavigator가 있는 Main.js에서 설정 */}

                {/* 2. 이 컴포넌트 .js 안에서 옵션작업 설정 */}
                {/* 버튼클릭시에 제목줄 글씨 변경 */}
                <Button title="change title" onPress={()=> this.props.navigation.setOptions({title:'두번째 화면'}) }></Button>
                {/* 혹시 버튼 없이 이 컴포넌트가 시작할때 옵션값을 동적으로 변경하고 싶다면? */}
                {/* 이 컴포넌트의 생성자함수[constructor()]에서는 this.props.navigation을 인식하지 못함 */}
                {/* 그래서 이 컴포넌트의 생명주기 메소드에서 옵션작업을 함 */}

            </View>
        );
    }

    //컴포넌트가 생성된 후(생성자 함수 실행된 후) 자동으로 실행되는 라이프사이클 콜백메소드
    //render()메소드 전에 호출됨
    componentDidMount(){
        this.props.navigation.setOptions({title:'Good'});
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