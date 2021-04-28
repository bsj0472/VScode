//## react-native-maps 라이브러리 설치
//$ npm install react-native-maps --save-exact

import React,{Component} from 'react';
import {View, Text, Linking} from 'react-native';

//지도 라이브러리의 MapView컴포넌트 import
import MapView,{Marker, PROVIDER_GOOGLE} from 'react-native-maps';

// 구글지도 API사용을 위해 API키를 발급받고(google개발자사이트)
// 그 값을 AndroidManifest.xml에 기입!
// android문서는 hot reload 기능으로 반영안됨! - 반드시 re-run 해야함

export default class Main extends Component{

    state={
        region:{
            latitude:37.56081,
            longitude:127.03471,
            latitudeDelta: 0.0122,
            longitudeDelta: 0.0071,
        },

        // 마커정보들 배열데이터
        markers: [
            {
                coords: {latitude:37.562516, longitude:127.035679},
                title: "희망약국",
                description: "왕십리에 있는 약국"
            },
            {
                coords: {latitude:37.561155, longitude:127.034560},
                title: "이수프라자약국",
                description: "왕십리에 있는 약국"
            },
            {
                coords: {latitude:37.560710, longitude:127.035978},
                title: "연세우리약국",
                description: "왕십리에 있는 약국"
            },
            {
                coords: {latitude:37.562162, longitude:127.032171},
                title: "왕십리약국",
                description: "왕십리에 있는 약국"
            },
        ],
    }

    render(){
        return (
            <View style={{flex:1, padding:16}}>
                <Text style={{padding:8}}>GOOGLE MAP TEST</Text>

                {/* 1. 기본 맵 보여주기 */}
                <MapView
                    style={{flex:1}}
                    provider={PROVIDER_GOOGLE}
                    //초기 맵의 중심 위치 지정
                    initialRegion={this.state.region}>

                    {/* 마커 만들기 */}
                    <Marker
                        coordinate={this.state.region}
                        title="미래능력개발교육원"
                        description="http://www.mrhi.or.kr"></Marker>

                    {/* 마커 추가하고 싶으면 */}
                    <Marker
                        coordinate={{latitude:37.56172540325554, longitude:127.03638968058391}}
                        title="성동경찰서"
                        description="성동구에 위치한 경찰서입니다."></Marker>

                    {/* 마커 여러개를 보여주고 싶다면.. 하나씩 만드는 것은 번거로움 */}
                    {/* 배열의 map()를 이용해서 <Marker>컴포넌트를 여러개 만들어 내기 */}
                    {
                        this.state.markers.map( (marker, index)=>{
                            return <Marker 
                                        coordinate={ marker.coords }
                                        title={ marker.title }
                                        description={ marker.description }
                                        //map()에 의해 자동으로 보여지는 컴포넌트들은 식별자로 key속성이 있어야함
                                        key={ index }
                                        //마커 아이콘이미지 변경
                                        image={ require('./image/icon.png') }></Marker>
                        } )
                    }

                    {/* 마커 Callout(툴팁박스) 클릭반응하기 */}
                    <Marker
                        coordinate={ {latitude:37.56345785463541, longitude:127.03696707828229} }
                        title="성동구청"
                        description="https://www.sd.go.kr"
                        onCalloutPress={this.clickMarkerCallout}></Marker>

                </MapView>
            </View>
        );
    }

    //마커의 callout을 클릭했을 때
    clickMarkerCallout=()=>{
        //alert('clicked');

        //특정 URL의 웹문서를 디바이스의 웹브라우저를 통해 실행하기
        Linking.openURL("http://www.sd.go.kr");       
    }

}