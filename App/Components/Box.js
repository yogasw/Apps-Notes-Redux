import React, {PureComponent} from 'react';
import {Text} from "native-base";
import {StyleSheet, TouchableOpacity, View} from "react-native";

class Box extends PureComponent {

    initStyle = () => {
        if (this.props.bgColor != null || this.props.bgColor != undefined) {
            this.bgColor = this.props.bgColor;
        }
        if (this.props.textColor != null || this.props.textColor != undefined) {
            this.textColor = this.props.textColor;
        }
    };

    render() {
        this.initStyle();
        const {id, time, title, category, note, longPress, onPress} = this.props;

        return (
            <TouchableOpacity
                delayLongPress={1700}
                onLongPress={longPress}
                onPress={onPress}
            >
                <View style={[styles.box, {
                    backgroundColor: this.bgColor || 'orange',
                }]}>
                    <Text
                        numberOfLines={1}
                        style={[styles.date, {
                            color: this.textColor || 'white'
                    }]} right>{time}</Text>
                    <Text
                        numberOfLines={1}
                        style={[styles.title, {
                        color: this.textColor || 'white',
                    }]}>{title}</Text>
                    <Text
                        numberOfLines={1}
                        style={[styles.category, {
                        color: this.textColor || 'white',
                    }]}>{category}</Text>
                    <Text
                        numberOfLines={4}
                        style={[styles.note, {
                        color: this.textColor || 'white',
                    }]}>{note}</Text>
                </View>
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
    date: {
        fontSize: 12,
        color: 'white',
        alignSelf: 'flex-end',
        marginRight: -5,
        marginTop: 10,
        width: 70
    },
    title: {
        fontSize: 17,
        fontWeight: 'bold',
        marginTop: 15,
        marginLeft: 10,
        width: 130,
    },
    category: {
        fontSize: 12,
        fontWeight: 'bold',
        marginLeft: 10,
        width: 130,
    },
    note: {
        marginTop: 10,
        fontSize: 12,
        paddingBottom: 20,
        marginLeft: 10,
        width: 125,
        textAlign: 'justify',
    },
    box: {
        height: 150,
        width: 150,
        borderRadius: 20,
        margin: 10,

    },
});
export default Box;