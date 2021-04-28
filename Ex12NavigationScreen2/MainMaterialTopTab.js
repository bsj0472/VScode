import React, {Component} from 'react';
//NavigationContainer
import {NavigationContainer} from '@react-navigation/native';
//MaterialTopTabNavigator 객체를 생성해 주는 함수 import
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

//보여질 스크린 컴포넌트들
import First from './screen_materialtoptab/First';
import Second from './screen_materialtoptab/Second';
import Third from './screen_materialtoptab/Third';
import { Image } from 'react-native';

//MaterialTopTabNavigator객체 생성
const TopTab= createMaterialTopTabNavigator();

export default class MainMaterialTopTab extends Component{
    render(){
        return (
            <NavigationContainer>

                <TopTab.Navigator
                    tabBarPosition='top'
                    swipeEnabled={true}
                    initialRouteName="third"
                    tabBarOptions={{
                        activeTintColor:'blue',
                        inactiveTintColor:'gray',
                        showLabel:true,
                        indicatorStyle:{
                            backgroundColor:'green',
                            height:4,
                        },
                        showIcon:true,
                    }}>

                    <TopTab.Screen 
                        name="first"
                        component={First}
                        options={{
                            tabBarLabel:'TAB1',
                            tabBarIcon: ()=><Image source={require('./icon/RN_logo.png')} style={{width:24, height:24}}></Image>
                        }}></TopTab.Screen>
                    <TopTab.Screen name="second" component={Second}></TopTab.Screen>
                    <TopTab.Screen name="third" component={Third}></TopTab.Screen>

                </TopTab.Navigator>

            </NavigationContainer>
        );
    }
}

