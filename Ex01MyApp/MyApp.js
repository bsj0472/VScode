//리액트 라이브러리 사용
import React, {Component} from 'react'; 
import {Text, View, Button, StyleSheet, Image, requireNativeComponent} from 'react-native';

//리액트에서는 Component클래스를 상속받은 클래스들만이 
//화면에 보여질 수 있음.(마치. Android의 Activity or View와 비슷)
class MyApp extends Component{
    //리액트의 Component클래스가 화면에 보여줄 뷰를
    //그려내는 작업 메소드
    //이 메소드 안세서 JSX언어로 뷰를 설계하고 이를 return해 줌
    render(){

        //지역변수
        let name= "sam";
        let btnTitle="click me";

        //안에 여러컴포턴트를 놓고싶다면
        // ()로 묶어서 표기
        //컴포넌트는 return으로 한개의 컴포넌트만 가능
        //만약 여러개를 하려면
        //컴포넌트들을 자식으로 가지는 뷰그룹같은 컴포넌트
        //필요(마치, 안드로이드이 LinearLayout같은)        
        //그 역할의 컴포넌트가 View (기본 배치스타일 : flex)        
        return (
            // JSX는 JS와 XML을 같이 사용가능함
            // XML안에서 JS의 변수나 함수를 사용해보기
            // XML안에서 {}사용하면 변수, 함수 사용 가능
            <View style={  style.root  }>
                {/* 주석은 이렇게... */ }
                {/* 리액트에서는 스타일을 style속성으로 지정 */}
                {/* 리액트는 이 style속성의 값으로 객체를 요구함 */}
                {/* 원하는 스타일속성들을 객체로 만들어서 설정 */}
                <Text style={ style.titleText }>Hello {name}  </Text>
                <Text style={ style.text }>Nice to meet you.</Text>

                {/* Button컴포넌트는 style속성이 없음. 즉, 스타일 적용 불가 */}
                <Button title={ btnTitle } style={btnStyle}></Button>

                {/* 억지로 Button에 스타일을 적용하고 싶다면 .. 예, 마진설정*/}
                {/* Button을 감싸는 View를 만들고 그 View에 스타일 적용 */}
                <View style={{margin:16, width:150}}>
                    <Button title="button" color="orange"></Button>
                </View>

                {/* 이미지 컴포넌트 */}
                {/* source속성에 png이미지파일을 객체로 로드하여 설정 */}                
                <Image source={ require('./images/moana01.jpg') } style={{margin:4, flex:1, resizeMode:'cover', width:null}}></Image>

            </View>            
        );
        
    }

}// MyApp class

function aaa(){
    return 10;
}

var a;
a= aaa;
a();


//전역의 영역
//스타일 객체 작성
//1) 글씨 색상 스타일 객체 (멤버변수명이 CSS의 속성들과 흡사함)
const textStyle={
    color:"red",
    fontWeight:"bold",
    fontSize: 20, //기본단위 dp
    margin:16,
};

//2) 전체 View의 스타일 작업
const rootContainer={
    backgroundColor:"#AAFFCC",
    // View의 세로 사이즈는 기본 wrap_content
    //height:"100%",
    //리액트는 flex스타일을 기본으로 적용함
    //css의 flex-grow속성 이용하여 사이즈 지정을 권장
    //다른 요소들과의 비교를 통해 사이즈 결정(layout_weight와 비슷)
    flex:1,
    padding:16,
};

//3)일반 글씨 스타일
const plainText={
    margin:8,
    color:'#333333',
}

//4)버튼 스타일 객체
const btnStyle={
    margin: 40,
    color:'#FF0000',
}


//위 스타일 객체들 여러개를 개별로 만들다 보니
//나중에 관리하기 어렵다는 문제점 우려
//한번에 여러개의 스타일 객체를 가지도록 하는 클래스 사용 권장
const style= StyleSheet.create({
    root:{
        flex:1,
        padding:16
    },
    titleText:{
        color:'red',
        fontSize:20,
        fontWeight:'bold'
    },
    text:{
        margin:8,
        color:'#333333',
    }
});




//이 MyApp클래스를 다른 js문서에서 import할 수 있도록
//export 설정 [default: 이 문서의 대표 export]
export default MyApp;