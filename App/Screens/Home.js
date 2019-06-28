import React from "react";
import {
    Container, Item, Content, Input, Fab,
} from "native-base";

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {FlatList, RefreshControl, View, ActivityIndicator} from "react-native";
import Box from '../Components/Box';
import HeaderMenu from '../Components/HeaderMenu'
import {getNotes} from '@Apis'
import color from "../Helper/Color";
import styles from './Home.style';

export default class HomeScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            active: 'true',
            widthScrren: null,
            heightScreen: null,
            maxBox: null,
            data: [],
            isFetching: false
        };
    }

    componentDidMount() {
        this.getNotesApi();
    }

    getNotesApi() {
        getNotes().then(respons => {
            this.setState({data: respons.data.values});
        }).catch(e => {
            console.log(e)
        })
    }

    render() {
        const {navigate} = this.props.navigation;
        if (this.state.isFetching) {
            return (
                <View style={{flex: 1, paddingTop: 90}}>
                    <ActivityIndicator/>
                </View>
            )
        }
        return (
            <Container onLayout={this._onLayout}>
                <HeaderMenu
                    leftPress={() => this.props.navigation.openDrawer()}
                    title="Note App"
                    optionIcon='home'
                />
                <Item rounded style={styles.search}>
                    <Input placeholder='Search...'/>
                </Item>
                <Content
                    contentContainerStyle={{flex: 1, alignItems: 'center'}}
                    onLayout={this._onLayout}>
                    <FlatList
                        style={styles.flatList}
                        data={this.state.data}
                        horizontal={false}
                        numColumns={2}
                        keyExtractor={(item, index) => item.id.toString()}
                        renderItem={({item, index}) =>
                            <Box
                                time={item.time.split('T')[0]}
                                title={item.title}
                                category={item.name_category}
                                note={item.note}
                                bgColor={color()}
                                textColor="white"
                                onPress={() => navigate('EditNote', {
                                    id: item.id,
                                    title: item.title,
                                    category: item.id_category,
                                    note: item.note,
                                })}
                            />
                        }
                        refreshControl={
                            <RefreshControl
                                refreshing={this.state.isFetching}
                                onRefresh={this.getNotesApi.bind(this)}/>
                        }
                    />
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