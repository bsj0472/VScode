import React, {Component} from 'react';
import {View, Text, StyleSheet, Button, TouchableOpacity} from 'react-native';

export default class MainComponent extends Component{
    render(){

        //JSX컴포넌트 객체를 변수에 저장 [""이 없음]
        const aaa= <Text>Nice</Text>;

        //여러컴포넌트를 가진 View를 저장
        const bbb= <View style={ {marginTop:16,} }>
                        <Text>Hello React Native</Text>
                        <Button title="button"></Button>
                   </View>;
                   
        //배열데이터- 배열의 요소값이 문자열이 아니라 XML컴포넌트        
        const arr=[bbb, bbb, aaa]; 

        // key속성이 있는 컴포넌트를 요소를 가지는 배열
        const arr2=[
            <View key="aa"><Text>aaa</Text></View>,
            <View key="bb"><Text>bbb</Text></View>,
            <View key="cc"><Text>ccc</Text></View>
        ];

        // 안드로이의 ListView처럼 대량의 데이터를 보여주는 연습
        // 대량의 데이터 배열
        const datas= ["aaa","bbb","ccc","ddd","eee"];

        return (
            <View style={ style.root} >
                <Text style={ style.title }>List Layout TEST</Text> 

                {/* JSX언어의 XML영역안에서 JS변수를 사용할 수 있음 */}
                {/* { aaa }
                { bbb }
                { bbb } */}

                {/* 배열의 변수명을 쓰면 자동으로 요소값들이 차례로 출력됨*/}
                {/* { arr } */}

                {/* 위 배열값을 자동으로 출력해주는 기능을 사용하면 경고가 보임*/}
                {/* 각 요소들(컴포넌트)을 구별하는 식별자값을 지정하는 key 속성이 요구됨 */}
                {/* key속성이 부여된 컴포넌트를 가진 배열 */}
                { arr2 }

                {/* XML컴포넌트를 변수에 넣는 것이 아니라 */}
                {/* 함수의 리턴값으로 컴포넌트 추가 가능 */}
                { this.showComponent() }
                { this.showComponent() }

                {/* 파라미터 전달하는 메소드호출 */}
                { this.showComponent2('sam', 'click me', 'green') }
                { this.showComponent2('robin', 'press me', 'orange') }

                {/* 대량의 데이터를 화면에 보여주기 */}
                {/* 대량의 데이터를 개수만큼 반복하면서 */}
                {/* 컴포넌트로 변환해주는 코드 */}
                { 
                    datas.map((value, index, array )=>{
                        return (                            
                            // map()에 의해 발동하는 콜백함수를 익명함수로 만들면.. 이 함수안에서 this. 키워드가 함수객체 본인을 지칭함.
                            // 그래서 map()에 지정하는 콜백함수는 가급적 화살표함수 표기법 사용을 권장!
                            <TouchableOpacity key={index} style={style.item} onPress={  ()=>{this.clickItem2(index);}  }>
                                <Text>{value}</Text>                                
                            </TouchableOpacity>
                        );                     
                    })
                }

            </View>
        );
    }
    

    //아이템클릭에 반응하는 메소드
    clickItem= ()=>{
        //alert(index); //이 메소드를 발동한 컴포넌트의 index를 알수없음
        //index번호를 알고 싶다면 파라미터로 전달받아야 함.
    }

    //index번호를 전달받는 메소드
    clickItem2= (index)=>{
        alert("index : " + index);
    }

    //컴포넌트를 리턴하는 메소드
    showComponent(){
        return <Text>show component</Text>;
    }

    //파라미터 전달하는 메소드
    showComponent2(msg, title, color){
        return <View style={{marginTop:16}}>
                   <Text> show {msg} </Text>
                   <Button title={title} color={color}></Button>
               </View>
    }

}

//스타일시트 객체
const style= StyleSheet.create({
    root:{flex:1, padding:16},
    title:{fontSize:24, fontWeight:'bold'},

    // 리스트의 아이템뷰 1개의 모양스타일
    item:{
        borderWidth:1,
        borderRadius:8,
        padding:16,
        margin:8
    }
});
