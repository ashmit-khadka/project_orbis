import React, { useState } from 'react';
import {View, StyleSheet, FlatList, Text} from 'react-native';

import ListItem from '../components/ListItem'
import * as data from '../assets/data/data';






const List = props => {
    return (
        <View style={styles.app_screen}>
            <FlatList
                data={props.list}
                style={styles.container}
                renderItem={({item}) => (
                    <ListItem id={item.id} lable={item.name} flag={require('../assets/flags/algeria.png')} onSelect={props.onSelect}/>
                )}
                keyExtractor={item => item.name}
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
});

export default List;