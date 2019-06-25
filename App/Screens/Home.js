import React from "react";
import {
    Container, Header, Left, Body, Right,
    Button, Title, Item, Card, CardItem,
    Content, Input, Text, Fab,
} from "native-base";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {View, ScrollView} from "react-native";

export default class HomeScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            active: 'true'
        };
    }

    render() {
        return (
            <Container>
                    <Header style={{backgroundColor: '#ffffff' }}>
                        <Left>
                            <Button
                                transparent
                                onPress={() => this.props.navigation.navigate("DrawerOpen")}>
                                <Icon color="black" size={25} name="menu"/>
                            </Button>
                        </Left>
                        <Body>
                            <Title>Note App</Title>
                        </Body>
                        <Right>
                            <Button
                                transparent
                                onPress={() => this.props.navigation.navigate("DrawerOpen")}>
                                <Icon name="sort-descending" color="black" size={25}/>
                            </Button>
                        </Right>
                    </Header>
                    <Item rounded style={styles.search}>
                        <Input placeholder='Search...'/>
                    </Item>
                    <Content padder>
                        <View style={styles.content}>
                            <Card>
                                <CardItem style={styles.cardItem}>
                                    <Body>
                                        <Text style={styles.date} right>20 Juni 2019</Text>
                                        <Text style={styles.title}>Title</Text>
                                        <Text style={styles.category}>Category</Text>
                                        <Text style={styles.note}>Cur lactea moriGemnas congregabo!?</Text>
                                    </Body>
                                </CardItem>
                            </Card>
                            <Card>
                                <CardItem style={styles.cardItem}>
                                    <Body>
                                        <Text style={styles.date} right>20 Juni 2019</Text>
                                        <Text style={styles.title}>Title</Text>
                                        <Text style={styles.category}>Category</Text>
                                        <Text style={styles.note}>Danistas sunt competitio</Text>
                                    </Body>
                                </CardItem>
                            </Card>
                            <Card>
                                <CardItem style={styles.cardItem}>
                                    <Body>
                                        <Text style={styles.date} right>20 Juni 2019</Text>
                                        <Text style={styles.title}>Title</Text>
                                        <Text style={styles.category}>Category</Text>
                                        <Text style={styles.note}>Danistas sunt competitio</Text>
                                    </Body>
                                </CardItem>
                            </Card>
                            <Card>
                                <CardItem style={styles.cardItem}>
                                    <Body>
                                        <Text style={styles.date} right>20 Juni 2019</Text>
                                        <Text style={styles.title}>Title</Text>
                                        <Text style={styles.category}>Category</Text>
                                        <Text style={styles.note}>Danistas sunt competitio</Text>
                                    </Body>
                                </CardItem>
                            </Card>
                            <Card>
                                <CardItem style={styles.cardItem}>
                                    <Body>
                                        <Text style={styles.date} right>20 Juni 2019</Text>
                                        <Text style={styles.title}>Title</Text>
                                        <Text style={styles.category}>Category</Text>
                                        <Text style={styles.note}>Danistas sunt competitio</Text>
                                    </Body>
                                </CardItem>
                            </Card>
                            <Card>
                                <CardItem style={styles.cardItem}>
                                    <Body>
                                        <Text style={styles.date} right>20 Juni 2019</Text>
                                        <Text style={styles.title}>Title</Text>
                                        <Text style={styles.category}>Category</Text>
                                        <Text style={styles.note}>Danistas sunt competitio</Text>
                                    </Body>
                                </CardItem>
                            </Card>
                            <Card>
                                <CardItem style={styles.cardItem}>
                                    <Body>
                                        <Text style={styles.date} right>20 Juni 2019</Text>
                                        <Text style={styles.title}>Title</Text>
                                        <Text style={styles.category}>Category</Text>
                                        <Text style={styles.note}>Danistas sunt competitio</Text>
                                    </Body>
                                </CardItem>
                            </Card>
                            <Card>
                                <CardItem style={styles.cardItem}>
                                    <Body>
                                        <Text style={styles.date} right>20 Juni 2019</Text>
                                        <Text style={styles.title}>Title</Text>
                                        <Text style={styles.category}>Category</Text>
                                        <Text style={styles.note}>Danistas sunt competitio</Text>
                                    </Body>
                                </CardItem>
                            </Card>
                            <Card>
                                <CardItem style={styles.cardItem}>
                                    <Body>
                                        <Text style={styles.date} right>20 Juni 2019</Text>
                                        <Text style={styles.title}>Title</Text>
                                        <Text style={styles.category}>Category</Text>
                                        <Text style={styles.note}>Danistas sunt competitio</Text>
                                    </Body>
                                </CardItem>
                            </Card>
                        </View>
                    </Content>
                <Fab
                    active={this.state.active}
                    direction="up"
                    containerStyle={{ }}
                    style={{ backgroundColor: '#ffffff' }}
                    position="bottomRight"
                    onPress={() => this.setState({ active: !this.state.active })}>
                    <Icon name="plus" style={{color:'black'}}/>
                </Fab>
            </Container>
        );
    }
}

const styles = {
    search: {
        marginTop: 20,
        marginRight: 20,
        marginLeft: 20
    },
    content: {
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'white',
        marginTop: 20
    },
    category: {
        fontSize: 12,
        fontWeight: 'bold',
        color: 'white'
    },
    note: {
        marginTop: 20,
        fontSize: 17,
        color: 'white',
    },
    cardItem: {
        backgroundColor: colorBg(),
        height: 145,
        width: 145,
    },
    date: {
        fontSize: 14,
        color: 'white',
        alignSelf: 'flex-end'
    }
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

