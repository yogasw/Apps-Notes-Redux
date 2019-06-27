import React from "react";
import {
    Container, Content, Form, Textarea, Picker, Text
} from "native-base";
import HeaderMenu from "../Components/HeaderMenu";
import {View, Dimensions} from "react-native";

export default class HomeScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selected: "key1",
            widthScrren: null,
            heightScreen: null,
        };

    }

    _onLayout = event => {
        let {width, height} = event.nativeEvent.layout;
        this.state.widthScrren = width;
        this.state.heightScreen = height;
        console.log(this.state.widthScrren);
    }; // width, height, x, y

    render() {
        return (
            <Container onLayout={this._onLayout}>
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
                        <View style={{width: this.state.widthScrren}}>
                            <Picker
                                mode='dropdown'
                                selectedValue={this.state.selected}>
                                <Picker.Item label="Wallet" value="key0"/>
                                <Picker.Item label="Wallet" value="key1"/>
                                <Picker.Item label="Wallet" value="key2"/>
                                <Picker.Item label="Wallet" value="key3"/>
                                <Picker.Item label="Wallet" value="key4"/>
                                <Picker.Item label="Wallet" value="key5"/>
                                <Picker.Item label="Wallet" value="key5"/>
                            </Picker>
                        </View>
                    </Form>
                </Content>
            </Container>
        );
    }
}


