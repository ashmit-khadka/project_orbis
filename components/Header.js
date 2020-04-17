import React from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native'

const Header = props => {
    const navHome = () => {
        props.onHome(0)
    }
    return (
        <View style={styles.app_header}>
            <View style={styles.back_img_view}>
                <TouchableOpacity style={styles.header_nav} onPress={navHome}>
                    <Image style={styles.header_img} source={require('../assets/menu-icons/back.png')} ></Image>
                </TouchableOpacity>
            </View>
            <Text>
                {props.title}
            </Text>
            <View style={styles.home_img_view}>
                <TouchableOpacity style={styles.header_nav} onPress={navHome}>
                    <Image style={styles.header_img} source={require('../assets/menu-icons/home.png')} ></Image>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    app_header: {
        height: 90,
        paddingTop: 10,
        backgroundColor: '#fafafa',
        alignItems: 'center',
        justifyContent: 'center',
    },
    home_img_view: {
        paddingTop: 10,
        right: 40,
        position: 'absolute',
    },
    header_img: {
        width: 25, 
        height: 25,
    },
    header_nav: {
        width: 40, 
        height: 40,
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#e0e0e0',        
    },
    back_img_view: {
        paddingTop: 10,
        left: 40,
        position: 'absolute',
    },
});

export default Header;