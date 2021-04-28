// ### react navigation 라이브러리 설치 ## [개발자사이트 참고]

// react native에선느 기본적으로 Screen(화면)전환 기법이 제공되지 않음
// 그래서 라이브러리를 사용해야만 함. 여러종류가 있지만 그 중에서 가장 많이 사용되는
// React Navigation Library를 적용
// package.json 파일안에 dependencies 블럭에 연결된(의존된) 라이브러리의 목록이 있음.[안드로이드의 build.gradle같은 문서]


// # react navigation을 사용하기 위한 라이브러리 install
//1. 필수 라이브러리
//    $ npm install @react-navigation/native

//2. 선택 라이브러리이지만 거의 필수에 가까운 라이브러리
//    $ npm install react-native-reanimated react-native-gesture-handler react-native-screens react-native-safe-area-context @react-native-community/masked-view

// ** 설치과정에서 버전문제로 에러가 발생할 수 있음. **
// [해결 --force옵션] $ npm install @react-native-community/masked-view --force

//3. 원하는 Navigator의 종류에 따라 해당 라이브러리를 추가 적용하면서 개발
// 1) StackNavigator  : 제목줄이 자동으로 보여지는 네비게이터
// 2) BottomTabNavigator
// 3) MaterialTopTabNavigator
// 4) DrawerNavigator

import React, {Component} from 'react';

//0. NavigationContainer[필수] <- 이 컴포넌트안에 Navigator를 넣어서 배치해야 함.
import {NavigationContainer} from '@react-navigation/native';

//1. StackNavigator를 생성해주는 함수를 import 하기
import {createStackNavigator} from '@react-navigation/stack';

//2. StackNavigator가 전환활 화면 컴포넌트들 import
import HomeComponent from './screen_stack/HomeComponent';
import SecondComponent from './screen_stack/SecondComponent';

//먼저 StackNavigator객체 만들기
const Stack= createStackNavigator();

export default class Main extends Component{
    render(){
        // 어떤 종류의 Navigator를 사용하든지 최상위 컴포넌트로
        // NavigationContainer 컴포넌트가 있어야 함
        return (
            <NavigationContainer>

                {/* 원하는 Navigator 사용 */}
                {/* 1. StackNavigator */}
                <Stack.Navigator 
                    screenOptions={{
                        headerStyle:{ backgroundColor:'green' },
                        headerTintColor:'white',
                        headerTitleStyle:{ fontWeight:'bold' },
                        headerTitleAlign:'center'
                    }}>
                    {/* 네비게이터가 전환할 스크린들(컴포넌트들) */}
                    {/* 화면별 개별 Header옵션 설정 */}
                    <Stack.Screen 
                        name="Home"
                        component={HomeComponent}
                        options={{
                            title:'HOME',
                            headerStyle:{backgroundColor:'indigo'},
                            headerTitleStyle:{fontStyle:'italic'},
                        }}></Stack.Screen>
                    <Stack.Screen name="Second" component={SecondComponent}></Stack.Screen>
                </Stack.Navigator>
                {/* 잘 되었다면 안드로이드의 기본화면처럼 제목줄이 보여짐 */}

            </NavigationContainer>
        );
    }
}