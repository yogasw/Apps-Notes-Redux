import React, {PureComponent} from "react";
import {Image, Text, TouchableOpacity, View,} from "react-native";
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
                    {(icon == 'home') ?
                        <Icon name={icon || 'account-circle'} size={20} style={[styles.drawIcon,
                            {color: ((status == 'active') ? 'white' : 'gray')}
                        ]}
                        />
                        : <Image source={{uri: icon}} style={styles.drawImage}/>
                    }
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
        marginRight: 15,
    },
    drawImage: {
        marginRight: 15,
        borderWidth: 0,
        width: 20,
        height: 20,
        backgroundColor: '#fff',
        borderRadius: 100,
        alignSelf: 'center'
    },
    drawCategory: {
        fontSize: 17,
        fontWeight: 'bold',
    },

};
export default ItemDrawMenu;