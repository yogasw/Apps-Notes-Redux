import React, {Component} from 'react';
import {Header, Title} from "native-base";
import {Image, TouchableOpacity, View} from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import Menu, {MenuItem} from "react-native-material-menu";


class HeaderMenu extends Component {
    _menu = null;

    constructor(props) {
        super(props);
        this.state = {
            active: 'true'
        };
    }
    setMenuRef = ref => {
        this._menu = ref;
    };

    hideMenu = () => {
        this._menu.hide();
    };

    showMenu = () => {
        this._menu.show();
    };

    render() {
        const {title, optionIcon, optionColor, optionPress, leftIcon, leftPress} = this.props;
        return (
            <Header style={{backgroundColor: '#ffffff', justifyContent: 'space-between', alignItems: 'center'}}>
                <View>
                    {
                        optionIcon == 'home' ? (
                            <TouchableOpacity
                                transparent
                                onPress={leftPress}>
                                <Image source={require('../Assets/icon.jpg')}
                                       style={{width: 30, height: 30, borderRadius: 100}}/>
                            </TouchableOpacity>
                        ) : (
                            <TouchableOpacity
                                transparent
                                onPress={leftPress || {}}>
                                <Icon color="black" size={25} name={leftIcon || "keyboard-backspace"}/>
                            </TouchableOpacity>
                        )
                    }
                </View>
                <View>
                    <Title style={{color: 'black'}}>{title || 'Title Default'}</Title>
                </View>
                <View>
                    {
                        optionIcon == 'home' ?
                            (<Menu
                                ref={this.setMenuRef}
                                button={<Icon color="black" size={25} onPress={this.showMenu} name="sort-descending"/>}>
                                <MenuItem onPress={this.hideMenu}>Asc</MenuItem>
                                <MenuItem onPress={this.hideMenu}>Desc</MenuItem>
                            </Menu>)
                            :
                            (<Icon color={optionColor || 'black'} size={25} onPress={optionPress}
                                   name={optionIcon || 'home'}/>)
                    }

                </View>
            </Header>
        );
    }
}

export default HeaderMenu;