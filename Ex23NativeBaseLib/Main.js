import React, {Component} from 'react';
// Native Base Library의 컴포넌트들 사용하기
import {Body, Button, Card, CardItem, Container, Content, Footer, FooterTab, Header, Icon, Left, Right, Text, Thumbnail, Title} from 'native-base';
//Image컴포넌트는 NativeBase에 없음
import {Image} from 'react-native';

// Native Base Library는 link 까지 하는게 온전히 기능 사용가능
// $ npm install native-base --save
// $ npx react-native link 

export default class Main extends Component{
    render(){
        return (
            // Container컴포넌트 : 높이가 자동 flex:1 인 View
            // Container는 사실 ScrollView로 만든 것임
            <Container style={{backgroundColor:'lightyellow'}}>
                {/* 크게 화면을 3개영역으로 구성하는 것이 일반적임 */}
                {/* 1. 액션바(헤더바) 영역 */}
                <Header>
                    {/* 헤더영역도 크게 3개영역으로 구성 */}
                    <Left>
                        <Button>
                            <Icon type="FontAwesome" name="bars"></Icon>
                        </Button>                                                
                    </Left>

                    <Body style={{marginLeft:8,}}>
                        <Title>Native Base</Title>
                    </Body>

                    <Right>
                    </Right>
                </Header>

                {/* 2. 콘텐츠 영역 */}
                <Content padder>
                    <Button info>
                        <Text>Click Me!</Text>
                    </Button>

                    <Button warning bordered>
                        <Text>Click Me!</Text>
                    </Button>

                    <Button danger transparent>
                        <Text>Click Me!</Text>
                    </Button> 

                    <Button dark rounded>
                        <Text>Click Me!</Text>
                    </Button>

                    <Button light block>
                        <Text>Click Me!</Text>
                    </Button>

                    <Button iconLeft style={{alignSelf:'center'}}>
                        <Icon type="FontAwesome" name="home"></Icon>
                        <Text>Home</Text>
                    </Button> 

                    {/* 카드모양 컴포넌트*/}
                    <Card>
                        <CardItem>
                            <Left>
                                <Thumbnail source={{uri: 'https://cdn.pixabay.com/photo/2016/07/11/15/43/woman-1509956_1280.jpg'}} />
                                <Body>
                                    <Text>NativeBase</Text>
                                    <Text note>GeekyAnts</Text>
                                </Body>
                            </Left>
                        </CardItem>
                        <CardItem cardBody>
                        <Image source={{uri: 'https://cdn.pixabay.com/photo/2016/07/11/15/43/woman-1509956_1280.jpg'}} style={{height: 200, width: null, flex: 1}}/>
                        </CardItem>
                        <CardItem>
                        <Left>
                            <Button transparent>
                            <Icon active name="thumbs-up" />
                            <Text>12 Likes</Text>
                            </Button>
                        </Left>
                        <Body>
                            <Button transparent>
                            <Icon active name="chatbubbles" />
                            <Text>4 Comments</Text>
                            </Button>
                        </Body>
                        <Right>
                            <Text>11h ago</Text>
                        </Right>
                        </CardItem>
                    </Card>


                </Content>

                {/* 3. Footer영역 [Bottom Tab 용으로 사용] */}
                <Footer>
                    <FooterTab>
                        <Button>
                            <Text>TAB1</Text>
                        </Button>
                    </FooterTab>
                    <FooterTab>
                        <Button>
                            <Text>TAB2</Text>
                        </Button>
                    </FooterTab>
                    <FooterTab>
                        <Button>
                            <Text>TAB3</Text>
                        </Button>
                    </FooterTab>
                </Footer>                
            </Container>
        )
    }
}
