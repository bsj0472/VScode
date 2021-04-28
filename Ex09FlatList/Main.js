import React, {Component} from 'react';
import {View, Text, FlatList, StyleSheet, Image, TouchableOpacity} from 'react-native';

export default class Main extends Component{

    //FlatList컴포넌트 : 대량의 데이터를 적합한 컴포넌트로 자동구현
    
    //1. 대량의 데이터- 데이터변화에 따라 화면이 자동갱신되어야 하기에
    //멤버변수를 생성자 메소드안에서 만들수도 있음.[주의! this.키워드]
    constructor(){
        //JS에서는 상속받은 클래스의 생성자에서 반드시 부모클래스의
        //생성자를 명시적으로 호출해 주어야만 함.
        super();

        this.state={
            //1)우선 간단하게 문자열 배열 데이터들
            datas: ["aaa","bbb","ccc","ddd"],

            //2)FlatList의 데이터는 요소값마다 key라는 이름의 멤버변수가 있어야 함
            datas2: [ 
                {key:"0", data:"aaa"},
                {key:"1", data:"bbb"},
                {key:"2", data:"ccc"},
                {key:"3", data:"ddd"},

                // 개수가 많아지면 화면 벗어날 수 있음. - 자동 스크롤이 생김
                {key:"4", data:"aaa"},
                {key:"5", data:"bbb"},
                {key:"6", data:"ccc"},
                {key:"7", data:"ddd"},
                {key:"8", data:"aaa"},
                {key:"9", data:"bbb"},
                {key:"10", data:"ccc"},
                {key:"11", data:"ddd"},
            ],

            //3) Ex08ListLayout2예제의 리스트모양 FlatList를 사용하여 똑같이 만들기
            //대량의 데이터
            datas3:[
                {name:"sam", msg:"Hello world", img:require('./image/moana01.jpg')},
                {name:"robin", msg:"Hello RN", img:require('./image/moana02.jpg')},
                {name:"hong", msg:"Hello Hybrid", img:require('./image/moana03.jpg')},
                {name:"kim", msg:"Hello React", img:require('./image/moana04.jpg')},
                {name:"rosa", msg:"Hello ios", img:require('./image/moana05.jpg')},
            ],
        };        
    }

    render(){

        //FlatList가 보여줄 대량의 데이터 this.state.datas3 배열은
        //요소객체들 모두 key 라는 이름의 변수가 없기에 경고가 표시됨
        //그래도 아래 return하기 전에 동적으로 추가시키기
        // this.state.datas3.forEach( function(item, index, array){
        //     //각 배열요소에 key멤버변수 추가 [값은 중복되지 않도록 index이용]
        //     item.key= index+'';
        // });

        // 위 동적 key멤버 추가로 해결할 수는 있지만
        // 좀 번거롭고 코드가 지저분함.
        
        // 그래서 위 작업없이 FlatList에 "키추출"이라는 속성을 이용하면
        // 경고없이 작업 가능함 [가장 많이 애용함]


        return(
            <View style={style.root}>
                <Text style={style.title}>Flat List TEST</Text>

                {/* FlatList의 2개속성 지정 */}
                {/* 데이터에 key가 없으면 경고표시됨. */}
                {/* 그렇다고 데이터만들때 key변수를 일일이 붙이는 것이 짜증 */}
                {/* 실무에서는 대량의 데이터가 서버로 부터 오기에 */}
                {/* key라는 멤버를 가진 데이터객체가 거의 없음!!  */}
                {/* 해결책 #1. 배열요소객체마다 key라는 멤버를 동적으로 추가 */}
                <FlatList
                    data={this.state.datas3}
                    renderItem={ ({index, item})=>{
                        return (
                            <TouchableOpacity style={style.item} onPress={()=>alert(item.name)}>
                                <Image style={style.itemImg} source={item.img}></Image>
                                <View>
                                    <Text style={style.itemName}>{item.name}</Text>
                                    <Text style={style.itemMsg}>{item.msg}</Text>
                                </View>
                            </TouchableOpacity>
                        );
                    }}
                    // 파라미터로 배열요소가 전달됨
                    // 중복되지 않는 값을 return해 주면 FlatList가 
                    //이 리턴값을 key로 인식하여 경고가 해결됨
                    keyExtractor={ (item)=>{return item.name} }

                    //스크롤바가 안보이도록 하고 싶다면
                    showsVerticalScrollIndicator={false}>        
                </FlatList>

            </View>
        );
    }



    // render(){
    //     return (
    //         <View style={style.root}>
    //             <Text style={style.title}>Flat List TEST</Text>
                
    //             {/* string데이터를 각각 보여주는 <Text>컴포넌트를 */}
    //             {/* 자동으로 만들어주는 컴포넌트 [안드로이드의 ListView]*/}
    //             {/* FlatList의 필수 2개 속성 */}
    //             {/* 1) data - FlatList가 보여줄 대량의 데이터들 지정*/}
    //             {/* 2) renderItem - 아이템 하나의 모양(컴포넌트)를 만들어서 리턴해주는 콜백함수 지정 */}
    //             <FlatList 
    //                 data={this.state.datas2}                    
    //                 renderItem={  ( {index, item} )=>{ //구조분해할당으로 파라미터 받기
    //                     return <Text style={style.itemView}>{ index +":" + item.data+" - " +item.key }</Text>;  }
    //                 }>
    //                 {/* renderItem에 지정한 콜백함수의 파라미터로 전달된 값은 item(배열요소), index(인덱스번호)를 가진 객체1개가 전달됨 */}
    //                 {/* 출력해보면 key값이 없다고 경고표시됨. */}
    //                 {/* 단, FlatList는 컴포넌트에 key속성을 붙이는 것이 아니라 */}
    //                 {/* 대량의 Data(datas)의 요소값들이 key멤변수를 가지고 있어야 함 */}
    //             </FlatList>


    //         </View>
    //     );
    // }
}

//스타일시트
const style= StyleSheet.create({
    root:{flex:1, padding:16},
    title:{
        fontSize:24,
        fontWeight:'bold',
        textAlign:'center',
        paddingTop:8,        
        paddingBottom:16,
    },
    itemView:{
        borderRadius:8,
        borderWidth:1,
        padding:8,
        margin:8,
    },

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

