import React, {PureComponent} from 'react';
import {Text} from "native-base";
import {View, TouchableOpacity, StyleSheet} from "react-native";

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
        const {time, title, category, note, onPress} = this.props;
        return (
            <TouchableOpacity onPress={onPress}>
                <View style={[styles.box, {
                    backgroundColor: this.bgColor || 'orange',
                }]}>
                    <Text style={[styles.date, {
                        color: this.textColor || 'white',
                    }]} right>{time}</Text>
                    <Text style={[styles.title, {
                        color: this.textColor || 'white',
                    }]}>{title}</Text>
                    <Text style={[styles.category, {
                        color: this.textColor || 'white',
                    }]}>{category}</Text>
                    <Text style={[styles.note, {
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
        marginRight: 15,
        marginTop: 10
    },
    title: {
        fontSize: 17,
        fontWeight: 'bold',
        marginTop: 15,
        marginLeft: 10
    },
    category: {
        fontSize: 12,
        fontWeight: 'bold',
        marginLeft: 10
    },
    note: {
        marginTop: 10,
        fontSize: 13,
        paddingBottom: 20,
        marginLeft: 10
    },
    box: {
        height: 150,
        width: 150,
        borderRadius: 15,
        margin: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowOpacity: 0.53,
        shadowRadius: 13.97,

        elevation: 21,
    },
});
export default Box;