import React from "react";
import {
    Container, Item, Content, Input, Fab,
} from "native-base";

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {FlatList, RefreshControl, View, ActivityIndicator, AlertStatic as Alert} from "react-native";
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
            isFetching: false,
            search: '',
            sort: 'desc'
        };
        this.getNotesApi = this.getNotesApi.bind(this);
    }
    componentDidMount() {
        this.getNotesApi();
    }

    getNotesApi(search = '', sort = '') {

        console.log("search : " + search + " sort : " + sort);
        getNotes(search, sort).then(respons => {
            if (respons.data.status == '200') {
                this.setState({
                    data: respons.data.values,
                    isFetching: false
                });
            } else {
                this.setState({data: [], isFetching: false});
            }
        }).catch(e => {
            this.setState({data: [], isFetching: false});
            console.log(e)
        })
    }
    deleteNoteApi() {
        Alert.alert("Alert", 'Are you sure to delete note', [
            {
                text: 'cancel'
            },
            {
                text: 'ok',
                onPress: () => {
                    deleteNote().then(respons => {
                        Alert.alert('Note Deleted');
                    }).catch(e => {
                        Alert.alert('Delete data from api failed');
                        console.log(e);
                    })
                }
            }
        ]);
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
                    sort={(search, sort) => {
                        this.getNotesApi(this.state.search, sort)
                    }}
                />
                <Item rounded style={styles.search}>
                    <Input
                        onSubmitEditing={() => this.getNotesApi(this.state.search)}
                        onChangeText={(search) => this.setState({search})}
                        placeholder='Search...'/>
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
                                bgColor={color(item.id_category)}
                                textColor="white"
                                longPress={() => console.log("masuk1")}
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