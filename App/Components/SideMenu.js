import PropTypes from 'prop-types';
import React, {Component} from 'react';
import styles from './SideMenu.style';
import {Image, ScrollView, Text, View, TouchableOpacity, Modal} from 'react-native';
import ItemDrawMenu from './ItemDrawMenu';
import PopupCategory from '../Components/AddCategoryModal';
import Icon from "react-native-vector-icons/MaterialIcons";

class SideMenu extends Component {
    constructor() {
        super();
        this._isPress = this._isPress.bind(this);
        this.state = {
            onMenu: 'Home',
            isModalVisible: false
        }
    }

    _isPress(route) {
        this.state.onMenu = route;
        this.props.navigation.closeDrawer();
        this.props.navigation.navigate(route);
    }


    changeModalVisibilty = (bool) => {
        if (bool) this.props.navigation.closeDrawer();
        this.setState({isModalVisible: bool});
    };

    render() {
        return (
            <View style={styles.container}>
                <ScrollView>
                    <View style={styles.navItemStyle}>
                        <Image source={require('../Assets/icon.jpg')} style={styles.logo}/>
                        <Text style={styles.drawName}>Yoga Setiawan</Text>
                        <ItemDrawMenu title="Home" icon="home" isPress={this._isPress} routeName="Home"
                                      activeMenu={this.state.onMenu}/>
                        <ItemDrawMenu title="Personal" icon="account-circle" isPress={this._isPress}
                                      routeName="EditNote" activeMenu={this.state.onMenu}/>
                        <ItemDrawMenu title="Work" icon="work" isPress={this._isPress} routeName="Work"
                                      activeMenu={this.state.onMenu}/>
                        <ItemDrawMenu title="Wishlist" icon="list" isPress={this._isPress} routeName="Wishlist"
                                      activeMenu={this.state.onMenu}/>

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

export default SideMenu;