import React,{Component} from 'react';
import {View, Text, Button, ScrollView, StyleSheet, LogBox, Appearance} from 'react-native';

export default class Main extends Component{

    //화면에 영향을 주는 특별한 멤버변수 state
    //생성자메소드안에서 만들어보기
    constructor(){
        super(); //부모생성자를 명시적으로 호출해야만 함

        this.state={
            text:"",

            //movies.json의 영화리스트 배열데이터를 저장하는 배열변수
            movies: [],
        };
    }

    render(){
        return (
            <View style={style.root}>
                <Button title="fetch data from network" onPress={ this.fetchData }></Button>

                {/* ScrollView는 기본적으로 height이 flex:1임 */}
                {/* 만약, 안의 내용물을 wrap하는 사이즈가 되고 싶다면 View로 감싸면 됨*/}
                <View>
                    <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{marginTop:16, backgroundColor:'gray'}}>
                        <Text style={{padding:8, color:'white'}}>{ this.state.text }</Text>

                        {/* 영화리스트 데이터 this.state.movies 보여주기 */}
                        {/* 배열데이터는 대량이기에 List형태로 출력 */}
                        {
                            this.state.movies.map( (item, index)=>{
                                return (
                                    <View key={index} style={{padding:8, borderWidth:1, borderColor:'black', margin:4}}>
                                        <Text style={{color:'white'}}>{item.id}</Text>
                                        <Text style={{color:'yellow'}}>{item.title}</Text>
                                        <Text style={{color:'white'}}>{item.releaseYear}</Text>
                                    </View>
                                );
                            })
                        }
                    </ScrollView>
                </View>
                                
            </View>
        );
    }


    fetchData=()=>{
        console.log('fetch...'); //로그 남기기[안드로이드의 Log] - node창에 보여짐

        //1. Javascript언어의 XMLHttpRequest객체 이용하기 [Android의 HttpUrlConnection 과 같은 역할]
        // let xhr= new XMLHttpRequest();

        // //xhr는 비동기방식으로 데이터를 주고받음
        // //비동기방식은 별도의 Thread가 작업을 수행하는 것이기에 언제 완료되는지
        // //정확히 예측되지 않기에, 완료가 되면 자동으로 특정 콜백함수를 호출하도록
        // //설계되어 있음. [주의! send()작업을 수행하기 전에 미리 설정되어 있어야 함]
        // xhr.onreadystatechange= ()=>{
        //     if(xhr.readyState==4 && xhr.status==200){
        //         //alert( xhr.responseText );
        //         //Text컴포넌트가 보여주는 Data변경[state객체]
        //         this.setState({text: xhr.responseText});
        //     }
        // };

        // xhr.open('GET','http://mrhi2021.dothome.co.kr/index.js');
        // xhr.send();

        //xhr는 결과를 받는 onreadystatechange()메소드의 작성 위치가 send()보다
        //먼저 있어야 하다보미 코드를 인식하는데 다소 불편한 단점이 있음.
        //또한, 콜백지옥이라고 해서 onreadystatechange()메소드 안에서 또 다른
        //비동기 작업을 수행하면 그 작업이 매우 복잡하고 해석이 난해함.

        //네트워트작업을 보다 수월하게 하기 위한 라이브러리 사용
        // fetch Library [android의 Retrofit과 같은 라이브러리]
        // fetch라이브러리는 RN에 기본 설치되어 있음.

        //2. fetch()함수 : Jquery의 ajax()와 같은 역할을 하는 함수
        //   프로미스[ promiss:약속 ] 문법 - 비동기처리시에 처리가 끝났을 때 해야하는 작업을 할 때 유용함
        //   .then() 메소드 : 비동기 처리가 끝나면 자동으로 파라미터로 전달된 함수를 실행하도록 약속(promiss)한 개념.
        //      [ 위 xhr의 onreadystatechage와 비슷함]- 작성위치나 식별성이 용이하여 작업 수월함.

        //fetch('http://mrhi2021.dothome.co.kr/index.js').then( function(response){ alert(response.status) } );//결과 200 OK

        //2.1 응답결과를 문자열로 받아오기
        // fetch('http://mrhi2021.dothome.co.kr/index.js')
        // .then( (response)=>{
        //     //kkk();//ERROR발생
        //     //응답객체에게 결과를 문자열 글씨로 변환해 달라고 요청하고 결과를 리턴 - 비동기처리
        //     return response.text();
        // })
        // .then( (responseText)=>{ //response.text()의 변환결과를 파라미터로 전달받음
        //     //변환된 string을 Text컴포넌트에 보이기
        //     this.setState({text:responseText});
        // })
        // .catch( (error)=>alert(error) );//.then()작업 중 에러발생하면 실행되는 예외처리영역


        //2.2 위 코드들의 실행문이 모두 한줄이어서 보통 축약형으로 작성함
        // fetch('http://mrhi2021.dothome.co.kr/index.js')
        // .then(res=>res.text()).then(resText=>this.setState({text:resText}));

        //3. JSON문서 파싱하기 [open API]
        // 공공 open API들은 json문서가 많음.

        //3.1 우선 facebook에서 샘플로 제공하는 json파일 이용해보기
        // json데이터를 문자열로 가져오기
        // fetch('https://reactnative.dev/movies.json')
        // .then(res=>res.text())
        // .then(resText=>this.setState({text:resText}));

        // 글씨로 받으면 그 string데이터 다시 JSON객체로
        // 파싱하는 작업을 직접 해야해서 번거로움
        // 애초에 JSON객체로 변환해주면 더 작업이 쉬움.
        // fetch('https://reactnative.dev/movies.json')
        // .then( (res)=>{
        //     //응답객체로부터 결과를 json으로 파싱해달라고 요청하고 그 결과를 리턴
        //     return res.json();
        // })
        // .then(  (json)=>{
        //     //파싱된 json객체의 값들을 얻어오기
        //     let title= json.title;  //json문자열의 "title"키를 가진 데이터의 값
        //     this.setState({text: title});

        //     //이런 식으로 데이터를 가져올 수 있음,
        //     // movies.json의 "movies"프로퍼티의 배열데이터들이 영화리스트 데이터 배열이니
        //     // 이를 this.state의 멤버에 저장하여 화면에 표시
        //     this.setState({movies: json.movies});
        // });


        //4. 서버스크립트인 php와 HTTP Request하기
        //4.1 [GET]방식- 보낼데이터를 url뒤에 ?하고 전달
        // let name="sam";
        // let msg="Hello RN";
        // fetch(`http://mrhi2021.dothome.co.kr/getMethod.php?name=aaa&msg=bbb`)        
        // .then(res=>res.text()).then(text=>this.setState({text: text})).catch(error=>alert(error));

        //4.2 [POST]방식- 보낼데이터를 별도로 보내기

        // let name="robin";
        // let msg="Nice to meet you.";
        // let data= `name=${name}&msg=${msg}`;//보낼데이터

        // fetch('http://mrhi2021.dothome.co.kr/postMethod.php',{
        //     method:'POST',
        //     headers:{
        //         "Content-Type":"application/x-www-form-urlencoded"
        //     },
        //     body: data,
        // })        
        // .then(res=>res.text()).then(text=>this.setState({text}));


        //4.3 HTTP통신할때 서버로부터 응답데이터를 json을 받으면 항목구분이 편하듯이
        // post로 데이터를 보낼때도 json만들어서 보내면 더 수월함.
        // JS의 객체를 json문자열로 변환하기가 쉬워서 [ JSON.stringity() ]

        //보낼데이터를 객체
        let dataObj= {name:'son', msg:'Hello fetch', age:20};

        fetch('http://mrhi2021.dothome.co.kr/jsonRequest.php', {
            method:'POST',
            headers:{
                "Content-Type":"application/json" //보낼데이터가 json임을 헤더에 설정
            },
            body: JSON.stringify(dataObj), //JS객체 --> json문자열
        })
        .then( res=> res.text() )        
        .then( text=> this.setState({text}) );
        

    }

}

const style= StyleSheet.create({
    root:{
        flex:1,
        padding:16,
    }
});