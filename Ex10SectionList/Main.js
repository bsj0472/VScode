import React, {Component} from 'react';
import {View, Text, SectionList, StyleSheet, TouchableOpacity} from 'react-native';

export default class Main extends Component{

    state={
        // SectionList에 적용될 데이터의 섹션하나는 title, data라는 이름의 프로퍼티가 필요함
        setionDatas:[
            {title:"한식", data:["백반","고기산적","비빔밥"]},
            {title:"중식", data:["짜장면","짬뽕","탕수육"]},
            {title:"일식", data:["초밥","회","덮밥"]},
        ]
    };

    render(){
        return (
            <View style={style.root}>
                <Text style={style.title}>Section List TEST</Text>

                {/* 리스트 중간중간 카테고리 구분하여 볼 수 있도록 */}
                {/* 섹션을 나누어 모양을 만들어 주는 리스트뷰 */}
                {/* SectionList의 3개의 필수속성 */}
                {/* 1) sections - 섹션의 title과 섹션별 data를 가진 배열*/}
                {/* 2) renderSectionHeader - 섹션별 title 영역의 모양을 리턴하는 함수 지정 */}
                {/* 3) renderItem - 섹션별 item의 모양을 리턴하는 함수 지정 */}
                <SectionList
                    sections={this.state.setionDatas}
                    // section의 title을 보여주는 컴포넌트를 리턴해주는 함수 지정
                    // 구조분해할당으로 받은 파라미터 section : 위 sections에 지정한 배열의 요소1개
                    renderSectionHeader={ ( {section} )=>{ 
                        return (
                            <View style={style.sectionHeader}>
                                <Text style={style.sectionTitle}>{section.title}</Text>
                            </View>
                        )}
                     }

                    renderItem={ ({item, index})=>{ 
                        return (
                            <TouchableOpacity style={style.sectionItem} onPress={()=>alert(item+":"+index)}>
                                <Text>{item}</Text>
                            </TouchableOpacity>
                        )
                    }}

                    keyExtractor={ (item, index)=> index }
                    >                    
                </SectionList>
            </View>
        );
    }
}

const style= StyleSheet.create({
    root: {flex:1, padding:16,},
    title:{fontSize:24, fontWeight:'bold', textAlign:'center', padding:8},

    sectionHeader:{
        padding:4,
        backgroundColor:'#eeeeee',
    },
    sectionTitle:{
        fontSize:20,
        fontWeight:'bold',
    },
    sectionItem:{
        borderBottomWidth:1,
        padding:8
    }

});