import React from "react";
import {
    Container, Header, Left, Body, Right,
    Button, Title, Item, Card, CardItem,
    Content, Input, Text, Fab,
} from "native-base";

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {View, TouchableOpacity} from "react-native";
import Menu, {MenuItem} from 'react-native-material-menu';
import Box from '../Components/Box';
import EditNote from "./EditNote";

export default class HomeScreen extends React.Component {
    _menu = null;

    constructor(props) {
        super(props);
        this.state = {
            active: 'true'
        };
        const navigate = this.props.navigate;
    }

    setMenuRef = ref => {
        this._menu = ref;
    };

    hideMenu = () => {
        this._menu.hide();
    };

    showMenu = () => {
        this._menu.show();
    };

    render() {
        const {navigate} = this.props.navigation;
        return (
            <Container>
                <Header style={{backgroundColor: '#ffffff'}}>
                    <Left>
                        <TouchableOpacity
                            transparent
                            onPress={() => this.props.navigation.openDrawer()}>
                            <Icon color="black" size={25} name="menu"/>
                        </TouchableOpacity>
                    </Left>
                    <Body>
                        <Title style={{color: 'black'}}>Note App</Title>
                    </Body>
                    <Right>
                        <Menu
                            ref={this.setMenuRef}
                            button={<Icon color="black" size={25} onPress={this.showMenu} name="sort-descending"/>}
                        >
                            <MenuItem onPress={this.hideMenu}>Asc</MenuItem>
                            <MenuItem onPress={this.hideMenu}>Desc</MenuItem>
                        </Menu>
                    </Right>
                </Header>
                <Item rounded style={styles.search}>
                    <Input placeholder='Search...'/>
                </Item>
                <Content padder>
                    <View style={styles.content}>
                        <Box time="2019" title="Judul" category="Kategori 1" note="Hari ini makan 1" color="white"
                             onPress={() => navigate('EditNote')}/>
                        <Box time="2019" title="Judul" category="Kategori 2" note="Hari ini makan 1" color="white"
                             onPress={() => navigate('EditNote')}/>
                        <Box time="2019" title="Judul" category="Kategori 3" note="Hari ini makan 1" color="white"
                             onPress={() => navigate('EditNote')}/>
                        <Box time="2019" title="Judul" category="Kategori 4" note="Hari ini makan 1" color="white"
                             onPress={() => navigate('EditNote')}/>
                        <Box time="2019" title="Judul" category="Kategori 5" note="Hari ini makan 1" color="white"
                             onPress={() => navigate('EditNote')}/>
                    </View>
                </Content>
                <Fab
                    active={this.state.active}
                    direction="up"
                    containerStyle={{}}
                    style={{backgroundColor: '#ffffff'}}
                    position="bottomRight"
                    onPress={() => this.props.navigation.navigate('AddNote')}>
                    <Icon name="plus" style={{color: 'black'}}/>
                </Fab>
            </Container>
        );
    }
}

const styles = {
    search: {
        marginTop: 20,
        marginRight: 20,
        marginLeft: 20,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.20,
        shadowRadius: 1.41,

        elevation: 2,
    },
    content: {
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    headerText: {
        fontSize: 20,
        margin: 10,
        fontWeight: "bold"
    },
    menuContent: {
        color: "#000",
        fontWeight: "bold",
        padding: 2,
        fontSize: 20
    }
};

function colorBg() {
    let colorArray = [];

    for (let i = 0; i < 3; i++) {
        colorArray.push(Math.floor(Math.random() * (255 - 0) + 0));
    }
    // rgb -> hex
    let color = colorArray
        .map(x => x.toString(16))
        .join('');
    return `#${color}`;

}

