import React, { useState } from 'react';
import {View, StyleSheet, TouchableOpacity , Text, Image, ScrollView} from 'react-native';


const Information = props => {
    var introduction = props.selectedCountry['introduction']
    if (introduction.length > 500) {introduction=introduction.slice(0,500) + '..'}

    return (
        <View style={styles.body}>
            <ScrollView >
                <View style={styles.countryImg}> 
                    <Image
                        style={styles.countryImg_flag}         
                        source={require('../assets/flags/united_kingdom.png')} 
                    />
                    <Image
                        style={styles.countryImg_flag}         
                        source={require('../assets/test/UK-locator-map.gif')} 

                    />
                </View>
                <View style={styles.section_header}>
                    <Image style={styles.section_header_icon} source={require('../assets/info-icons/information.png')}></Image>
                    <Text style={styles.section_header_title}>INTRODUCTION</Text>
                    <View style={styles.section_header_divider}></View>
                </View>
                <View style={styles.section}>
                    <TouchableOpacity>
                        <Text style={styles.section_text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque in nulla imperdiet ligula dapibus porttitor id ut quam. Nullam non ante vitae enim tempus pellentesque. Donec eget elementum quam. Duis tristique lacus ac aliquam euismod. Sed vehicula tellus non velit aliquet, et ultricies magna scelerisque. Nunc in diam a elit venenatis ultricies ut non ligula. Quisque lacus enim, aliquet id lectus vel, egestas tincidunt urna. In sit amet ultrices.</Text>
                        <Text style={styles.section_readmore}>Read more..</Text>
                    </TouchableOpacity>
                </View>
                    <View style={styles.section_header}>
                        <Image style={styles.section_header_icon} source={require('../assets/menu-icons/government.png')}></Image>
                        <Text style={styles.section_header_title}>GOVERNMENT</Text>
                        <View style={styles.section_header_divider}></View>
                    </View>
                    <View style={styles.section}>
                        <View style={styles.section_info}>
                            <Text style={styles.section_info_key}>Name (long)</Text>
                            <Text style={styles.section_info_value}>Argentina (Argentine Republic)</Text>
                        </View>
                        <View style={styles.section_info}>
                            <Text style={styles.section_info_key}>Local Name (long)</Text>
                            <Text style={styles.section_info_value}>Argentina (Republica Argentina)</Text>
                        </View>
                        <View style={styles.section_info}>
                            <Text style={styles.section_info_key}>Etymology</Text>
                            <Text style={styles.section_info_value}>Originally the area was referred to as Tierra Argentina, i.e., "Land beside the Silvery River" or "silvery land," which referred to the massive estuary in the east of the country, the Rio de la Plata (River of Silver); over time the name shortened to simply Argentina or "silvery"</Text>
                        </View>
                        <View style={styles.section_info}>
                            <Text style={styles.section_info_key}>Government Type</Text>
                            <Text style={styles.section_info_value}>Presidential Republic</Text>
                        </View>
                        <View style={styles.section_info}>
                            <Text style={styles.section_info_key}>Capital</Text>
                            <Text style={styles.section_info_value}>Buenos Aires</Text>
                        </View>
                        <View style={styles.section_info}>
                            <Text style={styles.section_info_key}>Independence</Text>
                            <Text style={styles.section_info_value}>9 July 1816 (from Spain)</Text>
                        </View>
                        <View style={styles.section_info}>
                            <Text style={styles.section_info_key}>National Holiday</Text>
                            <Text style={styles.section_info_value}>Revolution Day (May Revolution Day), 25 May (1810)</Text>
                        </View>
                        <View style={styles.section_info}>
                            <Text style={styles.section_info_key}>Chief of State</Text>
                            <Text style={styles.section_info_value}>President Alberto Angel FERNANDEZ (since 10 December 2019); Vice President Cristina FERNANDEZ DE KIRCHNER (since 10 December 2019); note - the president is both chief of state and head of government</Text>
                        </View>
                        <View style={styles.section_info}>
                            <Text style={styles.section_info_key}>Head of Government</Text>
                            <Text style={styles.section_info_value}>President Alberto Angel FERNANDEZ (since 10 December 2019); Vice President Cristina FERNANDEZ DE KIRCHNER (since 10 December 2019)</Text>
                        </View>
                    </View>
                    <View style={styles.section_header}>
                        <Image style={styles.section_header_icon} source={require('../assets/menu-icons/money.png')}></Image>
                        <Text style={styles.section_header_title}>ECONOMY</Text>
                        <View style={styles.section_header_divider}></View>
                    </View>
                    <View style={styles.section}>
                        <TouchableOpacity>
                        <Text style={styles.section_text}>Argentina benefits from rich natural resources, a highly literate population, an export-oriented agricultural sector, and a diversified industrial base. Although one of the world's wealthiest countries 100 years ago, Argentina suffered during most of the 20th century from recurring economic crises, persistent fiscal and current account deficits, high inflation, mounting external debt, and capital flight.</Text>
                            <Text style={styles.section_readmore}>Read more..</Text>
                        </TouchableOpacity>
                        <View style={styles.section_info}>
                            <Text style={styles.section_info_key}>GDP (official exchange rate)</Text>
                            <Text style={styles.section_info_value}>$637.6 billion (2017 est.)</Text>
                        </View>
                        <View style={styles.section_info}>
                            <Text style={styles.section_info_key}>GDP (purchasing power parity)</Text>
                            <Text style={styles.section_info_value}>$922.1 billion (2017 est.){"\n"}$896.5 billion (2016 est.){"\n"}$913.2 billion (2015 est.)</Text>
                        </View>
                        <View style={styles.section_info}>
                            <Text style={styles.section_info_key}>GDP - per capita (PPP)</Text>
                            <Text style={styles.section_info_value}>$20,900 (2017 est.){"\n"}$20,600 (2016 est.){"\n"}$21,200 (2015 est.)</Text>
                        </View>
                        <View style={styles.section_info}>
                            <Text style={styles.section_info_key}>Gross National Saving</Text>
                            <Text style={styles.section_info_value}>17.6% of GDP (2017 est.)</Text>
                        </View>
                        <View style={styles.section_info}>
                            <Text style={styles.section_info_key}>GDP Composition</Text>
                            <Text style={styles.section_info_value}>agriculture: 10.8% (2017 est.){"\n"}industry: 28.1% (2017 est.){"\n"}services: 61.1% (2017 est.)</Text>
                        </View>
                        <View style={styles.section_info}>
                            <Text style={styles.section_info_key}>Agriculture Products</Text>
                            <Text style={styles.section_info_value}>sunflower seeds, lemons, soybeans, grapes, corn, tobacco, peanuts, tea, wheat; livestock</Text>
                        </View>
                        <View style={styles.section_info}>
                            <Text style={styles.section_info_key}>Industries</Text>
                            <Text style={styles.section_info_value}>food processing, motor vehicles, consumer durables, textiles, chemicals and petrochemicals, printing, metallurgy, steel</Text>
                        </View>
                        <View style={styles.section_info}>
                            <Text style={styles.section_info_key}>Public Debt</Text>
                            <Text style={styles.section_info_value}>57.6% of GDP (2017 est.)</Text>
                        </View>
                        <View style={styles.section_info}>
                            <Text style={styles.section_info_key}>Inflation Rate (Consumer Prices)</Text>
                            <Text style={styles.section_info_value}>25.7% (2017 est.)</Text>
                        </View>
                        <View style={styles.section_info}>
                            <Text style={styles.section_info_key}>Current Account Balance</Text>
                            <Text style={styles.section_info_value}>-$31.32 billion (2017 est.)</Text>
                        </View>
                        <View style={styles.section_info}>
                            <Text style={styles.section_info_key}>Exports</Text>
                            <Text style={styles.section_info_value}>$58.45 billion (2017 est.)</Text>
                        </View>
                        <View style={styles.section_info}>
                            <Text style={styles.section_info_key}>Exports Partners</Text>
                            <Text style={styles.section_info_value}>Brazil 16.1%, US 7.9%, China 7.5%, Chile 4.4% (2017)</Text>
                        </View>
                        <View style={styles.section_info}>
                            <Text style={styles.section_info_key}>Exports Commodities</Text>
                            <Text style={styles.section_info_value}>soybeans and derivatives, petroleum and gas, vehicles, corn, wheat</Text>
                        </View>
                    </View>
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
        padding: 10,
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
    },
    section: {
        alignItems:'flex-start',
        margin: 10,
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
    },
    section_header_title: {
        marginBottom: 0,
    },
    section_header_divider: {
        borderBottomColor: 'grey',
        borderBottomWidth: 1,
        width: '60%',
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