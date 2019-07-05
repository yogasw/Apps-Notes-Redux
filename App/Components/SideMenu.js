import PropTypes from 'prop-types';
import React, {Component} from 'react';
import styles from './SideMenu.style';
import {Alert, Image, Modal, ScrollView, Text, TouchableOpacity, View} from 'react-native';
import ItemDrawMenu from './ItemDrawMenu';
import PopupCategory from '../Components/AddCategoryModal';
import Icon from "react-native-vector-icons/MaterialIcons";
import {deleteCategories, getCategories, getNotes} from '../Services/Redux/action/notes';
import {connect} from 'react-redux';
import {reset, search, searchBy, sortBy} from "../Services/Redux/action/config";

class SideMenu extends Component {
    constructor() {
        super();
        this._isPress = this._isPress.bind(this);
        this._isPressCategories = this._isPressCategories.bind(this);
        this.state = {
            onMenu: 'Home',
            isModalVisible: false,
            listCategories: []
        }
    }

    componentDidMount = () => {
        this.getCategoriesApi();
    }

    getCategoriesApi = () => {
        this.props.dispatch(getCategories());
    }

    getNotesApi(search, sort, page, by) {
        if (search == '') search = this.props.notes.search;
        if (sort == '') search = this.props.notes.sortBy;
        if (page == '') search = 1;

        this.props.dispatch(getNotes(search, sort, page, by));
    }

    _isPress = (route) => {
        this.state.onMenu = route;
        this.props.dispatch(searchBy('title'));
        this.props.navigation.closeDrawer();
        this.props.navigation.navigate(route);
    };
    _isPressHome = () => {
        this.state.onMenu = 'Home';
        this.props.dispatch(reset());
        this.getNotesApi();
        this.props.navigation.closeDrawer();
    };
    _isPressCategories = (route) => {
        this.state.onMenu = route;

        this.props.dispatch(search(route));
        this.props.dispatch(searchBy('id_category'));
        this.props.dispatch(sortBy('desc'));

        this.props.dispatch(getNotes(route, 'desc', 1, 'id_category'));

        this.props.navigation.closeDrawer();
    }

    changeModalVisibilty = (bool) => {
        if (bool) this.props.navigation.closeDrawer();
        this.setState({isModalVisible: bool});
    };

    longPress = (id) => {
        Alert.alert('Alert', 'Are you sure to delete category', [
            {
                text: 'cancel'
            }, {
                text: 'ok',
                onPress: () => {
                    this.props.navigation.closeDrawer();
                    this.props.dispatch(deleteCategories(id));
                }
            }
        ]);
    }

    render() {
        return (
            <View style={styles.container}>
                <ScrollView>
                    <View style={styles.navItemStyle}>
                        <Image source={require('../Assets/icon.jpg')} style={styles.logo}/>
                        <Text style={styles.drawName}>Yoga Setiawan</Text>

                        <ItemDrawMenu title="Home" icon="home" isPress={this._isPressHome} routeName="Home"
                                      activeMenu={this.state.onMenu}/>
                        {
                            this.props.notes.categories.map((item, key, array) =>
                                (
                                    <ItemDrawMenu title={item.name}
                                                  icon="list"
                                                  isPress={this._isPressCategories}
                                                  longPress={() => {
                                                      this.longPress(item.id)
                                                  }}
                                                  routeName={item.id}
                                                  key={item.id}
                                                  activeMenu={this.state.onMenu}/>
                                )
                            )
                        }
                        <TouchableOpacity onPress={() => this.changeModalVisibilty(true)}>
                            <View style={{
                                flexDirection: 'row',
                                paddingTop: 15,
                                paddingBottom: 5,
                            }}>
                                <Icon name='control-point' size={20} style={{
                                    color: 'gray',
                                    paddingRight: 15,
                                }}/>
                                <Text style={{
                                    color: 'gray',
                                    fontSize: 17,
                                    fontWeight: 'bold',
                                }}>
                                    Add Category
                                </Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
                <Modal
                    animationType="fade"
                    transparent={true}
                    visible={this.state.isModalVisible}
                    onRequestClose={() => this.changeModalVisibilty(false)}>
                    <PopupCategory changeModalVisibilty={this.changeModalVisibilty}/>
                </Modal>
            </View>
        );
    }
}

SideMenu.propTypes = {
    navigation: PropTypes.object
};
const MapsStateToProps = (state) => {
    return {
        notes: state.notes
    }
}

export default connect(MapsStateToProps)(SideMenu);