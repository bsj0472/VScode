//## react-native-geolocation-service 라이브러리 install ##
//$ npm install react-native-geolocation-service

//  ** community팀에서 만든 geolocation은 현재 구글에서 비추천임

import React,{Component} from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';

//Geolocation 클래스 import
import Geolocation from 'react-native-geolocation-service';

// ### 위치정보는 사용자에게 퍼미션을 받아야 하는 기능임  ###
// 퍼미션 작업을 해야 하는데. Android와 ios 각각의 다르게 작업함
// Android 퍼미션 작업
// JS에서는 할 수 없음. android앱의 AndroidManifest.xml에서 작업해야 함 
// android.permission.ACCESS_FINE_LOCATION 퍼미션 적용한 후 반드시 re-run을 해야만 함. [hot reload기능 사용으로 적용안됨]
// [위치퍼미션은 동적퍼미션이 필요한데 이제는 자동으로 적용되네요.]

export default class Main extends Component{

    state={
        //위도,경도 정보를 가진 객체
        currPos: {latitude: 0.0, longitude: 0.0},                
    }

    

    render(){
        return <View style={style.root}>
                    <Button title="get my location" onPress={this.clickBtn}></Button>

                    {/* 실시간 위치 업데이트 */}
                    <View style={{flexDirection:'row', justifyContent:'space-around', marginTop:16,}}>
                        <Button onPress={this.clickBtn2} title="watch my location" color="green"></Button>
                        <Button onPress={this.clickBtn3} title="clear my location" color="red"></Button>
                    </View>

                    <View style={style.textArea}>
                        <Text style={style.text}>latitude: {this.state.currPos.latitude}</Text>
                        <Text style={style.text}>longitude: {this.state.currPos.longitude}</Text>
                    </View>
               </View>
    }

    clickBtn2= ()=>{

        //혹시 clear를 하지 않고 watch를 또 발동할 수도 있기에
        //기존 watch가 있다면 clear시키는 코드 작성
        Geolocation.clearWatch(this.state.id); //id가 없는데 이 요청을 하면 그냥 무시됨

        //실시간 위치 업데이트하는 탐색 시작!! - 이 watch객체를 식별하는 id가 리턴됨[clear할때 사용]
        const id= Geolocation.watchPosition( 
            (pos)=>{
                //alert('성공');
                //파라미터로 전달된 위치객체에게 좌표 얻어와서 Text에 보이기
                this.setState({currPos: pos.coords});
            },
            (error)=>{
                alert('에러 : ' + error.message);
            },
            {enableHighAccuracy:true, distanceFilter: 50, interval:10000, fastestInterval:5000, showLocationDialog:true,}
        );

        // state에 watch ID값 저장 - 만약 변수가 없다면 동적 추가
        //this.setState({id: id});//프로퍼티명과 값이 같은 변수명이이면 값만 넣어도 자동 변수명 생김
        this.setState({id});//자동 "id"라는 이름의 프로퍼티가 생김
    }

    clickBtn3= ()=>{
        //위치탐색을 종료하는 기능 실행
        Geolocation.clearWatch(this.state.id); //종료시킬 watch의 id를 지정
        //화면에 위도,경도 정보도 클리어
        this.setState( { currPos:{latitude:0.0, longitude:0.0} } );
    }

    clickBtn=()=>{
        // Geolocation객체에게 현재 위치좌표 얻어오기
        Geolocation.getCurrentPosition( 
            ( position )=>{ //성공했을 때 발동하는 콜백함수
                //파라미터로 전달된 position객체가 위치정보를 가지고 있음
                //alert('성공');
                //위치정보를 Text에 보여주기 위해 state값 변경
                this.setState({currPos: position.coords});
            },
            ( error )=>{ //실패했을때 발동하는 콜백함수
                alert('에러 : ' + error.message );
            },
            {enableHighAccuracy: true, timeout: 15000,}// 옵션객체
        );
        
        
    }

}

const style=StyleSheet.create({
    root:{flex:1, padding:16,},
    textArea:{flex:1, justifyContent:'center', alignItems:'center',},
    text:{fontWeight:'bold', fontSize:20, padding:8,}
});