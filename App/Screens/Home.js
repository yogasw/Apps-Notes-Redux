import React from "react";
import {
    Container, Left, Body, Right,
    Button, Title, Item, Card, CardItem,
    Content, Input, Text, Fab, Header,
} from "native-base";

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {View, FlatList} from "react-native";
import Box from '../Components/Box';
import EditNote from "./EditNote";
import HeaderMenu from '../Components/HeaderMenu'

export default class HomeScreen extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            active: 'true',
            dummyData: [
                {
                    id: 1,
                    title: 'Lapsuss mori, tanquam domesticus rumor.A falsis, deus festus fluctui.Lapsuss resistere, tanquam fatalis xiphias.Ferox vita diligenter consumeres silva est.Studere mechanice ducunt ad grandis abnoba.Racana noster exsul est.',
                    category: 'Ubi est varius mensa?Grandis, primus barcass acceleratrix imperium de velox, mirabilis medicina.Ecce.Valebat experimentums, tanquam azureus pulchritudine.Pol, lotus resistentia!Nunquam convertam musa.Brodium de germanus classis, aperto sectam!Navis de superbus mons, anhelare sectam!',
                    note: 'Ubi est lotus verpa?Stellas ridetis!Nobilis, fortis gemnas etiam magicae de altus, peritus lanista.Bassus ratione tandem talems zeta est.Nunquam gratia valebat.Eheu.Demissio cantares, tanquam teres acipenser.Cannabiss trabem in emeritis vasa!',
                    date: 'Hercle, hilotae castus!.Cum advena cadunt, omnes elevatuses magicae fatalis, gratis aonideses.Pol.Dexter hydra superbe contactuss adelphis est.Abaculuss cadunt in cirpi!Vigils cantare, tanquam regius domina.Vigils tolerare in castus sala!Clemens danistas ducunt ad bubo.Adelphis ortums, tanquam bassus solem.'
                },
                {
                    id: 2,
                    title: 'Lapsuss mori, tanquam domesticus rumor.A falsis, deus festus fluctui.Lapsuss resistere, tanquam fatalis xiphias.Ferox vita diligenter consumeres silva est.Studere mechanice ducunt ad grandis abnoba.Racana noster exsul est.',
                    category: 'Ubi est varius mensa?Grandis, primus barcass acceleratrix imperium de velox, mirabilis medicina.Ecce.Valebat experimentums, tanquam azureus pulchritudine.Pol, lotus resistentia!Nunquam convertam musa.Brodium de germanus classis, aperto sectam!Navis de superbus mons, anhelare sectam!',
                    note: 'Ubi est lotus verpa?Stellas ridetis!Nobilis, fortis gemnas etiam magicae de altus, peritus lanista.Bassus ratione tandem talems zeta est.Nunquam gratia valebat.Eheu.Demissio cantares, tanquam teres acipenser.Cannabiss trabem in emeritis vasa!',
                    date: 'Hercle, hilotae castus!.Cum advena cadunt, omnes elevatuses magicae fatalis, gratis aonideses.Pol.Dexter hydra superbe contactuss adelphis est.Abaculuss cadunt in cirpi!Vigils cantare, tanquam regius domina.Vigils tolerare in castus sala!Clemens danistas ducunt ad bubo.Adelphis ortums, tanquam bassus solem.'
                },
                {
                    id: 3,
                    title: 'Lapsuss mori, tanquam domesticus rumor.A falsis, deus festus fluctui.Lapsuss resistere, tanquam fatalis xiphias.Ferox vita diligenter consumeres silva est.Studere mechanice ducunt ad grandis abnoba.Racana noster exsul est.',
                    category: 'Ubi est varius mensa?Grandis, primus barcass acceleratrix imperium de velox, mirabilis medicina.Ecce.Valebat experimentums, tanquam azureus pulchritudine.Pol, lotus resistentia!Nunquam convertam musa.Brodium de germanus classis, aperto sectam!Navis de superbus mons, anhelare sectam!',
                    note: 'Ubi est lotus verpa?Stellas ridetis!Nobilis, fortis gemnas etiam magicae de altus, peritus lanista.Bassus ratione tandem talems zeta est.Nunquam gratia valebat.Eheu.Demissio cantares, tanquam teres acipenser.Cannabiss trabem in emeritis vasa!',
                    date: 'Hercle, hilotae castus!.Cum advena cadunt, omnes elevatuses magicae fatalis, gratis aonideses.Pol.Dexter hydra superbe contactuss adelphis est.Abaculuss cadunt in cirpi!Vigils cantare, tanquam regius domina.Vigils tolerare in castus sala!Clemens danistas ducunt ad bubo.Adelphis ortums, tanquam bassus solem.'
                },
                {
                    id: 4,
                    title: 'Lapsuss mori, tanquam domesticus rumor.A falsis, deus festus fluctui.Lapsuss resistere, tanquam fatalis xiphias.Ferox vita diligenter consumeres silva est.Studere mechanice ducunt ad grandis abnoba.Racana noster exsul est.',
                    category: 'Ubi est varius mensa?Grandis, primus barcass acceleratrix imperium de velox, mirabilis medicina.Ecce.Valebat experimentums, tanquam azureus pulchritudine.Pol, lotus resistentia!Nunquam convertam musa.Brodium de germanus classis, aperto sectam!Navis de superbus mons, anhelare sectam!',
                    note: 'Ubi est lotus verpa?Stellas ridetis!Nobilis, fortis gemnas etiam magicae de altus, peritus lanista.Bassus ratione tandem talems zeta est.Nunquam gratia valebat.Eheu.Demissio cantares, tanquam teres acipenser.Cannabiss trabem in emeritis vasa!',
                    date: 'Hercle, hilotae castus!.Cum advena cadunt, omnes elevatuses magicae fatalis, gratis aonideses.Pol.Dexter hydra superbe contactuss adelphis est.Abaculuss cadunt in cirpi!Vigils cantare, tanquam regius domina.Vigils tolerare in castus sala!Clemens danistas ducunt ad bubo.Adelphis ortums, tanquam bassus solem.'
                },
                {
                    id: 5,
                    title: 'Lapsuss mori, tanquam domesticus rumor.A falsis, deus festus fluctui.Lapsuss resistere, tanquam fatalis xiphias.Ferox vita diligenter consumeres silva est.Studere mechanice ducunt ad grandis abnoba.Racana noster exsul est.',
                    category: 'Ubi est varius mensa?Grandis, primus barcass acceleratrix imperium de velox, mirabilis medicina.Ecce.Valebat experimentums, tanquam azureus pulchritudine.Pol, lotus resistentia!Nunquam convertam musa.Brodium de germanus classis, aperto sectam!Navis de superbus mons, anhelare sectam!',
                    note: 'Ubi est lotus verpa?Stellas ridetis!Nobilis, fortis gemnas etiam magicae de altus, peritus lanista.Bassus ratione tandem talems zeta est.Nunquam gratia valebat.Eheu.Demissio cantares, tanquam teres acipenser.Cannabiss trabem in emeritis vasa!',
                    date: 'Hercle, hilotae castus!.Cum advena cadunt, omnes elevatuses magicae fatalis, gratis aonideses.Pol.Dexter hydra superbe contactuss adelphis est.Abaculuss cadunt in cirpi!Vigils cantare, tanquam regius domina.Vigils tolerare in castus sala!Clemens danistas ducunt ad bubo.Adelphis ortums, tanquam bassus solem.'
                },
                {
                    id: 6,
                    title: 'Lapsuss mori, tanquam domesticus rumor.A falsis, deus festus fluctui.Lapsuss resistere, tanquam fatalis xiphias.Ferox vita diligenter consumeres silva est.Studere mechanice ducunt ad grandis abnoba.Racana noster exsul est.',
                    category: 'Ubi est varius mensa?Grandis, primus barcass acceleratrix imperium de velox, mirabilis medicina.Ecce.Valebat experimentums, tanquam azureus pulchritudine.Pol, lotus resistentia!Nunquam convertam musa.Brodium de germanus classis, aperto sectam!Navis de superbus mons, anhelare sectam!',
                    note: 'Ubi est lotus verpa?Stellas ridetis!Nobilis, fortis gemnas etiam magicae de altus, peritus lanista.Bassus ratione tandem talems zeta est.Nunquam gratia valebat.Eheu.Demissio cantares, tanquam teres acipenser.Cannabiss trabem in emeritis vasa!',
                    date: 'Hercle, hilotae castus!.Cum advena cadunt, omnes elevatuses magicae fatalis, gratis aonideses.Pol.Dexter hydra superbe contactuss adelphis est.Abaculuss cadunt in cirpi!Vigils cantare, tanquam regius domina.Vigils tolerare in castus sala!Clemens danistas ducunt ad bubo.Adelphis ortums, tanquam bassus solem.'
                },
                {
                    id: 7,
                    title: 'Lapsuss mori, tanquam domesticus rumor.A falsis, deus festus fluctui.Lapsuss resistere, tanquam fatalis xiphias.Ferox vita diligenter consumeres silva est.Studere mechanice ducunt ad grandis abnoba.Racana noster exsul est.',
                    category: 'Ubi est varius mensa?Grandis, primus barcass acceleratrix imperium de velox, mirabilis medicina.Ecce.Valebat experimentums, tanquam azureus pulchritudine.Pol, lotus resistentia!Nunquam convertam musa.Brodium de germanus classis, aperto sectam!Navis de superbus mons, anhelare sectam!',
                    note: 'Ubi est lotus verpa?Stellas ridetis!Nobilis, fortis gemnas etiam magicae de altus, peritus lanista.Bassus ratione tandem talems zeta est.Nunquam gratia valebat.Eheu.Demissio cantares, tanquam teres acipenser.Cannabiss trabem in emeritis vasa!',
                    date: 'Hercle, hilotae castus!.Cum advena cadunt, omnes elevatuses magicae fatalis, gratis aonideses.Pol.Dexter hydra superbe contactuss adelphis est.Abaculuss cadunt in cirpi!Vigils cantare, tanquam regius domina.Vigils tolerare in castus sala!Clemens danistas ducunt ad bubo.Adelphis ortums, tanquam bassus solem.'
                },
                {
                    id: 8,
                    title: 'Lapsuss mori, tanquam domesticus rumor.A falsis, deus festus fluctui.Lapsuss resistere, tanquam fatalis xiphias.Ferox vita diligenter consumeres silva est.Studere mechanice ducunt ad grandis abnoba.Racana noster exsul est.',
                    category: 'Ubi est varius mensa?Grandis, primus barcass acceleratrix imperium de velox, mirabilis medicina.Ecce.Valebat experimentums, tanquam azureus pulchritudine.Pol, lotus resistentia!Nunquam convertam musa.Brodium de germanus classis, aperto sectam!Navis de superbus mons, anhelare sectam!',
                    note: 'Ubi est lotus verpa?Stellas ridetis!Nobilis, fortis gemnas etiam magicae de altus, peritus lanista.Bassus ratione tandem talems zeta est.Nunquam gratia valebat.Eheu.Demissio cantares, tanquam teres acipenser.Cannabiss trabem in emeritis vasa!',
                    date: 'Hercle, hilotae castus!.Cum advena cadunt, omnes elevatuses magicae fatalis, gratis aonideses.Pol.Dexter hydra superbe contactuss adelphis est.Abaculuss cadunt in cirpi!Vigils cantare, tanquam regius domina.Vigils tolerare in castus sala!Clemens danistas ducunt ad bubo.Adelphis ortums, tanquam bassus solem.'
                },
            ]
        }
    }

    render() {
        const {navigate} = this.props.navigation;
        return (
            <Container>
                <HeaderMenu
                    leftPress={() => this.props.navigation.openDrawer()}
                    title="Note App"
                    optionIcon='home'
                />
                <Item rounded style={styles.search}>
                    <Input placeholder='Search...'/>
                </Item>
                <Content padder>
                    <View style={styles.content}>
                        <FlatList
                            data={this.state.dummyData}
                            numColumns={2}
                            keyExtractor={(item, index) => item.id.toString()}
                            renderItem={({item, index}) =>
                                <Box
                                    time={item.date}
                                    title={item.title}
                                    category={item.category}
                                    note={item.note}
                                    bgColor={colorBg()}
                                    textColor="white"
                                    onPress={() => navigate('EditNote')}
                                />
                            }
                        />
                    </View>
                </Content>
                <Fab
                    active={this.state.active}
                    direction="up"
                    containerStyle={{}}
                    style={{backgroundColor: '#ffffff'}}
                    position="bottomRight"
                    onPress={() => this.props.navigation.navigate('AddNote')}>
                    <Icon name="plus" style={{color: 'black'}}/>
                </Fab>
            </Container>
        );
    }
}

const styles = {
    search: {
        paddingLeft: 20,
        paddingRight: 20,
        marginTop: 90,
        marginBottom: 10,
        marginRight: 20,
        marginLeft: 20,
        position: 'absolute',
        backgroundColor: '#fff',
        zIndex: 1
    },
    content: {
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    headerText: {
        fontSize: 20,
        margin: 10,
        fontWeight: "bold"
    },
    menuContent: {
        color: "#000",
        fontWeight: "bold",
        padding: 2,
        fontSize: 20
    },
};


function colorBg() {
    let color = ['e57373', 'F06292', 'BA68C8', '9575CD', '7986CB', '64B5F6'];
    let ukuran = Math.floor(Math.random() * 5) + 0;
    return `#${color[ukuran]}`;

}

