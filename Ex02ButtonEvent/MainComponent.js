import React, {Component} from 'react';
import {View, Button, StyleSheet, Alert, Text, Image} from 'react-native';

class MainComponent extends Component{

    //Text컴포넌트가 보여줄 값을 가진 멤버변수[Property:프로퍼티(속성)]
    //let name;//ERROR - 멤버변수는 let키워드 사용 못함
    msg="Hello"; //멤버변수

    // 모든 컴포넌트 클래스가 기본으로 가지고 있는
    // 아주 특별한 멤버변수[화면에 영향을 미치는 값들]
    state={ 
        msg:"Hello",
        img: require("./images/moana01.jpg"),
    };

    //이 컴포넌트가 보여줄 콘텐츠를 리턴해주는 메소드
    render(){
        return (
            // <View style={ style.root }>
            //     {/* Button은 반드시 title속성으로 버튼에 보여줄 글씨를 지정 */}
            //     {/* onPress속성에 지정한 콜백함수는 ()호출문을 쓰면 안됨! */}
            //     {/* <Button title="button" onPress={ clickBtnFunction }></Button> */}

            //     {/* onPress콜백함수를 곧바로 삽입하기 */}
            //     {/* <Button title="button" onPress={ function(){ alert('pressed')} }></Button> */}
            //     {/* 화살표함수로 변경하면 {}도 생략가능 */}
            //     <Button title="button" onPress={ ()=>alert('pressed') }></Button>
            // </View>

            // RN에서 버튼이벤트 콜백함수는 가급적 전역함수보다는
            // 이 컴포넌트 클래스의 멤버메소드로 위치하는 것이 권장됨[유지보수 용이, 멤버변수제어가 가능]
            // <View style={ style.root }>
            //     {/* JS에서는 멤버를 사용할때 반드시 this. 키워드가 있어야 만 함!! */}
            //     <Button title="button" onPress={ this.clickBtn }></Button>                
            // </View>

            // 버튼클릭으로 Text컴포넌트 글씨 변경
            <View style={ style.root} >
                <Button title="button" onPress={ this.changeTextByState }></Button>

                {/* Text컴포넌트가 보여줄 내용물이 고정된 글씨가 아니라 바뀌게 되는 값이어서 변수로 지정 */}
                {/* <Text style={ style.text }> { text } </Text> */}
                {/* 멤버는 반드시 this. 키워드 필요 */}
                {/* <Text style={ style.text }> { this.msg } </Text> */}

                {/* 컴포넌트의 화면에 영향을 미치는 상태(state)값 변수 사용 */}
                <Text style={ style.text } > { this.state.msg } </Text>

                {/* 버튼클릭하여 이미지 변경 */}
                <Button title="change image" color="orange" onPress={ this.chageImage }></Button>
                {/* 이미지를 변경하려면 source속성의 값이 고정되지 않고 */}
                {/* 별도의 변수여야 하면 require()함수는 파라미터값으로 상수만 */}
                {/* 가능하기에 require()함수를 통으로 변수에 저장해서 변경되도록. */}
                <Image style={ style.img } source={ this.state.img }></Image>
            </View>
        );

        //종합해보면...
        //멤버변수 state를 이용하고..
        //멤버메소드는 화살표함수를 이용하면 실수를 적게하면서 앱 개발 가능
    }//render method..

    //멤버메소드 위치
    //이미지변경해주는 메소드
    chageImage= ()=>{
        //this.state.img= require('');
        //화면갱신이 자동으로 되려면..
        this.setState({img: require("./images/moana02.jpg")});
    }

    //state값을 변경해 주는 메소드
    changeTextByState=()=>{
        //state변수값 직접 변경
        //this.state.msg="Nice";
        //state 변수값을 직접 변경하면 자동 화면갱신 안됨.

        //자동 화면갱신이 되려면 setState()라는 메소드를 호출해서 변경해야만 함.        
        this.setState({msg:"Nice to meet you."});
    }


    //멤버변수를 변경해 주는 메소드
    chnageMemberTextByClickBtn(){
        //멤버변수 msg의 값 변경
        //this.msg= "Nice to meet you.";//ERROR : this.를 MainComponent클래스로 인지하지 않고 이 함수 본인을 지칭하게 됨        
    }

    //위 문제로 인해 멤버변수를 다루는 메소드는
    //반드시 '화살표 함수'표기법으로 만들어야 만 함
    changeMemberTextByClickBtnViaArrow= ()=>{
        //화살표함수는 객체가 아니므로 this.키워드가 이 컴포넌트클래스가 됨
        this.msg="Nice to meet you.";
        //alert(this.msg);
        //화면갱신을 안했기에 바뀐 변수값이 Text컴포넌트에 반영되지 않음
        //Component의 화면갱신(업데이트) 명령
        this.forceUpdate(); //re-render()메소드 호출
    }


    //글씨를 변경해 주는 메소드
    changeTextByClickBtn(){
        //Text컴포넌트가 보여주는 값을 가진 변수의 값을 변경
        text="Nice to meet you.";
        alert('Change text : ' + text);
        //변수의 값을 바꿔도 Text컴포넌트 화면을 자동 갱신하지 않음
        //Text컴포넌트가 보여주는 값을 가진 변수가 이 클래스의 멤버가
        //아니어서 추후 프로그래밍 과정에서 관리의 어려움이 예상됨
        //값을 가진 변수도 이 클래스의 멤버변수로 위치할 것을 권장
    }


    //function aaa(){} //ERROR : 멤버는 function키워드 금지
    clickBtn(){
        Alert.alert('PRESSED BUTTON');
    }

}//MainComponent class...

//전역의 위치에 있는 변수 (Text컴포넌트가 보여주는 값)
let text="Hello";


//전역의 위치 (즉, 클래스의 소속[멤버]이 아님)
//1)클릭했을때 반응하는 함수 [선언적 함수]
// function clickBtnFunction(){
//     //alert('clicked!'); //JS의 경고창
//     Alert.alert('clicked!');
// }

//2)익명함수로 콜백함수 만들어보기
// let clickBtnFunction= function(){
//     Alert.alert('익명함수로 clicked!');
// }

//3)화살표 함수로 콜백함수 만들어보기(RN에서 가장 선호)
let clickBtnFunction= ()=>{
    Alert.alert('화살표함수로 clicked!');
}

//위 콜백함수처럼 실행문이 한줄뿐인 간단한 동작일때는
//JSX에서 onPress={} 안에 곧바로 함수정의문을 삽입하여 사용할 수도 있음.


//스타일 객체
const style= StyleSheet.create({
    //최상위 View의 스타일
    root:{
        backgroundColor:'lightgreen',
        padding: 16,
        //기본 display:flex 스타일이 적용되어 있기에
        //높이값을 flex-grow를 이용하여 사이즈 지정(layout_weight과 같은 역할)
        flex:1,
    },
    text:{
        marginTop:16,
        fontWeight:'bold',
        paddingLeft:10,
        paddingRight:10,
    },
    img:{
        marginTop:8,
        flex:1,
        width:null,
        resizeMode:'cover'
    }
});




//위 MainComponent클래스를 다른 js문서(index.js)에서
//import를 하기 위해서는 export를 해줘야 함.
export default MainComponent;
