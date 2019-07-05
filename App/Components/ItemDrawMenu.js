import React, {PureComponent} from "react";
import {Text, TouchableOpacity, View,} from "react-native";
import Icon from 'react-native-vector-icons/MaterialIcons';


class ItemDrawMenu extends PureComponent {

    render() {
        const {icon, title, marginTop, isPress, longPress, routeName, activeMenu} = this.props;
        let status = (routeName == activeMenu) ? 'active' : 'nonactive';

        return (
            <TouchableOpacity
                delayLongPress={1700}
                onLongPress={() => longPress()}
                onPress={() => isPress(routeName)}
            >
                <View style={[styles.containerDrawCategory,
                    {
                        marginTop: marginTop || 5,
                        backgroundColor: ((status == 'active') ? 'gray' : 'white'),
                    }]}>
                    <Icon name={icon || 'account-circle'} size={20} style={[styles.drawIcon,
                        {color: ((status == 'active') ? 'white' : 'gray')}
                    ]}
                    />
                    <Text
                        style={[styles.drawCategory, {
                        color: ((status == 'active') ? 'white' : 'gray')
                    }]}>
                        {title || 'defaultTitle'}
                    </Text>
                </View>
            </TouchableOpacity>
        );
    }
}

const styles = {
    containerDrawCategory: {
        flexDirection: 'row',
        paddingTop: 5,
        paddingBottom: 5,
    },
    drawIcon: {
        paddingRight: 15,
    },
    drawCategory: {
        fontSize: 17,
        fontWeight: 'bold',
    },

};
export default ItemDrawMenu;