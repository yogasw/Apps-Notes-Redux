import React from "react";
import {
    Container, Content, Form, Textarea, Picker, Text, Toast
} from "native-base";
import {getCategories, postNote} from "../Services/Apis";
import HeaderMenu from "../Components/HeaderMenu";
import {Alert} from "react-native";

export default class HomeScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedCategory: '',
            title: '',
            description: '',
            listCategories: [],
            widthScrren: null,
            heightScreen: null,
        };
    }

    componentDidMount() {
        getCategories().then(response => {
            this.setState({listCategories: response.data.values});
        }).catch(e => {
            throw e;
        })
    }

    _onLayout = event => {
        let {width, height} = event.nativeEvent.layout;
        this.state.widthScrren = width;
        this.state.heightScreen = height;
    }; // width, height, x, y

    addNote = () => {
        if (this.state.title != '' &&
            this.state.description != '' &&
            this.state.selectedCategory != '') {

            let data = {
                'title': this.state.title,
                'note': this.state.description,
                'id_category': this.state.selectedCategory
            };

            postNote(data).then(response => {
                if (response.data.status == '200') {
                    Alert.alert(response.data.values.message);
                    this.props.navigation.navigate("Home");
                } else {
                    Alert.alert("Input Note Failed")
                }
            }).catch(e => {
                throw e;
            })
        } else {
            Alert.alert("Field note or title cannot empty");
        }
    };

    render() {
        return (
            <Container onLayout={this._onLayout}>
                <HeaderMenu
                    leftPress={() => this.props.navigation.navigate("Home")}
                    leftIcon="keyboard-backspace"
                    optionPress={() => this.addNote()}
                    optionIcon='check-circle-outline'
                    title="Add Note"
                    optionColor='#3db39e'
                />
                <Content padder>
                    <Form>
                        <Textarea
                            onChangeText={(title) => this.setState({title})}
                            rowSpan={2}
                            placeholder="ADD TITLE ..."
                            style={{
                                fontSize: 20,
                                marginTop: 50
                            }}
                        />
                        <Textarea
                            onChangeText={(description) => this.setState({description})}
                            rowSpan={5}
                            placeholder="ADD DESCRIPTION ..."
                            style={{
                                fontSize: 20,
                            }}/>
                        <Text
                            style={{
                                color: 'black',
                                fontSize: 20,
                                fontWeight: 'bold',
                            }}>
                            CATEGORY
                        </Text>

                        <Picker
                            mode='dropdown'
                            style={{width: this.state.widthScrren}}
                            onValueChange={(selectedCategory) => this.setState({selectedCategory})}>
                            {
                                Object.keys(this.state.listCategories).map((key) => (
                                    <Picker.Item key={key} label={this.state.listCategories[key].name}
                                                 value={this.state.listCategories[key].id}/>
                                ))
                            }

                        </Picker>
                    </Form>
                </Content>
            </Container>
        );
    }
}

