import React from 'react';
import {StyleSheet, View, Text, TouchableOpacity, Image} from 'react-native'

const HomeItem = props => { 
    const setScreenMenu = () => {
        props.onSelectScreen(props.id);
    }   
    return(
        <View>
            <TouchableOpacity style={styles.button} onPress={setScreenMenu}>
                <Image
                    style={styles.button_icon}         
                    source={props.icon} 
                />
                <Text style={styles.button_text} >{props.title}</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    button: {
        justifyContent: 'center',
        marginVertical: 10,
        marginHorizontal: 30,
        height: 80,
        backgroundColor: '#f5f5f5',
        borderRadius: 50,
    },
    button_icon: {
        width: 30, 
        height: 30,
        left: 40,
        position: 'absolute',
    },
    button_text: {
        textAlign: 'center',
    }
});

export default HomeItem