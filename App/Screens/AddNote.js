import React from "react";
import {
    Container, Content, Form, Textarea, Picker, Text
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
        console.log("masuk1");
        let formData = new FormData();
        formData.append('title', this.state.title);
        formData.append('note', this.state.description);
        formData.append('id_category', this.state.selectedCategory);

        postNote(formData).then(response => {
            Alert.alert("Note Berhasil di kirim");
        }).catch(e => {
            throw e;
        })
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

