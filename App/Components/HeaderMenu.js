import React, {Component} from 'react';
import {Body, Left, Right, Title} from "native-base";
import {TouchableOpacity} from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import Menu, {MenuItem} from "react-native-material-menu";
import {Header} from 'native-base';


class HeaderMenu extends Component {
    _menu = null;

    constructor(props) {
        super(props);
        this.state = {
            active: 'true'
        };
        const navigate = this.props.navigate;
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
        return (
            <Header style={{backgroundColor: '#ffffff'}}>
                <Left>
                    <TouchableOpacity
                        transparent
                        onPress={() => this.props.navigation.openDrawer()}>
                        <Icon color="black" size={25} name="menu"/>
                    </TouchableOpacity>
                </Left>
                <Body>
                    <Title style={{color: 'black'}}>Note App</Title>
                </Body>
                <Right>
                    <Menu
                        ref={this.setMenuRef}
                        button={<Icon color="black" size={25} onPress={this.showMenu} name="sort-descending"/>}
                    >
                        <MenuItem onPress={this.hideMenu}>Asc</MenuItem>
                        <MenuItem onPress={this.hideMenu}>Desc</MenuItem>
                    </Menu>
                </Right>
            </Header>
        );
    }
}

export default HeaderMenu;