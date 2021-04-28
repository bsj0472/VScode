import React, {Component} from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import AAA from './AAA';
import BBB from './BBB';
// 다른 js의 컴포넌트클래스를 사용하고자 한다면 import
import MyComponent3 from './MyComponent3';
import MyComponent4 from './MyComponent4';
import MyComponent5 from './MyComponent5';

export default class MainComponent extends Component{

    //화면에 영향을 주는 특별한 멤버변수
    state={
        msg:"Hello",
    };

    render(){
        return (
            <View style={ style.root }>
                <Text>Hello world</Text>

                {/* CustomComponent 사용 */}
                {/* <MyComponent></MyComponent>
                <MyComponent2 aaa="robin"></MyComponent2>
                <MyComponent2 aaa="hong"></MyComponent2> */}

                {/* 다른 js의 컴포넌트 사용 */}
                {/* <MyComponent3 title="first" callback={this.clickBtn}></MyComponent3>
                <MyComponent3 title="second" callback={this.clickBtn}></MyComponent3> */}

                {/* 혹시 전달해야할 속성(title, callback)을 주지 않으면? */}
                {/* Button의 필수속성인 title을 전달하지 않아서 에러 */}
                {/* <MyComponent3></MyComponent3> */}

                {/* title만 주고 onPress에 적용할 메소드는 전달하지 않음 - 에러아님 : 필수속성이 아니어서 */}
                {/* <MyComponent3 title="third"></MyComponent3> */}

                {/* 실수로 컴포넌트를 사용할때 필수속성을 생략했을때 에러없이 그냥 기본설정값이 적용되도록*/}
                {/* <MyComponent4></MyComponent4>
                <MyComponent4 title="nice"></MyComponent4>
                <MyComponent4 title="good" color="green"></MyComponent4> */}

                {/* 여러속성을 한방에 적용하는 컴포넌트 */}
                {/* <MyComponent5 title="ALL" color="red" onPress={ this.clickBtn }></MyComponent5>
                <MyComponent5 title="AAA"></MyComponent5> */}


                {/* 서로 다른 컴포넌트들끼리 제어하고자 할때는 부모컴포넌트를 통해서 서로 제어해야 함.*/}
                {/* state와 props의 상호간의 연결에 대한 연습 */}
                <AAA onPress={ this.changeText }></AAA>
                <BBB msg={ this.state.msg }></BBB>
    
            </View>            
        );
    }

    //AAA컴포넌트에 onPress속성으로 전달될 메소드
    changeText=()=>{ 
        //this.state.msg의 문자열값을 보여주는 BBB컴포넌트에 값을 전달하는 것이
        //아니라.. 보여주는 변수값을 변경(자동 화면갱신되야 하기에 setState() )
        this.setState({msg:"Nice"});
     }

    //MyComponent3의 Button을 클릭했을 때 반응하는 메소드
    clickBtn= ()=>{
        alert('clicked!');
    }

}//MainComponent class..

//Custom Component 설계
class MyComponent extends Component{
    render(){
        return (
            <View style={ {margin:16} }>                
                <Text style={ {marginBottom:8} }>Hello sam!</Text>
                <Button title="click me"></Button>
            </View>
        );
    }
}

// 가만보니 글씨가 똑같은 "Hello sam!"
// MyComponent가 사용될때 보여줄 글씨를 전달받는 방법이 있음. -> props [property:속성]
class MyComponent2 extends Component{
    render(){
        return (
            <View style={ {margin:16} }>
                {/* MyComponent2를 사용할때 설정한 속성("aaa")은 자동으로 */}
                {/* 아주 특별한 변수 props에 자동 적용됨 */}
                <Text style={ {marginBottom:8} }>Hello { this.props.aaa }!</Text>
                <Button title="click me"></Button>
            </View>
        );
    }
}


// 스타일객체
const style= StyleSheet.create({
    root:{
        flex:1,
        padding:16,
    }
});