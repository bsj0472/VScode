import React, {Component} from 'react';
import {View, Text, Button} from 'react-native';

// ## Context : 앱 전체에서 참조할 수 있는 전역변수를 만들 수 있는 React API 

// Context객체 만들기 - 다른 문서에서 사용할 수 있도록 export
export const MyContext= React.createContext();

import Second2 from './Second2';

export default class Main extends Component{

    //Main의 state 데이터
    state= { data: "Hello",};

    //state값을 변경하는 메소드
    changeData= ( msg )=>this.setState({data:msg});

    render(){
        return (
            // 자식에게 프로퍼티로 데이터를 직접 전달하지 않고 
            // 데이터를 제공해주는 객체(Provider)를 만들어서 자식들을 감싸기
            <MyContext.Provider
                //자식들에게 제공할 value들을 지정
                value={
                    {
                        data: this.state.data,    //데이터
                        changeData: this.changeData, //메소드 
                    }
                }>

                {/* Provider안에 있는 자식 컴포넌트들은 어디서든 Provider가 제공한 value를 사용할 수 있음. */}
                <View style={{flex:1, padding:16,}}>
                    <Text>Main의 Data : {this.state.data}</Text>

                    {/* 자식컴포넌트 - Data전달 없이 */}
                    <First></First>
                    <First></First>
                </View>

            </MyContext.Provider>


            
        )
    }
}//Main


//자식 컴포넌트
class First extends Component{
    render(){
        return (
            <View style={{margin:16, padding:8, backgroundColor:'lightgreen'}}>
                <Text>First Component</Text>

                {/* 손주 컴포넌트 - Data전달 없음*/}
                <Second></Second>

                {/* 다른 js문서의 손주 컴포넌트 - Data전달 없음* [import] */}
                <Second2></Second2>
            </View>
        )
    }
}//First

//손주 컴포넌트
class Second extends Component{
    render(){
       return (

            // First로부터 받은 props 없음!!
            // 그럼에서 Main의 MyContext.Provider가 제공하는 value값을 소비할 수 있음
            <MyContext.Consumer>
                {/* Consumer컴포넌트 안에 이 컴포넌트가 보여줄 뷰를 리턴하는 함수 1개를 선언 */}
                {/* 이 선언한 함수를 Consumer컴포넌트가 자동으로 실행시키셔 뷰를 화면에 리턴시킴 */}
                {/* 이 함수의 파라미터로 Provider가 제공한 value객체가 전달됨 */}
                {
                    
                    // ( value )=>{
                    //     return (
                    //         <View style={{margin:16, padding:8, backgroundColor:'blue'}}>
                    //             <Text style={{color:'yellow'}}>Second컴포넌트 - Main의 Data : {value.data}</Text>
                    //         </View>
                    //     )
                    // }

                    //축약형 --  {}안 실행문이 return 1개이므로 생략                    
                    ( value )=>(
                            <View style={{margin:16, padding:8, backgroundColor:'blue'}}>
                                <Text style={{color:'yellow'}}>Second컴포넌트 - Main의 Data : {value.data}</Text>

                                <Button title="글씨 변경하기" color="orange" onPress={  ()=>{ value.changeData('Nice'); } }></Button>
                            </View>
                            )
                    
                }
            </MyContext.Consumer>

           
       )
    }
}
