import PropTypes from 'prop-types';
import React, {Component} from 'react';
import styles from './SideMenu.style';
import {NavigationActions} from 'react-navigation';
import {Image, ScrollView, Text, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import ItemDrawMenu from './ItemDrawMenu';

class SideMenu extends Component {
    constructor() {
        super();
        this._isPress = this._isPress.bind(this);
        this.state = {
            activeMenu: 'Home'
        }
    }

    _isPress(route) {
        this.props.navigation.closeDrawer();
        this.props.navigation.navigate(route)
    }

    render() {
        return (
            <View style={styles.container}>
                <ScrollView>
                    <View style={styles.navItemStyle}>
                        <Image source={require('../Assets/icon.jpg')} style={styles.logo}/>
                        <Text style={styles.drawName}>Yoga Setiawan</Text>
                        <ItemDrawMenu title="Home" icon="home" isPress={this._isPress('Home')}/>
                        {/*<ItemDrawMenu title="Personal" icon="account-circle" isPress={this._isPress} />
                        <ItemDrawMenu title="Work" icon="work" isPress={this._isPress} status='active'/>
                        <ItemDrawMenu title="Wishlist" icon="list" isPress={this._isPress} />
                        <ItemDrawMenu title="Add Category" icon="control-point" marginTop={20} isPress={this._isPress}/>*/}
                    </View>
                </ScrollView>

            </View>
        );
    }
}

SideMenu.propTypes = {
    navigation: PropTypes.object
};

export default SideMenu;