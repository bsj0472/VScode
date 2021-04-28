import React, {Component} from 'react';
import {View, Image, Button, TouchableHighlight, Alert, TouchableOpacity, TouchableNativeFeedback, Text, ScrollView, ImageBackground} from 'react-native';

//클래스를 정의하면서 곧바로 export default 선언
export default class MainComponent extends Component{

    //아주 특별한 멤버변수 [state : 화면에 영향을 주는 변수]
    state={
        img: require('./image/moana02.jpg'),
        imgs: [
            require('./image/moana01.jpg'),
            require('./image/moana02.jpg'),
            require('./image/moana03.jpg'),
            require('./image/moana04.jpg'),
            require('./image/moana05.jpg'),
            {uri:'https://cdn.pixabay.com/photo/2015/11/03/10/23/watercolor-1020509_1280.jpg'},
            {uri:'https://cdn.pixabay.com/photo/2015/04/25/12/39/girls-739071_1280.jpg'}
        ],
        imgNum:0, //보여줄 이미지를 가진 배열의 인덱스번호
    };

    render(){
        return (
            <View style={{flex:1,}}>
                {/* 이미지의 사이즈는 style속성으로 지정 */}
                {/* <Image 
                    style={{width:200, height:150}}
                    source={require('./image/moana01.jpg')}>
                </Image> */}

                {/* 네트워트 이미지 보여주기*/}
                {/* require()는 프로젝트폴더안에 이미지가 있을 경우 */}
                {/* 네트워크 이미지는 {uri:'경로'}리터럴 객체로 지정해야 함 */}
                {/* 네트워크 이미지는 반드시 width, height이 명시적으로 지정되야만 함 */}                
                {/* <Image
                    style={{width:200, height:150, resizeMode:'cover'}}
                    source={ {uri:'https://cdn.pixabay.com/photo/2016/07/11/15/43/woman-1509956_1280.jpg'} }>                    
                </Image> */}
                {/* <Button onPress={this.clickBtn} title="change image"></Button>
                <Image
                    style={{width:200, height:150}}
                    source={ this.state.img }>
                </Image> */}

                {/* 이미지에 클릭이벤트 처리 : Image컴포넌트는 onPress속성을 통해 처리할 수 없음.*/}
                {/* 클릭이벤트에 반응하는 TouchableXXX 컴포넌트로 감싸야 함. */}
                {/* <TouchableHighlight onPress={this.clickImage} style={{width:208, padding:4}}>                
                    <Image
                        style={{width:200, height:150}}
                        source={require('./image/moana04.jpg')}></Image>
                </TouchableHighlight> */}

                {/* <TouchableOpacity onPress={this.clickImage} style={{width:208, padding:4}}>
                    <Image
                        style={{width:200, height:150}}
                        source={require('./image/moana04.jpg')}></Image>
                </TouchableOpacity> */}

                {/* 안드로이드의 클릭효과(물결효과) */}
                {/* <TouchableNativeFeedback
                    onPress={this.clickImage}
                    background={TouchableNativeFeedback.SelectableBackground()}>

                    <View style={{marginTop:16, width:310, height:200, backgroundColor:'lightblue', alignSelf:'center', alignItems:'center', borderRadius:8, paddingTop:8}}>
                        <Text style={{fontWeight:'bold', marginBottom:8}}>MOANA</Text>
                        <Image
                            style={{width:300, height:150, resizeMode:'cover'}}
                            source={require('./image/moana05.jpg')}></Image>
                    </View>                    

                </TouchableNativeFeedback> */}

                {/* 이미지가 많으면 스크롤이 필요 */}
                {/* <ScrollView>
                    <Image source={require('./image/moana01.jpg')} style={imgStyle}></Image>
                    <Image source={require('./image/moana02.jpg')} style={imgStyle}></Image>
                    <Image source={require('./image/moana03.jpg')} style={imgStyle}></Image>
                    <Image source={require('./image/moana04.jpg')} style={imgStyle}></Image>
                    <Image source={require('./image/moana05.jpg')} style={imgStyle}></Image>
                </ScrollView> */}

                {/* 배경이미지적용하기- css에서의 background-image 없음 */}
                {/* 즉, style로 배경이미지 지정 불가. ImageBackground컴포넌트를 사용 */}
                <ImageBackground
                    source={{uri:'https://cdn.pixabay.com/photo/2016/07/11/15/43/woman-1509956_1280.jpg'}}
                    style={{width:'100%', height:'100%'}}>

                    <Text>Hello</Text>    
                    <Text>This is image background test</Text>

                    {/* 이미지를 클릭할때 마다 여러이미지가 순차적으로 변경 */}
                    <TouchableOpacity onPress={this.changeImage}>
                        <Image source={this.state.imgs[this.state.imgNum]} style={imgStyle}></Image>
                    </TouchableOpacity>

                </ImageBackground>

            </View>            
        );
    }

    changeImage=()=>{
        let num= this.state.imgNum;
        num++;
        if(num>6) num=0;
        this.setState({imgNum: num});
    }

    clickImage=()=>{
        Alert.alert('clicked image');
    }

    clickBtn= ()=>{
        this.setState({img:require('./image/moana03.jpg')});        
    }
}

const imgStyle={ height:400, width:350, margin:16, alignSelf:'center', borderRadius:8}

