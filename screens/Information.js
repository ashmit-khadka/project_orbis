import React, { useState } from 'react';
import {View, StyleSheet, TouchableOpacity , Text, Image, ScrollView} from 'react-native';
import InfoItem from '../components/InfoItem'


const Information = props => {

    var renderItems = []
    for (const section in props.selectedCountry)
    {
        if (section == 'MetaData') {}
        else
        {
            renderItems.push(
                <View style={styles.section_header}>
                    <Image style={styles.section_header_icon} source={require('../assets/menu-icons/money.png')}></Image>
                    <Text style={styles.section_header_title}>{section}</Text>
                    <View style={styles.section_header_divider}></View>
                </View>
            )
            for (const sectionContent in props.selectedCountry[section]) 
            {
                if (sectionContent == 'Introduction')
                {
                    var introduction = props.selectedCountry[section][sectionContent]
                    if (introduction.length > 430) 
                    {
                        introduction = introduction.slice(0, 430) + '..'
                        renderItems.push(<Text style={styles.section_text}>{introduction}</Text>)
                        renderItems.push(<Text style={styles.section_readmore}>Read more..</Text>)
                    }
                    else 
                    {
                        renderItems.push(<Text style={styles.section_text}>{introduction}</Text>)
                        renderItems.push(<Text style={styles.section_readmore}></Text>)
                    }
                }
                else
                {
                    renderItems.push(<InfoItem InfoKey={sectionContent} InfoValue ={props.selectedCountry[section][sectionContent]}/>)
                }
            }
        }
    }
    
    return (
        <View style={styles.body}>
            <ScrollView >
                <View style={styles.countryImg}> 
                    <Image
                        style={styles.countryImg_flag}         
                        source={props.selectedCountry['MetaData']['img_flag']} 
                    />
                    <Image
                        style={styles.countryImg_flag}         
                        source={props.selectedCountry['MetaData']['img_location']} 
                    />
                </View>
                {renderItems}
            </ScrollView>

            <View style={styles.footer}>
                <View style={styles.footer_panel}>
                    <Image style={styles.footer_icon} source={require('../assets/menu-icons/government.png')}></Image>
                    <Image style={styles.footer_icon} source={require('../assets/menu-icons/love.png')}></Image>
                    <Image style={styles.footer_icon} source={require('../assets/menu-icons/money.png')}></Image>
                    <Image style={styles.footer_icon} source={require('../assets/menu-icons/terrain.png')}></Image>
                    <Image style={styles.footer_icon} source={require('../assets/menu-icons/tank.png')}></Image>
                </View>
            </View>
        </View>

    );
};

const styles = StyleSheet.create({
    body: {
        flex: 1,
        alignItems: 'center',
        width: '100%',
        padding: 20,
        paddingBottom: 0,
    },
    countryImg: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
    },
    countryImg_flag:{
        height: 100,
        width: '50%',
        resizeMode: 'center',
    },
    section: {
        alignItems:'flex-start',
        margin: 10,
        marginHorizontal: 0,
        marginTop: 0,
        padding: 10,
        //paddingHorizontal:0,
        //backgroundColor: '#fafafa',
        //borderRadius: 10,
    },
    section_header: {
        alignItems: 'center',
    },
    section_header_icon: {
        width: 30,
        height: 30,
        marginHorizontal: 5,
        backgroundColor: '#fffffb',
        borderRadius: 15,
        marginTop: 20,
    },
    section_header_title: {
        marginBottom: 0,
    },
    section_header_divider: {
        borderBottomColor: 'grey',
        borderBottomWidth: 1,
        width: '60%',
        marginBottom: 10,
    },
    section_text: {
        textAlign: 'center',
    },
    section_readmore: {
        textAlign: 'center',
        fontStyle: 'italic',
        color: 'grey',
    },
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
    footer_panel: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        backgroundColor: '#fce4ec',
        width: '100%',
        padding: 10,
    },
        footer_icon: {
        height: 30,
        width: 30,
        backgroundColor: '#ffeeff',
        borderRadius: 15,
    }
});

export default Information;