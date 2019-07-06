import React from "react";
import {Container, Content, Form, Picker, Text, Textarea,} from "native-base";
import {getCategories, patchNotes} from "../Services/Redux/action/notes";
import HeaderMenu from "../Components/HeaderMenu";
import {connect} from 'react-redux';

class EditNote extends React.Component {
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
        this.props.dispatch(getCategories());
    }

    _onLayout = event => {
        let {width, height} = event.nativeEvent.layout;
        this.state.widthScrren = width;
        this.state.heightScreen = height;
    }; // width, height, x, y

    updateNote = (id) => {
        if (
            this.state.title != "" ||
            this.state.description != "" ||
            this.state.selectedCategory != "") {
            let data = {
                'title': this.state.title,
                'note': this.state.description,
                'id_category': this.state.selectedCategory
            };
            this.props.dispatch(patchNotes(id, data));
            this.props.navigation.navigate("Home");
        } else {
            this.props.navigation.navigate("Home");
        }
    };

    render() {
        const {navigation} = this.props;
        const title = navigation.getParam('title');
        const note = navigation.getParam('note');
        const id = navigation.getParam('id');
        const category = navigation.getParam('category');

        return (
            <Container onLayout={this._onLayout}>
                <HeaderMenu
                    leftPress={() => this.props.navigation.navigate("Home")}
                    leftIcon="keyboard-backspace"
                    optionPress={() => this.updateNote(id)}
                    optionIcon='check-circle-outline'
                    title="Edit Note"
                    optionColor='#3db39e'
                />
                <Content padder>
                    <Form>
                        <Textarea
                            onChangeText={(title) => this.setState({title})}
                            rowSpan={2}
                            defaultValue={title}
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
                            defaultValue={note}
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
                            style={{
                                width: this.state.widthScrren,
                            }}
                            onValueChange={(selectedCategory) => this.setState({selectedCategory})}
                            selectedValue={this.state.selectedCategory}
                        >
                            <Picker.Item label='select' value=''/>
                            {
                                Object.keys(this.props.notes.categories).map((key) => (
                                    <Picker.Item key={key} label={this.props.notes.categories[key].name}
                                                 value={this.props.notes.categories[key].id}/>
                                ))
                            }

                        </Picker>
                    </Form>
                </Content>
            </Container>
        );
    }
}

const MapsStateToProps = (state) => {
    return {
        notes: state.notes
    }
}

export default connect(MapsStateToProps)(EditNote);