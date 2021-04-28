import React, {Component} from 'react';
import {View, TextInput, StyleSheet, Text, Button} from 'react-native';

class MainComponent extends Component{

    state={
        msg:"Hello",
    }

    //TextInput컴포넌트의 값이 변경될때 마다의 값을 저장하는 일반 멤버변수
    data="";

    //화면을 그려내는 메소드
    render(){
        return (
            // <View style={ style.root }>
            //     {/* TextInput은 스타일이 없으면 화면에 밑줄조차 없어서 존재를 인식할 수 없음. */}
            //     {/* <TextInput style={ style.textInput } onChangeText={ this.changeText }></TextInput> */}
            //     {/* 소프트키패드의 완료버튼을 눌렀을때 써있는 글씨를 Text컴포넌트에 보여주기 */}
            //     <TextInput style={ style.textInput } onSubmitEditing={ this.submitText } ></TextInput>

            //     {/* 사용자의 입력된 글씨를 보여주는 Text컴포넌트 */}
            //     <Text style={ style.text }> { this.state.msg } </Text>
            // </View> 

            // 사용자가 TextInput에 글씨를 입력하고
            // 버튼을 클릭하면 그 때의 글씨를
            // Text컴포넌트에 보여주기
            // <View style={ style.root }>
            //     <TextInput onChangeText={ this.changeText2 } style={ style.textInput} ></TextInput>
            //     <Button onPress={ this.clickBtn } title="완료"></Button>
            //     <Text style={ style.text } > { this.state.msg } </Text>
            // </View>

            // 화살표함수 축약
            // <View style={ style.root }>
            //     <TextInput onChangeText={ value=>this.data= value } style={ style.textInput} ></TextInput>
            //     <Button onPress={ ()=> this.setState({msg: this.data})  } title="완료"></Button>
            //     <Text style={ style.text } > { this.state.msg } </Text>
            // </View>

            // 여러줄 입력 TextInput만들기
            <View style={ style.root }>
                {/* multilne속성의 값은 문자열이 아니라 Boolean */}
                {/* 높이값이 계속 커짐 */}
                <TextInput multiline={true} numberOfLines={4} onChangeText={ this.changeText2 } style={ style.textInput2 } ></TextInput>
                <Button onPress={ this.clickBtn  } title="완료"></Button>
                <Text style={ style.text } > { this.state.msg } </Text>
            </View>
        );
    }

    clickBtn= ()=>{
        this.setState( {msg: this.data} );
    }

    // 화살표 함수의 파라미터가 1개고 실행문자 1개여서 (), {}모두 생략
    changeText2= value=> this.data= value;   

    // changeText2= (value)=>{
    //     this.data= value; //state변수가 아니므로 화면갱신 없음
    // }


    //소프트키패드의 완료버튼을 선택했을때 반응하도록 지정된 메소드
    submitText= (submitEvent)=>{
        //TextInput컴포넌트에 써있는 글씨를 얻어와서 Text컴포넌트에 보여주는 방식이 아님!!
        //이 메소드가 실행될때 파라미터로 이벤트 객체가 전달되어 옴
        //그 이벤트 객체[submitEvent]가 값을 가지고 있음.
        let value= submitEvent.nativeEvent.text;
        this.setState({msg: value});        
    }

    //글씨가 변경될때 마다 발동하는 콜백함수
    //onChangeText속성에 지정된 이 콜백함수가 발동할 때마다
    //파라미터로 변경된 글씨가 전달됨
    changeText= (value)=>{
        this.setState( {msg: value} );        
    }

}


//스타일 객체 
const style= StyleSheet.create({
    root:{
        flex: 1,
        padding:16,
    },
    textInput:{
        borderWidth: 2,
        borderColor: 'green',
        backgroundColor:'white',
        borderRadius: 8,
        paddingLeft:16,
        paddingRight:16,
        height:40,
        marginBottom:16,
    },
    text:{
        margin:16,
        fontWeight:'bold',
        paddingLeft:10,
        paddingRight:10,
        fontSize:24
    },

    textInput2:{
        borderWidth: 2,
        borderColor: 'green',
        backgroundColor:'white',
        borderRadius: 8,
        paddingLeft:16,
        paddingRight:16,
        marginBottom:16,

        //높이가 계속 커지면 UI가 이상하기에
        maxHeight:200,
    }
});


//MainComponent클래스를 다른 .js(index.js)에서 사용하도록
export default MainComponent;