import React,{Component} from 'react';
import {View, Text, FlatList, Image, StyleSheet, TouchableOpacity} from 'react-native';

export default class SmallCatalogList extends Component{

    state={
        data:[], //영화정보들 배열
    }

    render(){
        return (
            <View style={style.container}>
                {/* 서브 타이틀 제목표시 */}
                <Text style={style.title}>{this.props.title}</Text>

                <FlatList                    
                    horizontal={true}
                    data={this.state.data}
                    renderItem={ ( {item, index} )=>{ return (
                        <TouchableOpacity
                            onPress={ ()=>{ this.props.onPress(item.id) } }
                            style={style.item}
                            activeOpacity={0.9}>
                            <Image 
                                source={ {uri:item.medium_cover_image} }
                                style={{width:140, height:200}}></Image>
                        </TouchableOpacity>
                    )} }
                    keyExtractor={ (item, index)=>{return "Small"+index} }>
                </FlatList>
            </View>
        )
    }

    //영화정보 api 정보 읽어오기
    loadData= ()=>{
        fetch(this.props.url)
        .then(res=>res.json()).then(json=>this.setState({data:json.data.movies}))
        //.then(res=>res.text()).then(text=>alert(text));
    }

    componentDidMount(){
        this.loadData();
    }

}

const style= StyleSheet.create({
    container:{marginBottom:8, marginTop:8},
    title:{padding:8, fontSize:16, fontWeight:'bold'},
    item:{paddingLeft:4, paddingRight:4,}
});