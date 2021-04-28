import React, {Component} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';

import Screen1 from './screen_drawer/Screen1';
import Screen2 from './screen_drawer/Screen2';
import Screen3 from './screen_drawer/Screen3';
import { Image } from 'react-native';

//DrawerNavigator 객체 생성
const Drawer= createDrawerNavigator();

export default class MainDrawer extends Component{
    render(){
        return (
            <NavigationContainer>
                <Drawer.Navigator
                    drawerPosition='right'
                    hideStatusBar={true}
                    drawerType='front'
                    drawerStyle={{
                        backgroundColor:'white',
                        width:'40%'
                    }}
                    drawerContentOptions={{
                        activeTintColor:'red',
                        itemStyle:{marginVertical:16}
                    }}
                    openByDefault={true}>
                    <Drawer.Screen name="one" component={Screen1}></Drawer.Screen>
                    <Drawer.Screen 
                        name="two"
                        component={Screen2}
                        options={{
                            drawerLabel:'두번째',
                            // 파라미터 obj : 아이콘이 보여질 위치의 color, size정보를 가진 객체
                            drawerIcon: (obj)=><Image source={require('./icon/RN_logo.png')} style={{width:obj.size, height:obj.size}}></Image>
                        }}></Drawer.Screen>
                    <Drawer.Screen name="three" component={Screen3}></Drawer.Screen>
                </Drawer.Navigator>
            </NavigationContainer>
        );
    }
}
