import React, {Component} from 'react';
import {View} from 'react-native';

export default class MainComponent extends Component{
    render(){
        return (
            //1) root View안에 3개의 자식뷰 배치하기
            // <View>
            //     {/* 기본적으로 RN에서는 flex스타일이 적용되어 있음 */}
            //     {/* 기본 자식뷰들의 배치방향이 수직(column) */}
            //     <View style={ {width:50, height:50, backgroundColor:'red'} }></View>
            //     <View style={ {width:100, height:100, backgroundColor:'green'} }></View>
            //     <View style={ {width:'70%', height:150, backgroundColor:'blue', left:50} }></View>
            //     {/* 뷰의 사이즈는 width, height에 숫자나, %를 사용할 수 있음. */}
            //     {/* 숫자를 입력했을때의 기본단위는 dip[dp] */}
            //     {/* 단, %단위를 사용하고자 할때는 문자열표시 ''해야만 함 */}
            //     {/* 별도로 부모뷰에 position스타일을 주지 않아도 flex이기에 위치지정 속성[left,top,right,bottom] */}
            // </View>

            //2) 앱을 만들때 기본적으로 전체 레이아웃 영역을 나누는 작업부터 시작됨
            //   이때 height으로 영역을 구분하기에는 디바이스별 해상도에 대응하기 불편함 [%도 한계점이 있음]
            //   그래서 RN에서는 flex 레이아웃을 권장함
            //   flex 스타일을 이용하여 화면을 3등분하여 영역 배치 해보기
            // <View style={{flex:1}}>
            //     {/* flex:1 이 높이값이 이유 - 배치방향이 column(수직) */}
            //     <View style={ {flex:1, backgroundColor:'red'} }></View>
            //     <View style={ {flex:2, backgroundColor:'green'} }></View>
            //     <View style={ {flex:4, backgroundColor:'blue'} }></View>
            // </View>
            
            //3) 가로배치 [flexDirection]
            // <View style={{flex:1, flexDirection:'row'}}>
            //     {/* 가로배치에서의 flex:1 은 width값이 됨 */}
            //     {/* 높이값이 alignItem 정렬속성의 기본값인 stretch가 되어 match_parent됨 */}
            //     <View style={ {flex:1, backgroundColor:'red'} }></View>
            //     <View style={ {flex:2, backgroundColor:'green'} }></View>
            //     <View style={ {flex:4, backgroundColor:'blue'} }></View>
            // </View>

            //4) 배치방향과 정렬      
            // justifyContent : 배치방향과 같은축의 정렬 [default: flex-start]
            // alignItems     : 배치방향과 교차축의 정렬 [default: stretch]
            // <View style={{flex:1, flexDirection:'column', justifyContent:'space-evenly', alignItems:'center'}}>
            //     <View style={{width:50, height:50, backgroundColor:'red'}}></View>
            //     <View style={{width:50, height:50, backgroundColor:'green'}}></View>
            //     <View style={{width:50, height:50, backgroundColor:'blue'}}></View>
            // </View>

            // 가로방향배치와 정렬
            // <View style={ {flex:1, flexDirection:'row', justifyContent:'space-between', alignItems:'center'} }>
            //     <View style={{width:50, height:50, backgroundColor:'red'}}></View>
            //     {/* 부모에 의해 정렬이 되지만 자식뷰도 스스로 정렬을 지정할 수 있음.  */}
            //     <View style={{width:50, height:50, backgroundColor:'green', alignSelf:'flex-start'}}></View>
            //     <View style={{width:50, height:50, backgroundColor:'blue'}}></View>                
            // </View>

            //5) flex속성으로 사이즈를 지정할때 ....
            // <View style={{flex:1, flexDirection:'column'}}>
            //     {/* 자식뷰 중에 하나는 width,height으로 사이즈 지정 */}
            //     <View style={{width:50, height:50, backgroundColor:'red'}}></View>

            //     {/* 나머지 뷰들은 flex로 사이즈 지정 : 남는공간을 1:2로 분할*/}
            //     <View style={{flex:1, backgroundColor:'green'}}></View>
            //     <View style={{flex:2, backgroundColor:'blue'}}></View>                
            // </View>

            //6)중첩구조 배치.. 수직/수평 중첩 [안드로이드의 LinearLayout안에 LinearLayout ]
            // <View style={{flex:1, flexDirection:'column'}}>
            //     {/* 크게 수직으로 2분할 [1:2 비율] */}
            //     <View style={{flex:1, flexDirection:'row'}}>
            //         {/* 좌우 2:1의 비율 */}
            //         <View style={{flex:2, backgroundColor:'red'}}></View>
            //         <View style={{flex:1, flexDirection:'column'}}>
            //             <View style={{flex:1, backgroundColor:'yellow'}}></View>
            //             <View style={{flex:1, backgroundColor:'green'}}></View>
            //         </View>
            //     </View>

            //     <View style={{flex:2, flexDirection:'row'}}>
            //         {/* 좌우 1:2 비율 */}
            //         <View style={{flex:1, backgroundColor:'blue'}}></View>
            //         <View style={{flex:2, flexDirection:'column'}}>
            //             <View style={{flex:1, backgroundColor:'gray'}}></View>
            //             <View style={{flex:1, backgroundColor:'brown'}}></View>
            //         </View>
            //     </View>
            // </View>

            //7) RelativeLayout처럼 뷰들이 겹치게 배치하려면 position:absolute를 이용
            <View style={{flex:1, flexDirection:'column'}}>
                {/* 크게 수직으로 2분할 [1:2 비율] */}
                <View style={{flex:1, flexDirection:'row'}}>
                    {/* 좌우 2:1의 비율 */}
                    <View style={{flex:2, backgroundColor:'red'}}>
                        
                        {/* 절대 위치 지정으로 뷰 겹치기 */}
                        <View style={{width:50, height:50, backgroundColor:'white', left:10, top:10, position:'absolute'}}></View>
                        <View style={{width:50, height:50, backgroundColor:'gray', left:20, top:20, position:'absolute'}}></View>
                    </View>
                    <View style={{flex:1, flexDirection:'column'}}>
                        <View style={{flex:1, backgroundColor:'yellow'}}></View>
                        <View style={{flex:1, backgroundColor:'green'}}></View>
                    </View>
                </View>

                <View style={{flex:2, flexDirection:'row'}}>
                    {/* 좌우 1:2 비율 */}
                    <View style={{flex:1, backgroundColor:'blue'}}></View>
                    <View style={{flex:2, flexDirection:'column'}}>
                        <View style={{flex:1, backgroundColor:'gray'}}></View>
                        <View style={{flex:1, backgroundColor:'brown'}}>

                            {/* 절대위치로 뷰 위치 지정 */}
                            <View style={{width:50, height:50, backgroundColor:'white', position:'absolute', right:10, bottom:10}}></View>
                            <View style={{width:50, height:50, backgroundColor:'gray', position:'absolute', right:20, bottom:20}}></View>

                        </View>
                    </View>
                </View>

                {/* 절대위치 지정으로 뷰 겹치기 */}
                <View style={ {width:100, height:100, position:'absolute', backgroundColor:'orange', bottom:100, left:90, borderRadius:50} }></View>

            </View>


        );
    }
}