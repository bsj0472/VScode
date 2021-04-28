import React, {Component} from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';

export default class Main extends Component{

    //4)실습에서 사용하는 멤버
    state={
        msg:"Hello world",
    }

    render(){
        return (
            <View style={style.root}>
                {/* 새로운 Custom Component를 만드는 2가지 방법 */}
                {/* 1. stateful Component : Component 클래스를 상속해서 만드는 일반적인 Component */}
                {/* 2. stateless Component : 마치 함수를 만드는 방식처럼 만들어지는 Component [함수형 컴포넌트라고 부름] */}

                {/* 1) 두 컴포넌트의 차이를 알보기 위해 먼저 익숙한 stateful 컴포넌트 만들기 */}
                <MyComponent></MyComponent>

                {/* 2) stateless 컴포넌트 [함수형 컴포넌트] */}
                {/* 함수명을 마치 컴포넌트명처럼 사용할 수 있도록 만든 기법 */}
                <MyComponent2></MyComponent2>    
                <MyComponent3></MyComponent3>
                <MyComponent4></MyComponent4>

                {/* 3) state는 없지만 props는 가질 수 있음 */}
                {/* 즉, 컴포넌트를 사용할 때 데이터 전달 가능 */}
                <My5 data="aaa"></My5>

                {/* 3.1) 함수형 컴포넌트에 프로퍼티 전달  */}
                <My6 data="bbb"></My6>
                {/* { My6({date:"bbb"}) } */}

                {/* 3.2) 여러개의 속성도 전달 가능 */}
                <My7 data="ccc" title="sam"></My7>

                {/* 3.3) 구조분해할당으로 프로퍼티 받기 */}
                <My8 data="ddd" title="robin"></My8>
                <My9 data="eee" title="hong"></My9>

                {/* 4) 컴포넌트간의 제어 */}
                <AAA onPress={this.changeMessage}></AAA>
                <BBB msg={this.state.msg}></BBB>
            </View>
        );
    }

    changeMessage= ()=>this.setState({msg:"Nice to meet you."});

}


//4)
const AAA= (props)=>{
    return (
        <View style={{padding:16,}}>
            <Button title="change" onPress={props.onPress}></Button>
        </View>
    );
}

const BBB= ( {msg} )=>{ //구조분해할당
    return (
        <View style={{padding:16}}>
            <Text style={{fontWeight:'bold'}}>message : {msg}</Text>
        </View>
    );
}



const My9= ({data,title})=><Text style={style.text}>My9 : {data} , {title}</Text>

//3.3)
const My8= (  {data, title}   )=>{
    return <Text style={style.text}>My8 : {data} , {title}</Text>
}

//3.2) 
const My7= (props)=>{
    return <Text style={style.text}>My7 : {props.data} , {props.title}</Text>
}

//3.1) props를 받는 함수형 컴포넌트[stateless]
// Component를 상속받지 않았기에 this.props라는 멤버가 없음
// 이 함수형컴포넌트를 사용하는 쪽에서 지정한 속성[data]는?
// 함수의 ()안에 파라미터로 속성들을 가진 객체가 전달됨
const My6= ( props )=>{
    return (
        <View>
            <Text style={style.text}>My6 : { props.data }</Text>
        </View>
    );
}



//3) 일반적인 stateful 컴포넌트에 프로퍼티 전달하기
class My5 extends Component{    
    render(){
        return (
            <View>
                {/* 컴포넌트가 사용될때 전달된 속성(프로퍼티)는 자동으로 */}
                {/* props라는 특별한 멤버변수에 전달됨 */}
                <Text style={style.text}>My5 : {this.props.data} </Text>
            </View>
        );
    }
}



//2) 함수형 컴포넌트 [stateless]
const MyComponent2= ()=>{ 
    //클래스가 아니기에 생성자 와 state멤버를 가질 수 없음
    // constructor(){
    //     this.state={};
    // }

    // 일반적인 컴포넌트 만드는 방법에 비해 class 키워드와 render()를 명시하지 않기에 
    // 좀더 간결하게 컴포넌트를 만들 수 있다는 장점이 있음.
    return (
        <View>
            <Text style={style.text}>Nice MyComponent2</Text>
        </View>
    );
}

//2.1) 익명함수로 stateless 컴포넌트 만들 수 있음
const MyComponent3= function(){
    return <Text style={style.text}>Good Component</Text>
}

//2.2) 선언적함수로도 만들 수 있음
function MyComponent4(){
    return <Text style={style.text}>Bad Component</Text>
}


//1) 일반적인 stateful 컴포넌트 클래스
class MyComponent extends Component{
    state={}
    render(){
        return (
            <View>
                <Text style={style.text}>Hello MyComponent</Text>
            </View>
        );
    }
}


const style= StyleSheet.create({
    root:{flex:1, padding:16,},
    text:{margin:8, padding:8},
});