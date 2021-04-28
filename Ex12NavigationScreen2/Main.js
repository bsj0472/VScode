import React, {Component} from 'react';
import {NavigationContainer} from '@react-navigation/native';

//BottomTabNavigator에 의해 전환될 화면들 import
import First from './screen_bottomtab/First';
import Second from './screen_bottomtab/Second';
import Third from './screen_bottomtab/Third';

//BottomNavigator 객체를 생성해주는 함수를 import
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import { Image } from 'react-native';

//1. BottomTabNavigator객체 생성
const BottomTab= createBottomTabNavigator();

export default class Main extends Component{
    render(){
        return (
            <NavigationContainer>
                {/* BottomTabNavigator 컴포넌트 추가 */}
                <BottomTab.Navigator
                    initialRouteName="second"
                    tabBarOptions={{
                        activeTintColor:'red',
                        inactiveTintColor:'gray',
                        activeBackgroundColor:'gray',
                        showLabel:true,
                        labelPosition:'below-icon',
                    }}>
                    {/* BottomTab이 보여줄 화면(screen)들 */}
                    <BottomTab.Screen 
                        name="first"
                        component={First}
                        options={{
                            tabBarLabel:"첫번째",
                            tabBarIcon: ()=><Image source={require('./icon/RN_logo.png')} style={{width:24, height:24}}></Image>,
                            tabBarBadge:"1",
                        }}></BottomTab.Screen>
                    <BottomTab.Screen name="second" component={Second}></BottomTab.Screen>
                    <BottomTab.Screen name="third" component={Third}></BottomTab.Screen>
                </BottomTab.Navigator>
            </NavigationContainer>
        );
    }
}