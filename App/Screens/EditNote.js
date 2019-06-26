import React from "react";
import {
    Container, Header, Left, Body, Right, Button, Title, Content, Form, Textarea, Picker, Text
} from "native-base";

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import HeaderMenu from "../Components/HeaderMenu";

export default class HomeScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selected: "key1"
        };
    }

    render() {
        return (
            <Container>
                {/*<Header style={{backgroundColor: '#ffffff'}}>
                    <Left>
                        <Button
                            transparent
                            onPress={() => this.props.navigation.navigate("Home")}>
                            <Icon color="black" size={25} name="keyboard-backspace"/>
                        </Button>
                    </Left>
                    <Body>
                        <Title style={{color: 'black'}}>Edit Note</Title>
                    </Body>
                    <Right>
                        <Button
                            transparent
                            onPress={() => {
                                this.props.navigation.navigate('Home')
                            }}>
                            <Icon name="check-circle-outline" color="#3DB39E" size={25}/>
                        </Button>
                    </Right>
                </Header>*/}
                <HeaderMenu
                    leftPress={() => this.props.navigation.navigate("Home")}
                    leftIcon="keyboard-backspace"
                    optionPress={() => this.props.navigation.navigate('Home')}
                    optionIcon='check-circle-outline'
                    title="Edit Note"
                />
                <Content padder>
                    <Form>
                        <Textarea rowSpan={5} placeholder="ADD TITLE ..."/>
                        <Textarea rowSpan={5} placeholder="ADD DESCRIPTION ..."/>
                        <Text style={{color: 'black'}}>CATEGORY</Text>
                        <Picker
                            mode='dropdown'
                            style={{width: 120}}
                            selectedValue={this.state.selected}>
                            <Picker.Item label="Wallet" value="key0"/>
                            <Picker.Item label="Wallet" value="key1"/>
                            <Picker.Item label="Wallet" value="key2"/>
                            <Picker.Item label="Wallet" value="key3"/>
                            <Picker.Item label="Wallet" value="key4"/>
                            <Picker.Item label="Wallet" value="key5"/>
                            <Picker.Item label="Wallet" value="key5"/>
                        </Picker>
                    </Form>
                </Content>
            </Container>
        );
    }
}

