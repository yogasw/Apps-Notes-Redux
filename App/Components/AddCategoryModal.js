import React, {Component} from 'react';
import {Text, TouchableOpacity, View, StyleSheet, Dimensions} from 'react-native';


class AddCategoryModal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            width: Dimensions.get('window').width,
        };
        Dimensions.addEventListener('change', (e) => {
            this.setState(e.window);
        });
        this.handleLayoutChange = this.handleLayoutChange.bind(this);
    }

    handlePress(evt) {
        console.log(`x coord = ${evt.nativeEvent.locationX}`);
    }

    handleLayoutChange() {
        this.feedPost.measure((fx, fy, width, height, px, py) => {
            console.log('Component width is: ' + width)
            console.log('Component height is: ' + height)
            console.log('X offset to page: ' + px)
            console.log('Y offset to page: ' + py)
        })
    }

    render() {

        return (
            <View
                style={[styles.contentContainer]}>
                <TouchableOpacity
                    activeOpacity={1}
                    disable={true}
                    onPress={(evt) => this.handlePress(evt)}
                    ref={view => {
                        this.feedPost = view;
                    }}
                >
                    <View
                        onLayout={(event) => {
                            this.handleLayoutChange(event)
                        }}
                        style={[styles.modal, {
                            width: this.state.width - 80
                        }]}>
                        <Text>Ini Pop UP</Text>
                    </View>
                </TouchableOpacity>
            </View>
        )
    }
}

export default AddCategoryModal;

const styles = StyleSheet.create({
    contentContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'gray',
        opacity: 0.8

    },
    modal: {
        height: 150,
        padding: 10,
        alignSelf: 'center',
        alignItems: 'center',
        textAlign: 'center',
        backgroundColor: 'white',
        opacity: 1,
        borderRadius: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.27,
        shadowRadius: 4.65,

        elevation: 6,
    }

});
