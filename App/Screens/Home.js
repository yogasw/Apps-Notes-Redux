import React, {Component} from "react";
import {Container, Content, Fab, Input, Item,} from "native-base";

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {ActivityIndicator, Alert, FlatList, RefreshControl, View} from "react-native";
import Box from '../Components/Box';
import HeaderMenu from '../Components/HeaderMenu'
import color from "../Helper/Color";
import styles from './Home.style';
import {deleteNote, getNotes} from "../Services/Redux/action/notes";
import {connect} from 'react-redux';

class HomeScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            active: 'true',
            widthScrren: null,
            heightScreen: null,
            maxBox: null,
            data: [],
            search: '',
            sort: 'desc',
        };
    }

    componentDidMount() {
        this.getNotesApi();
    }

    getNotesApi(search = this.state.search, sort = this.state.sort, page = 1) {
        this.props.dispatch(getNotes(search, sort, page, this.props.notes.searchBy));
    }

    deleteNoteApi(id) {
        console.log(id);
        Alert.alert("Alert", 'Are you sure to delete note : ' + id, [
            {
                text: 'cancel'
            },
            {
                text: 'ok',
                onPress: () => {
                    this.props.dispatch(deleteNote(id));
                }
            }
        ]);
    }

    keyExtractor = item => {
        return item.id.toString() + new Date().getTime().toString() + (Math.floor(Math.random() * Math.floor(new Date().getTime()))).toString();
    };

    render() {
        const {navigate} = this.props.navigation;
        if (this.props.notes.isLoading) {
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
                        this.getNotesApi('', sort, 1)
                    }}
                />
                <Item rounded style={styles.search}>
                    <Input
                        onSubmitEditing={() => this.getNotesApi(this.state.search, null, 1)}
                        defaultValue={this.state.search}
                        onChangeText={(search) => this.setState({search})}
                        placeholder='Search...'/>
                </Item>
                <Content
                    contentContainerStyle={{flex: 1, alignItems: 'center'}}
                    onLayout={this._onLayout}>
                    <FlatList
                        style={styles.flatList}
                        data={this.props.notes.data}
                        horizontal={false}
                        numColumns={2}
                        keyExtractor={this.keyExtractor}

                        renderItem={({item, index}) =>
                            <Box
                                time={item.time.split('T')[0]}
                                title={item.title}
                                category={item.name_category}
                                note={item.note}
                                bgColor={color(item.id_category)}
                                textColor="white"
                                longPress={() => this.deleteNoteApi(item.id)}
                                onPress={() => navigate('EditNote', {
                                    id: item.id,
                                    title: item.title,
                                    category: item.id_category,
                                    note: item.note,
                                })}
                            />
                        }
                        onEndReached={() => {
                            if (this.props.notes.amountsNote < this.props.notes.amountsNoteApi) {
                                this.getNotesApi(this.state.search, '', this.props.notes.nextPage);
                            }
                        }}
                        onEndReachedThreshold={0.1}
                        refreshControl={
                            <RefreshControl
                                refreshing={this.props.notes.isLoading}
                                onRefresh={() => this.getNotesApi('', '', 1)}
                            />
                        }
                    />
                </Content>

                <Fab
                    active={this.state.active}
                    direction="up"
                    containerStyle={{}}
                    style={{backgroundColor: '#ffffff'}}
                    position="bottomRight"
                    onPress={() =>
                        this.props.navigation.navigate('AddNote')
                    }>
                    <Icon name="plus" style={{color: 'black'}}/>
                </Fab>
            </Container>
        );
    }
}

const mapsStageToProps = (state) => {
    return {
        notes: state.notes
    }
};

export default connect(mapsStageToProps)(HomeScreen)
