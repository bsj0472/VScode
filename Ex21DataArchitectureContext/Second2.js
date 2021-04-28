import React, { Component } from "react";
import { Button, View, Text } from "react-native";

//이건 새로운 MyContext이므로 Main.js에 만든 객체가 아님.
// const MyContext= React.createContext();

//Main.js에 있는 객체 import하면 됨 - default가 아니므로 {}가 필요
import {MyContext} from './Main';

export default class Second2 extends Component{
    render(){
        return (
            // Main.js에서 만든 MyContext.Provider의 제공 value를
            //소비하기
            <MyContext.Consumer>
                {
                    ({data, changeData})=> (
                                                <View>
                                                    <Text>Second2 component : {data}</Text>
                                                    <View>
                                                        <Button title="button" onPress={ ()=>changeData('Good') }></Button>
                                                    </View>
                                                </View>
                                            )
                   
                }
            </MyContext.Consumer>

            
        )
    }
}