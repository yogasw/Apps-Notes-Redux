import PropTypes from 'prop-types';
import React, {Component} from 'react';
import styles from './SideMenu.style';
import {Image, ScrollView, Text, View, TouchableOpacity, Modal} from 'react-native';
import ItemDrawMenu from './ItemDrawMenu';
import PopupCategory from '../Components/AddCategoryModal';

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

        console.log("Masuk " + bool)
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
                        <ItemDrawMenu title="Add Category" icon="control-point" marginTop={20} isPress={this._isPress}
                                      routeName="AddNote" activeMenu={this.state.onMenu}/>
                        <ItemDrawMenu title="Pop Category" icon="control-point" marginTop={20} isPress={this._isPress}
                                      routeName="CategoryNote" activeMenu={this.state.onMenu}/>
                        <TouchableOpacity onPress={() => this.changeModalVisibilty(true)}>
                            <Text>Open</Text>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
                <Modal
                    animationType="fade"
                    transparent={true}
                    visible={this.state.isModalVisible}
                    onRequestClose={() => this.changeModalVisibilty(false)}>

                    <PopupCategory/>
                </Modal>
            </View>
        );
    }
}

SideMenu.propTypes = {
    navigation: PropTypes.object
};

export default SideMenu;