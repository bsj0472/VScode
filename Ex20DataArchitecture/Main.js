
// RN의 단방향 데이터 흐름 구조 : 자식컴포넌트는 부모컴포넌트에게 데이터를 줄수 없고 부모만 자식에게 데이터를 전달할 수 있음. propery(속성)을 통해
// 또한, 자식들끼리 서로 데이터를 주고 받을 수 없음.
// 그렇기에 컴포넌트간에 데이터를 전달하고 싶다면 부모컴포넌트의 state에 데이터를 저장하고 자식들은 props를 통해 전달받아 값을 공유함.

// 하지만, 앱의 규모가 커져 컴포넌트의 중첩이 많아져서 부모-자식-손주-증손주-고손주..등으로 컴포넌트 단계가 많아지면
// 부모의 state값을 고손주까지 전달하기 위해 props를 통해 전달->전달->전달->전달 을 해야 하는 상황이 생김.

// 초기개발단계에서는 크게 문제 없다고 느껴지지만 조금의 변경만 생겨도 그 수정과정이
// 매우 번거롭고 난해하며 어느 단계에서 변경되었는지 알수도 없음.
// 그래서 앱에서 Data를 어떻게 제어하는지에 대한 고민이 필요하게 됨.

// 그 고민의 결과로 facebook팀이 Flux 패턴이 도입됨.
// 일종의 전역변수저장 공간(Store라고 부름)을 만들고 모든 컴포넌트들이 이 공간을
// 접속해여 데이터를 취급하는 구조의 패턴
// 이 Flux패턴을 구현한 라이브러리 Redux 임.
// Redux 라이브러리는 매우 유명하고 많이 사용되지만 초기학습과정이 어려움
// RN에서는 이 Redux를 대신하여 Context API를 만들었음.

// 우선, Flux패턴을 사용하지 않았을때를 먼저 경험해보기

import React, {Component} from 'react';
import {View, Text, Button} from 'react-native';

export default class Main extends Component{

    //Main클래스의 state
    state= { data: "Hello",  }

    render(){
        return (
            <View style={{flex:1, padding:16,}}>
                <Text>Main클래스의 state Data : {this.state.data}</Text>

                {/* 자식컴포넌트 */}
                <First data={this.state.data} onPress={this.changeData}></First>
            </View>
        )
    }

    changeData=()=>{
        this.setState({data:"Nice"});
    }

}//Main

//Main의 자식컴포넌트
class First extends Component{
    render(){
        return (
            <View style={{padding:16, backgroundColor:'lightgreen'}}>
                <Text>Main클래스로 부터 받은 props Data:{this.props.data}</Text>

                {/* First의 자식 컴포넌트 */}
                {/* 부모로 부터 받은 changeData함수를 Second에게 전달 */}
                <Second data={this.props.data} onPress={this.props.onPress}></Second>

                <Button title="button" color="indigo" onPress={this.props.onPress}></Button>
            </View>
        )
    }
}//First


//First의 자식 - Main의 손주 컴포넌트
class Second extends Component{

    //Text컴포넌트의 글씨를 변경하기 위해 props ==> state
    state= { data: this.props.data,  }

    render(){
        return (
            <View style={{padding:16, backgroundColor:'blue',}}>
                {/* <Text style={{color:'white', marginBottom:8,}}>First로부터 전달받은 props Data: {this.props.data}</Text> */}
                <Text style={{color:'white', marginBottom:8,}}>First로부터 전달받은 props Data: {this.props.data}</Text>

                {/* 버튼클릭으로 위 Text글씨 바꾸기 */}
                {/* First로 부터 전달받은 Main컴포넌트의 changeData함수를 버튼 콜백으로 적용 */}
                <Button title="change data" color="orange" onPress={this.props.onPress}></Button>

                {/* 이렇게 부모가 자식에게로 데이터를 전달->전달->전달... 하는 형태를 */}
                {/* 데이터의 단반향 흐름이라고 표현함. */}
                {/* 변수가 최상위 부모에 있기에 어디서든 변경하면 모두다 같이 일괄적용되는 장점 */}
                {/* 단계가 많아지면 유지보수가 매우 난해하고 복잡함 */}
                {/* 이를 개선하기 위해 Flux패턴을 만들어 냄. */}
                {/* 이 패턴을 구현한 라이브러가 redux인데 RN팀에서 redux라이브러리를 참고하여 */}
                {/* 새로운 Context API 를 개발하였음. */}

            </View>
        )
    }

    clickBtn= ()=>{
        //Text컴포넌트가 보여주는 글씨를 가진 변수 this.props.data 변경
        //this.props.data= "nice"; //this.props 멤버는 상수임. 값 변경 불가
        //this.setProps(); //이런 메소드도 없음
        //글씨변경을 하기 위한 해결방법
        //props값을 state에 대입하여 보여주기
        this.setState({data:"Nice"});
    }

}



