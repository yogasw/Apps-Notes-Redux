import PropTypes from 'prop-types';
import React, {Component} from 'react';
import styles from './SideMenu.style';
import {NavigationActions} from 'react-navigation';
import {Image, ScrollView, Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

class SideMenu extends Component {
    navigateToScreen = (route) => () => {
        const navigateAction = NavigationActions.navigate({
            routeName: route
        });
        this.props.navigation.dispatch(navigateAction);
    };

    render() {
        return (
            <View style={styles.container}>
                <ScrollView>
                    <View style={styles.navItemStyle}>
                        <Image source={require('../Assets/icon.jpg')} style={styles.logo}/>
                        <Text style={styles.drawName}>Yoga Setiawan</Text>

                        <View style={styles.containerDrawCategory}>
                            <Icon name={'account-circle'} size={20} style={styles.drawIcon}/>
                            <Text style={styles.drawCategory}>
                                Personal
                            </Text>
                        </View>
                        <View style={styles.containerDrawCategory}>
                            <Icon name={'work'} size={20} style={styles.drawIcon}/>
                            <Text style={styles.drawCategory}>Work</Text>
                        </View>
                        <View style={styles.containerDrawCategory}>
                            <Icon name={'list'} size={20} style={styles.drawIcon}/>
                            <Text style={styles.drawCategory}>Wishlist</Text>
                        </View>

                        <View style={styles.containerAddDrawCategory}>
                            <Icon name={'control-point'} size={20} style={styles.drawIcon}/>
                            <Text style={styles.drawAddCategory} onPress={this.navigateToScreen('AddNote')}>Add
                                Category</Text>
                        </View>

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