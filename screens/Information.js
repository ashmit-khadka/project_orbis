import React, { useState } from 'react';
import {View, StyleSheet, FlatList, Text, Image, ScrollView} from 'react-native';


const Information = props => {
    var introduction = props.selectedCountry['introduction']
    if (introduction.length > 500) {introduction=introduction.slice(0,500) + '..'}

    return (
        <View style={styles.app_screen}>
            <View style={styles.body}>
                <ScrollView>
                    <View style={styles.view_intro}> 
                        <View style={styles.sa}>
                            <Image
                                style={styles.img_flag}         
                                source={require('../assets/test/UK-flag.gif')} 
                            />
                            <Image
                                style={styles.img_location}         
                                source={require('../assets/test/UK-locator-map.gif')} 
                            />
                        </View>
                    </View>

                        <View style={styles.sb}>
                            <View style={styles.header_info}>
                                <Image style={styles.icon_info} source={require('../assets/info-icons/information.png')}></Image>
                                
                            </View>
                            <Text style={styles.text_intro}>{introduction}</Text>
                        </View>
                        <View style={styles.sb}>
                            <View style={styles.header_info}>
                                <Image style={styles.icon_info} source={require('../assets/info-icons/information.png')}></Image>
                                
                            </View>
                            <Text style={styles.text_intro}>{introduction}</Text>
                        </View>
                </ScrollView>

            </View>
            <View style={styles.footer}>
                <View style={styles.footer_panel}>
                    <Image style={styles.icon_info} source={require('../assets/menu-icons/government.png')}></Image>
                    <Image style={styles.icon_info} source={require('../assets/menu-icons/love.png')}></Image>
                    <Image style={styles.icon_info} source={require('../assets/menu-icons/money.png')}></Image>
                    <Image style={styles.icon_info} source={require('../assets/menu-icons/terrain.png')}></Image>
                    <Image style={styles.icon_info} source={require('../assets/menu-icons/tank.png')}></Image>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    app_screen: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',    
        padding: 10,
    },
    body: {
        height: 530,
    },
    footer: {
    
    },
    view_intro: {
        backgroundColor: '#f5f5f5',
        height:150,
        paddingTop: 15,

    },
    sa: {
        flexDirection:'row',
        justifyContent: 'space-around',
    },
    sb: {
        alignItems:'center',
        height: 250,
        backgroundColor: '#fafafa',
        marginHorizontal: 15,
        padding: 10,
        elevation: 5,
        marginTop: 10,
    },

    footer_panel: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        backgroundColor: '#e1bee7',
        width: '100%',
        height: 50,
        padding: 10,
    },
    header_info: {
        flexDirection: 'row',        
        height: 50,
        alignItems: 'center',
    },
    icon_info: {
        width: 30,
        height: 30,
    },

    img_flag: {
        width: 200,
        height: 100,
    },
    img_location: {
        width: 100,
        height: 100,
    },
    text_intro: {
        textAlign: 'center',
        fontFamily: 'sans-serif',
        backgroundColor: '#f5f5f5',
        borderRadius: 15,

    }
});

export default Information;