import React from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native'

const Header = props => {
    const navHome = () => {
        props.onHome(0)
    }
    return (
        <View style={styles.header}>
            <View>
                <TouchableOpacity onPress={navHome}>
                    <Image style={styles.header_icons} source={require('../assets/menu-icons/back.png')} ></Image>
                </TouchableOpacity>
            </View>
            <Text>
                {props.title}
            </Text>
            <View>
                <TouchableOpacity onPress={navHome}>
                    <Image style={styles.header_icons} source={require('../assets/menu-icons/home.png')} ></Image>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: '#fafafa',
        width: '100%',
        padding: 20,
        paddingTop: 40,    
      },
      header_icons: {
        height: 25,
        width: 25,
      },
});

export default Header;