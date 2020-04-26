import React from 'react';
import {StyleSheet, View, Text, Image, TouchableOpacity} from 'react-native';


const ListItem = props => {

    const selectItem = () => {
        props.onSelect(props.id)
    } 
    
    return(
        <View>
            <TouchableOpacity style={styles.button} onPress={selectItem}>
                <Image
                    style={styles.button_icon}         
                    source={props.flag} 
                />
                <Text style={styles.button_text} >{props.lable}</Text>
            </TouchableOpacity>
        </View>
    );
};


const styles = StyleSheet.create({
    button: {
        justifyContent: 'center',
        marginVertical: 5,
        marginHorizontal: 30,
        height: 60,
        backgroundColor: '#f5f5f5',
        borderRadius: 10,
    },
    button_icon: {
        height: 30,
        width: '50%',
        resizeMode: 'center',
        left: -40,
        position: 'absolute',
    },
    button_text: {
        textAlign: 'center',
    }
});


export default ListItem;