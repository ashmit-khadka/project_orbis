import React, { useState } from 'react';
import {View, StyleSheet, FlatList, Text} from 'react-native';

import HomeItem from '../components/HomeItem';

const HomeItems = [
    {id: 1, title: 'Countries A-Z', icon: require('../assets/menu-icons/loupe.png')},
    {id: 2, title: 'Random Country', icon: require('../assets/menu-icons/wizard.png')},
    {id: 3, title: 'Guess Game', icon: require('../assets/menu-icons/idea.png')},
];

const Home = props => {

    const selectScreen = (id) => {
        console.log(id)
    }

    return (
        <View style={styles.app_screen}>
            <FlatList
                data={HomeItems}
                style={styles.container}
                renderItem={({item}) => (
                    <HomeItem id={item.id} title = {item.title} icon = {item.icon} onSelectScreen={props.onSelect}></HomeItem>
                )}
                keyExtractor={item => item.title}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    app_screen: {
        flexDirection: 'row',
        width: '100%',
        padding: 10,
        alignContent: 'space-around',
    },
    container: {
        flex: 1,
        marginVertical: 20,
    },
});

export default Home;