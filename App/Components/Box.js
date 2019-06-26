import React, {Component} from 'react';
import {Text} from "native-base";
import {View, TouchableOpacity} from "react-native";
import {NavigationActions} from "react-navigation";

class Box extends Component {

    render() {
        const {time, title, category, note, onPress} = this.props;
        return (
            <TouchableOpacity onPress={onPress}>
                <View style={styles.box}>
                    <Text style={styles.date} right>{time}</Text>
                    <Text style={styles.title}>{title}</Text>
                    <Text style={styles.category}>{category}</Text>
                    <Text style={styles.note}>{note}</Text>
                </View>
            </TouchableOpacity>
        )
    }
}

const styles = {
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
        color: 'white',
        marginTop: 15,
        marginLeft: 10
    },
    category: {
        fontSize: 12,
        fontWeight: 'bold',
        color: 'white',
        marginLeft: 10
    },
    note: {
        marginTop: 10,
        fontSize: 13,
        color: 'white',
        paddingBottom: 20,
        marginLeft: 10
    },
    box: {
        backgroundColor: 'orange',
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
};

function colorBg() {
    let colorArray = [];

    for (let i = 0; i < 3; i++) {
        colorArray.push(Math.floor(Math.random() * (255 - 0) + 0));
    }
    // rgb -> hex
    let color = colorArray
        .map(x => x.toString(16))
        .join('');
    return `#${color}`;

}

export default Box;