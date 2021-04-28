import React, {Component} from 'react';
import {View, Text, Image, StyleSheet, ScrollView, TouchableOpacity} from 'react-native';

export default class MainComponent extends Component{

    //대량의 데이터 - 데이터가 변경되면 자동화면갱신이 되야하기에
    state= {
        datas: [ 
            {name:"sam", msg:"Hello world", img: require('./image/moana01.jpg')},
            {name:"robin", msg:"Hello RN", img: require('./image/moana02.jpg')},
            {name:"hong", msg:"Hello React", img: require('./image/moana03.jpg')},
            {name:"kim", msg:"Hello Hybrid", img: require('./image/moana04.jpg')},
            {name:"rosa", msg:"Hello iso", img: require('./image/moana05.jpg')},
            {name:"sam", msg:"Hello world", img: require('./image/moana01.jpg')},
            {name:"robin", msg:"Hello RN", img: require('./image/moana02.jpg')},
            {name:"hong", msg:"Hello React", img: require('./image/moana03.jpg')},
            {name:"kim", msg:"Hello Hybrid", img: require('./image/moana04.jpg')},
            {name:"rosa", msg:"Hello iso", img: require('./image/moana05.jpg')},

        ],
    };

    render(){
        return (
            //대량의 데이터라면 화면을 넘어갈 수도 있기에 스크롤뷰 사용
            <ScrollView style={ style.root }>
                {/* 대량의 데이터 배열의 요소개수 만큼 Component를 리턴하는 map()메소드 사용 */}
                { this.state.datas.map(  ( item, index )=>{  
                    return (
                        // <TouchableOpacity key={ index } style={ style.item } onPress={ ()=>{  this.clickBtn2(index);  } }>
                        //     <Image source={ item.img } style={ style.itemImg }></Image>
                        //     <View>
                        //         <Text style={ style.itemName }>{ item.name }</Text>                                
                        //         <Text style={ style.itemMsg }>{ item.msg }</Text>
                        //     </View>
                        // </TouchableOpacity>
                        <TouchableOpacity key={ index } style={ style.item } onPress={ ()=> alert(`msg: ${item.msg}`) }>
                            <Image source={ item.img } style={ style.itemImg }></Image>
                            <View>
                                <Text style={ style.itemName }>{ item.name }</Text>                                
                                <Text style={ style.itemMsg }>{ item.msg }</Text>
                            </View>
                        </TouchableOpacity>
                    );}) 
                } 
            </ScrollView>
        );
    }

    //아이템 클릭 콜백메소드
    clickBtn=()=>{
        alert();
        //이 메소드에서는 배열요소의 index번호를 알수 없음
    }

    //index번호를 파라미터로 전달받는 콜백메소드
    clickBtn2=(index)=>{
        //alert("index : " + index);

        //선택한 item의 Name변수값 다이얼로그로 보이기
        //alert("Name:" + this.state.datas[index].name);

        //문자열 결합연산자 + 는 결합할 것이 많을때 다소 지저분해 보임
        //JS에도 php처럼 문자열 "" 안에서 변수명을 인식할 수 있도록 하는 기법 있음
        // 빽틱(``) 기호를 이용 : 빽틱안에서 ${}를 사용하면 변수명 인식 가능함
        alert(`name: ${this.state.datas[index].name}`);
    }
}

//스타일시트 객체
const style= StyleSheet.create({
    root:{flex:1, padding:16,},
    item:{
        flexDirection:'row',
        borderWidth:1,
        borderRadius:4,
        padding:8,
        marginBottom:12,
    },
    itemImg:{
        width:120,
        height:100,
        resizeMode:'cover',
        marginRight:8,
    },
    itemName:{
        fontSize:24,
        fontWeight:'bold',
    },
    itemMsg:{
        fontSize:16,
        fontStyle:'italic',
    }

});