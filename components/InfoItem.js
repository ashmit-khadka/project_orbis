import React from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';


const InfoItem = props => {
    return(
        <View style={styles.section_info}>
                <Text style={styles.section_info_key}>{props.InfoKey}</Text>
            <Text style={styles.section_info_value}>{props.InfoValue}</Text>
        </View>
    );
};


const styles = StyleSheet.create({
    section_info: {
        flexDirection: 'row',
        marginBottom: 5,
    },
    section_info_key: {
        textAlign: 'right',
        width: '30%',
    },
    section_info_value: {
        color: 'grey',
        width: '70%',
        paddingLeft: 10,
    },
});


export default InfoItem;