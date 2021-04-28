// ## AsyncStorage 라이브러리 : Android의 SharedPreferences 와 비슷한 역할 ###
// google 검색으로 npm install

import React,{Component} from 'react';
import {View, Text, TextInput, Button, StyleSheet} from 'react-native';

//AsyncStorage import
import AsyncStorage from '@react-native-async-storage/async-storage';

export default class Main extends Component{

    state={
        text: "", //load한 데이터를 보여줄 Text컴포넌트의 글씨변수

        //TextInput컴포넌트에 글씨가 변경될때마다의 값을 저장하는 변수
        inputText:"",
    }

    render(){
        return (
            <View style={style.root}>
                {/* 저장할 데이터를 입력할 컴포넌트 */}
                <TextInput 
                    style={style.textInput}
                    onChangeText={this.changeText}
                    placeholder="Enter some text here"
                    value={this.state.inputText}></TextInput>

                {/* AsyncStorage 저장버튼 */}
                <Button title="save data" onPress={this.saveData}></Button>

                {/* 사이 간격용으로 */}
                <View style={{marginTop:16,}}></View>

                {/* AsyncStorage 읽기버튼 */}
                <Button title="load data" color="orange" onPress={this.loadData}></Button>
                <Text style={{marginTop:16, padding:8, fontWeight:'bold',}}>{this.state.text}</Text>

                {/* EX7버전에서 새로 등장한 문법 */}
                {/* async / await 문법으로 비동기 처리 */}
                <Button title="store data" color="indigo" onPress={this.storeData}></Button>
                <Button title="read data" color="green" onPress={this.readData}></Button>
            </View>

        );
    }

    //TextInput의 글씨가 변경될때 마다 실행되도록 지정된 콜백메소드
    changeText=( value )=>{
        this.setState({inputText: value});
    }

    //save data 
    saveData=()=>{
        // TextInput의 글씨가 변경될때마다 저장하고 있는 this.state.inputText값을
        // AsyncStorage에 저장하기
        AsyncStorage.setItem('Data', this.state.inputText); //식별자, 값
        alert("saved data");

        //다음 입력을 편하기 위해 TextInput의 value값을 초기화
        this.setState({inputText:""});
    }

    //load data
    loadData=()=>{
        //AsyncStorage에서 값 읽기- 비동기방식
        //비동기방식 처리에 적합한 promiss기법 사용
        AsyncStorage.getItem('Data').then( (value)=>{ this.setState({text:value}) } );
    }


    // ES7버전의 새로운 문법으로 AsyncStore 작업 수행 [ async / await]
    storeData= async ()=>{
        await AsyncStorage.setItem('msg','Hello RN');
        alert('저장이 완료되었습니다.');
    }

    readData= async ()=>{        
        const value= await AsyncStorage.getItem('msg');
        if(value !== null) this.setState({text:value});
    }


}

const style= StyleSheet.create({
    root: {flex:1, padding:16,},
    textInput:{
        paddingLeft:16,
        paddingRight:16,
        borderWidth:1,
        borderRadius:8,
        borderColor:'black',
        marginBottom:16,
    }
});

