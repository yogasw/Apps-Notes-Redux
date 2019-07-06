import React, {Component} from "react";
import {Container, Content, Fab, Input, Item,} from "native-base";

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {Alert, FlatList, RefreshControl} from "react-native";
import Box from '../Components/Box';
import HeaderMenu from '../Components/HeaderMenu'
import color from "../Helper/Color";
import styles from './Home.style';
import {deleteNote, getNotes} from "../Services/Redux/action/notes";
import {connect} from 'react-redux';
import {search, sortBy} from "../Services/Redux/action/config";
import formatTime from '../Helper/FormatTime';
import lodash from 'lodash';

class HomeScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            active: 'true',
            widthScrren: null,
            heightScreen: null,
            maxBox: null,
        };
        this.limitSearch = lodash.debounce(this.getNotesApi, 1500);
    }

    componentDidMount() {
        this.getNotesApi();
    }

    getNotesApi(search, sort, page, by) {
        this.props.dispatch(getNotes(search, sort, page, by));
    }

    deleteNoteApi(id) {
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
        return (
            <Container onLayout={this._onLayout}>
                <HeaderMenu
                    leftPress={() => this.props.navigation.openDrawer()}
                    title="Note App"
                    optionIcon='home'
                    sort={(search, sort) => {
                        this.props.dispatch(sortBy(sort))
                        this.getNotesApi(this.props.notes.search, sort, 1)
                    }}
                />
                <Item rounded style={styles.search}>
                    <Input
                        onSubmitEditing={() => this.getNotesApi(this.props.notes.search, this.props.notes.sortBy, 1)}
                        onChangeText={(text) => {
                            this.props.dispatch(search(text));
                            this.limitSearch(this.props.notes.search, this.props.notes.sortBy, 1);
                        }}
                        value={(this.props.notes.searchBy != 'id_category') ? this.props.notes.search : ''}
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
                                time={formatTime(item.time)}
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
                                this.getNotesApi(this.props.notes.search, this.props.notes.sortBy, this.props.notes.nextPage, this.props.notes.searchBy)
                            }
                        }}
                        onEndReachedThreshold={0.1}
                        refreshControl={
                            <RefreshControl
                                style={{zIndex: 1}}
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
