// ### react-native-image-picker 라이브러리 추가 ####

// $ npm install react-native-image-picker

import React, {Component} from 'react';
import {View, Text, Image, Button} from 'react-native';

//image picker library를 사용하기 위해 2개의 함수 import
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';

export default class Main extends Component{

    //이미지의 경로를 저장하는 state변수
    state= {
        img: {uri:"https://cdn.pixabay.com/photo/2019/04/11/13/38/myeongdong-4119806_1280.jpg"},
    }

    render(){
        return (
            <View style={{flex:1, padding:16,}}>
                {/* 카메라앱, 사진앱 실행 버튼 */}
                <View style={{flexDirection:'row', justifyContent:"space-between"}}>
                    <Button title="show camera app" onPress={this.showCamera}></Button>
                    <Button title="show photo app" color="green" onPress={this.showPhoto}></Button>
                </View>

                {/* 이미지의 경로를 표시하기 위해 Text컴포넌트 */}
                <Text style={{margin:8}}>{ this.state.img.uri }</Text>

                {/* 이미지를 보여주는 컴포넌트 */}
                <Image source={ this.state.img } style={{marginTop:8, flex:1}}></Image>

            </View>
        );
    }

    //카메라앱
    showCamera= ()=>{

        //옵션객체
        //const options={};

        const options={
            mediaType:'video',
            cameraType:'back',
            quality: 1.0,
            videoQuality:'high',
            saveToPhotos: true, //캡쳐한 사진을 디바이스의 public photo경로에 저장할지 여부
        }

        //image-picker 라이브러리를 이용하여 카메라 앱 실행
        launchCamera(options, (response)=>{ //응답객체가 결과를 가지고 있음

            if(response.didCancel){
                alert('사용자가 촬용을 취소하였습니다.');
            }else if( response.errorMessage){
                alert("에러 : " + response.errorMessage);
            }else{
                //이 곳까지 왔으면 카메라앱에서 이미지가 잘 촬영된 것임
                
                //촬영된 이미지의 uri경로를 이미지컴포넌트가 보여주는 state에 설정
                const source= {uri: response.uri};
                this.setState({img: source});
            }

        });

    }

    //사진앱
    showPhoto= ()=>{

        const options={
            mediaType:'photo'
        };

        //사진앱 실행하기
        launchImageLibrary(options, (response)=>{
            if(response.didCancel){
                alert('사진선택을 취소하셨습니다.');
            }else if( response.errorMessage ){
                alert('error : '+ response.errorMessage);
            }else{
                //선택된 이미지를 이미지뷰가 보여주는 state에 반영
                this.setState({img: {uri:response.uri} });
            }
        });

    }

}