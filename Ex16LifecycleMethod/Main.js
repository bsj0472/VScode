import React,{Component} from 'react';
import {View, Text, Button} from 'react-native';

export default class Main extends Component{

    state={data:"Hello"};

    //1. 생성자
    constructor(){
        super();

        //log 기록 남기기
        console.log('constructor');        
    }

    //2. 화면에 보여지기 전에 이 컴포넌트 클래스가 화면에 연결되기 전에 호출
    // 버전업되면서 이 메소드는 deprecate 되었음
    //componentWillMount(){}

    //3. 화면을 그려내는 메소드
    render(){
        console.log('render');
        return (
            <View style={{flex:1, padding:16, justifyContent:'center', alignItems:'center'}}>
                <Text>Lifecycle method TEST : {this.state.data}</Text>
                <Button title="button" onPress={ ()=>this.setState({data:"Nice"}) }></Button>
            </View>
        );
    }

    //4. 화면이 그려진 후(render메소드 실행 후) 딱 1번 호출되는 메소드
    componentDidMount(){
        console.warn('component did mount');
        //일반적으로 이 메소드 안에서 화면에 보여줄 대량의 데이터를
        //서버에서 읽어오는 등의 작업을 수행함
        // or 동적퍼미션 요청작업 등도 이 메소드에서 수행함
    }

    //5. render메소드가 실행 된 후 항상 항상 호출되는 메소드 [즉, 화면이 갱신될 때 마다 실행]
    componentDidUpdate(){
        console.log('component did update');
    }

    //6. 컴포넌트가 종료될때 호출되는 메소드[뒤로가기 버튼으로 앱을 종료하면 호출됨]
    componentWillUnmount(){
        console.log('component will unmount');
    }
}