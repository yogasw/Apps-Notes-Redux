import React from "react";
import {
    Container, Left, Body, Right,
    Button, Title, Item, Card, CardItem,
    Content, Input, Text, Fab, Header,
} from "native-base";

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {View, FlatList} from "react-native";
import Box from '../Components/Box';
import EditNote from "./EditNote";
import HeaderMenu from '../Components/HeaderMenu'

export default class HomeScreen extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            active: 'true',
            dummyData: [
                {
                    title: 'Note 1',
                    category: 'Note 1',
                    note: 'tanggal',
                    date: 'tanggal'
                },
                {
                    title: 'Note 1',
                    category: 'Note 1',
                    note: 'tanggal',
                    date: 'tanggal'
                },
                {
                    title: 'Note 1',
                    category: 'Note 1',
                    note: 'tanggal',
                    date: 'tanggal'
                },
                {
                    title: 'Note 1',
                    category: 'Note 1',
                    note: 'tanggal',
                    date: 'tanggal'
                },
                {
                    title: 'Note 1',
                    category: 'Note 1',
                    note: 'tanggal',
                    date: 'tanggal'
                },
                {
                    title: 'Note 1',
                    category: 'Note 1',
                    note: 'tanggal',
                    date: 'tanggal'
                },
                {
                    title: 'Note 1',
                    category: 'Note 1',
                    note: 'tanggal',
                    date: 'tanggal'
                },
                {
                    title: 'Note 1',
                    category: 'Note 1',
                    note: 'tanggal',
                    date: 'tanggal'
                },
                {
                    title: 'Note 1',
                    category: 'Note 1',
                    note: 'tanggal',
                    date: 'tanggal'
                },
                {
                    title: 'Note 1',
                    category: 'Note 1',
                    note: 'tanggal',
                    date: 'tanggal'
                },
                {
                    title: 'Note 1',
                    category: 'Note 1',
                    note: 'tanggal',
                    date: 'tanggal'
                },
                {
                    title: 'Note 1',
                    category: 'Note 1',
                    note: 'tanggal',
                    date: 'tanggal'
                },
                {
                    title: 'Note 1',
                    category: 'Note 1',
                    note: 'tanggal',
                    date: 'tanggal'
                }
            ]
        }
    }

    render() {
        const {navigate} = this.props.navigation;
        return (
            <Container>
                <HeaderMenu
                    leftPress={() => this.props.navigation.openDrawer()}
                    title="Note App"
                    optionIcon='home'
                />
                <Item rounded style={styles.search}>
                    <Input placeholder='Search...'/>
                </Item>
                <Content padder>
                    <View style={styles.content}>
                        <FlatList
                            data={this.state.dummyData}
                            numColumns={2}
                            renderItem={({item}) =>
                                <Box time="2019" title="Judul" category="Kategori 1" note="Hari ini makan 1"
                                     bgColor={colorBg()}
                                     textColor="white"
                                     onPress={() => navigate('EditNote')}
                                />
                            }
                        />
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
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
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
    let color = ['e57373', 'F06292', 'BA68C8', '9575CD', '7986CB', '64B5F6'];
    let ukuran = Math.floor(Math.random() * 5) + 0;
    return `#${color[ukuran]}`;

}

