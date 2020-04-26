import React, { useState } from 'react';
import {View, StyleSheet, TouchableOpacity , Text, Image, ScrollView} from 'react-native';
import InfoItem from '../components/InfoItem'


const Information = props => {
    var introduction = props.selectedCountry['Introduction']
    if (introduction.length > 500) {introduction=introduction.slice(0,500) + '..'}
    

    //console.log(img_flag)

    return (
        <View style={styles.body}>
            <ScrollView >
                <View style={styles.countryImg}> 
                    <Image
                        style={styles.countryImg_flag}         
                        source={props.selectedCountry['img_flag']} 
                    />
                    <Image
                        style={styles.countryImg_flag}         
                        source={props.selectedCountry['img_location']} 

                    />
                </View>
                <View style={styles.section_header}>
                    <Image style={styles.section_header_icon} source={require('../assets/info-icons/information.png')}></Image>
                    <Text style={styles.section_header_title}>INTRODUCTION</Text>
                    <View style={styles.section_header_divider}></View>
                </View>
                <View style={styles.section}>
                    <TouchableOpacity>
    <Text style={styles.section_text}>{introduction}</Text>
                        <Text style={styles.section_readmore}>Read more..</Text>
                    </TouchableOpacity>
                </View>
                    <View style={styles.section_header}>
                        <Image style={styles.section_header_icon} source={require('../assets/menu-icons/government.png')}></Image>
                        <Text style={styles.section_header_title}>GOVERNMENT</Text>
                        <View style={styles.section_header_divider}></View>
                    </View>
                    <View style={styles.section}>
                        <InfoItem
                            InfoKey='Name (long)'
                            InfoValue={props.selectedCountry['Name (Long)']}
                        />   
                        <InfoItem
                            InfoKey='Local Name (long)'
                            InfoValue={props.selectedCountry['Local Name (long)']}
                        />
                        <InfoItem
                            InfoKey='Etymology'
                            InfoValue={props.selectedCountry['Etymology']}
                        />
                        <InfoItem
                            InfoKey='Government Type'
                            InfoValue={props.selectedCountry['Government Type']}
                        />
                        <InfoItem
                            InfoKey='Capital'
                            InfoValue={props.selectedCountry['Capital']}
                        />
                        <InfoItem
                            InfoKey='Independence'
                            InfoValue={props.selectedCountry['Independence']}
                        />
                        <InfoItem
                            InfoKey='National Holiday'
                            InfoValue={props.selectedCountry['National Holiday']}
                        />
                        <InfoItem
                            InfoKey='Chief of State'
                            InfoValue={props.selectedCountry['Chief of State']}
                        />
                        <InfoItem
                            InfoKey='Head of Government'
                            InfoValue={props.selectedCountry['Head of Government']}
                        />
                    </View>
                    <View style={styles.section_header}>
                        <Image style={styles.section_header_icon} source={require('../assets/menu-icons/money.png')}></Image>
                        <Text style={styles.section_header_title}>ECONOMY</Text>
                        <View style={styles.section_header_divider}></View>
                    </View>
                    <View style={styles.section}>
                        <TouchableOpacity>
                        <Text style={styles.section_text}>{props.selectedCountry['Economy']}</Text>
                            <Text style={styles.section_readmore}>Read more..</Text>
                        </TouchableOpacity>
                        <InfoItem
                            InfoKey='GDP (official exchange rate)'
                            InfoValue={props.selectedCountry['GDP (official exchange rate)']}
                        />
                        <InfoItem
                            InfoKey='GDP (purchasing power parity)'
                            InfoValue={props.selectedCountry['GDP (purchasing power parity)']}
                        />
                        <InfoItem
                            InfoKey='GDP - per capita (PPP)'
                            InfoValue={props.selectedCountry['GDP - per capita (PPP)']}
                        />
                        <InfoItem
                            InfoKey='Gross National Saving'
                            InfoValue={props.selectedCountry['Gross National Saving']}
                        />
                        <InfoItem
                            InfoKey='GDP Composition'
                            InfoValue={props.selectedCountry['P composition - ag']}
                        />
                        <InfoItem
                            InfoKey='Agriculture Products'
                            InfoValue={props.selectedCountry['GDP composition - ag']}
                        />
                        <InfoItem
                            InfoKey='Industries'
                            InfoValue={props.selectedCountry['Industries']}
                        />
                        <InfoItem
                            InfoKey='Public Debt'
                            InfoValue={props.selectedCountry['Public Debt']}
                        />
                        <InfoItem
                            InfoKey='Public Debt'
                            InfoValue={props.selectedCountry['Public Debt']}
                        />
                        <InfoItem
                            InfoKey='Inflation Rate (Consumer Prices)'
                            InfoValue={props.selectedCountry['Inflation Rate']}
                        />
                        <InfoItem
                            InfoKey='Current Account Balance'
                            InfoValue={props.selectedCountry['Current Account Balance']}
                        />
                        <InfoItem
                            InfoKey='Exports'
                            InfoValue={props.selectedCountry['Exports']}
                        />
                        <InfoItem
                            InfoKey='Exports Commodities'
                            InfoValue={props.selectedCountry['Exports Commodities']}
                        />
                        <InfoItem
                            InfoKey='Exports Partners'
                            InfoValue={props.selectedCountry['Exports Partners']}
                        />
                        <InfoItem
                            InfoKey='Imports'
                            InfoValue={props.selectedCountry['']}
                        />
                        <InfoItem
                            InfoKey='Imports Commodities'
                            InfoValue={props.selectedCountry['']}
                        />
                        <InfoItem
                            InfoKey='Imports Partners'
                            InfoValue={props.selectedCountry['']}
                        />
                        <InfoItem
                            InfoKey='Reserves of Foreign Exchange and Gold'
                            InfoValue={props.selectedCountry['']}
                        />
                        <InfoItem
                            InfoKey='Debt'
                            InfoValue={props.selectedCountry['']}
                        />
                        <InfoItem
                            InfoKey='Imports'
                            InfoValue={props.selectedCountry['']}
                        />

                    </View>
                    <View style={styles.section_header}>
                        <Image style={styles.section_header_icon} source={require('../assets/menu-icons/money.png')}></Image>
                        <Text style={styles.section_header_title}>SOCIETY</Text>
                        <View style={styles.section_header_divider}></View>
                    </View>
                    <View style={styles.section}>
                        <TouchableOpacity>
                        <Text style={styles.section_text}>{props.selectedCountry['Economy']}</Text>
                            <Text style={styles.section_readmore}>Read more..</Text>
                        </TouchableOpacity>
                        <View style={styles.section_info}>
                            <Text style={styles.section_info_key}>GDP (official exchange rate)</Text>
                            <Text style={styles.section_info_value}>{props.selectedCountry['GDP (official exchange rate)']}</Text>
                        </View>
                        <View style={styles.section_info}>
                            <Text style={styles.section_info_key}>GDP (purchasing power parity)</Text>
                            <Text style={styles.section_info_value}>{props.selectedCountry['GDP (purchasing power parity)']}</Text>
                        </View>
                        <View style={styles.section_info}>
                            <Text style={styles.section_info_key}>GDP - per capita (PPP)</Text>
                            <Text style={styles.section_info_value}>{props.selectedCountry['GDP Per Capita (PPP)']}</Text>
                        </View>
                        <View style={styles.section_info}>
                            <Text style={styles.section_info_key}>Gross National Saving</Text>
                            <Text style={styles.section_info_value}>{props.selectedCountry['Gross National Saving']}</Text>
                        </View>
                        <View style={styles.section_info}>
                            <Text style={styles.section_info_key}>GDP Composition</Text>
                            <Text style={styles.section_info_value}>{props.selectedCountry['P composition - ag']}</Text>
                        </View>
                        <View style={styles.section_info}>
                            <Text style={styles.section_info_key}>Agriculture Products</Text>
                            <Text style={styles.section_info_value}>{props.selectedCountry['GDP composition - ag']}</Text>
                        </View>
                        <View style={styles.section_info}>
                            <Text style={styles.section_info_key}>Industries</Text>
                            <Text style={styles.section_info_value}>{props.selectedCountry['Industries']}</Text>
                        </View>
                        <View style={styles.section_info}>
                            <Text style={styles.section_info_key}>Public Debt</Text>
                            <Text style={styles.section_info_value}>{props.selectedCountry['Public Debt']}</Text>
                        </View>
                        <View style={styles.section_info}>
                            <Text style={styles.section_info_key}>Inflation Rate (Consumer Prices)</Text>
                            <Text style={styles.section_info_value}>{props.selectedCountry['Inflaction Rate']}</Text>
                        </View>
                        <View style={styles.section_info}>
                            <Text style={styles.section_info_key}>Current Account Balance</Text>
                            <Text style={styles.section_info_value}>{props.selectedCountry['Current Account Balance']}</Text>
                        </View>
                        <View style={styles.section_info}>
                            <Text style={styles.section_info_key}>Exports</Text>
                            <Text style={styles.section_info_value}>{props.selectedCountry['Exports']}</Text>
                        </View>
                        <View style={styles.section_info}>
                            <Text style={styles.section_info_key}>Exports Partners</Text>
                            <Text style={styles.section_info_value}>{props.selectedCountry['Exports Partners']}</Text>
                        </View>
                        <View style={styles.section_info}>
                            <Text style={styles.section_info_key}>Exports Commodities</Text>
                            <Text style={styles.section_info_value}>{props.selectedCountry['Exports Commodities']}</Text>
                        </View>
                    </View>
                    <View style={styles.section_header}>
                        <Image style={styles.section_header_icon} source={require('../assets/menu-icons/money.png')}></Image>
                        <Text style={styles.section_header_title}>GEOGRAPHY</Text>
                        <View style={styles.section_header_divider}></View>
                    </View>
                    <View style={styles.section}>
                        <TouchableOpacity>
                        <Text style={styles.section_text}>{props.selectedCountry['Economy']}</Text>
                            <Text style={styles.section_readmore}>Read more..</Text>
                        </TouchableOpacity>
                        <View style={styles.section_info}>
                            <Text style={styles.section_info_key}>GDP (official exchange rate)</Text>
                            <Text style={styles.section_info_value}>{props.selectedCountry['GDP (official exchange rate)']}</Text>
                        </View>
                        <View style={styles.section_info}>
                            <Text style={styles.section_info_key}>GDP (purchasing power parity)</Text>
                            <Text style={styles.section_info_value}>{props.selectedCountry['GDP (purchasing power parity)']}</Text>
                        </View>
                        <View style={styles.section_info}>
                            <Text style={styles.section_info_key}>GDP - per capita (PPP)</Text>
                            <Text style={styles.section_info_value}>{props.selectedCountry['GDP Per Capita (PPP)']}</Text>
                        </View>
                        <View style={styles.section_info}>
                            <Text style={styles.section_info_key}>Gross National Saving</Text>
                            <Text style={styles.section_info_value}>{props.selectedCountry['Gross National Saving']}</Text>
                        </View>
                        <View style={styles.section_info}>
                            <Text style={styles.section_info_key}>GDP Composition</Text>
                            <Text style={styles.section_info_value}>{props.selectedCountry['P composition - ag']}</Text>
                        </View>
                        <View style={styles.section_info}>
                            <Text style={styles.section_info_key}>Agriculture Products</Text>
                            <Text style={styles.section_info_value}>{props.selectedCountry['GDP composition - ag']}</Text>
                        </View>
                        <View style={styles.section_info}>
                            <Text style={styles.section_info_key}>Industries</Text>
                            <Text style={styles.section_info_value}>{props.selectedCountry['Industries']}</Text>
                        </View>
                        <View style={styles.section_info}>
                            <Text style={styles.section_info_key}>Public Debt</Text>
                            <Text style={styles.section_info_value}>{props.selectedCountry['Public Debt']}</Text>
                        </View>
                        <View style={styles.section_info}>
                            <Text style={styles.section_info_key}>Inflation Rate (Consumer Prices)</Text>
                            <Text style={styles.section_info_value}>{props.selectedCountry['Inflaction Rate']}</Text>
                        </View>
                        <View style={styles.section_info}>
                            <Text style={styles.section_info_key}>Current Account Balance</Text>
                            <Text style={styles.section_info_value}>{props.selectedCountry['Current Account Balance']}</Text>
                        </View>
                        <View style={styles.section_info}>
                            <Text style={styles.section_info_key}>Exports</Text>
                            <Text style={styles.section_info_value}>{props.selectedCountry['Exports']}</Text>
                        </View>
                        <View style={styles.section_info}>
                            <Text style={styles.section_info_key}>Exports Partners</Text>
                            <Text style={styles.section_info_value}>{props.selectedCountry['Exports Partners']}</Text>
                        </View>
                        <View style={styles.section_info}>
                            <Text style={styles.section_info_key}>Exports Commodities</Text>
                            <Text style={styles.section_info_value}>{props.selectedCountry['Exports Commodities']}</Text>
                        </View>
                    </View>
                    <View style={styles.section_header}>
                        <Image style={styles.section_header_icon} source={require('../assets/menu-icons/money.png')}></Image>
                        <Text style={styles.section_header_title}>ENERGY</Text>
                        <View style={styles.section_header_divider}></View>
                    </View>
                    <View style={styles.section}>
                        <TouchableOpacity>
                        <Text style={styles.section_text}>{props.selectedCountry['Economy']}</Text>
                            <Text style={styles.section_readmore}>Read more..</Text>
                        </TouchableOpacity>
                        <View style={styles.section_info}>
                            <Text style={styles.section_info_key}>GDP (official exchange rate)</Text>
                            <Text style={styles.section_info_value}>{props.selectedCountry['GDP (official exchange rate)']}</Text>
                        </View>
                        <View style={styles.section_info}>
                            <Text style={styles.section_info_key}>GDP (purchasing power parity)</Text>
                            <Text style={styles.section_info_value}>{props.selectedCountry['GDP (purchasing power parity)']}</Text>
                        </View>
                        <View style={styles.section_info}>
                            <Text style={styles.section_info_key}>GDP - per capita (PPP)</Text>
                            <Text style={styles.section_info_value}>{props.selectedCountry['GDP Per Capita (PPP)']}</Text>
                        </View>
                        <View style={styles.section_info}>
                            <Text style={styles.section_info_key}>Gross National Saving</Text>
                            <Text style={styles.section_info_value}>{props.selectedCountry['Gross National Saving']}</Text>
                        </View>
                        <View style={styles.section_info}>
                            <Text style={styles.section_info_key}>GDP Composition</Text>
                            <Text style={styles.section_info_value}>{props.selectedCountry['P composition - ag']}</Text>
                        </View>
                        <View style={styles.section_info}>
                            <Text style={styles.section_info_key}>Agriculture Products</Text>
                            <Text style={styles.section_info_value}>{props.selectedCountry['GDP composition - ag']}</Text>
                        </View>
                        <View style={styles.section_info}>
                            <Text style={styles.section_info_key}>Industries</Text>
                            <Text style={styles.section_info_value}>{props.selectedCountry['Industries']}</Text>
                        </View>
                        <View style={styles.section_info}>
                            <Text style={styles.section_info_key}>Public Debt</Text>
                            <Text style={styles.section_info_value}>{props.selectedCountry['Public Debt']}</Text>
                        </View>
                        <View style={styles.section_info}>
                            <Text style={styles.section_info_key}>Inflation Rate (Consumer Prices)</Text>
                            <Text style={styles.section_info_value}>{props.selectedCountry['Inflaction Rate']}</Text>
                        </View>
                        <View style={styles.section_info}>
                            <Text style={styles.section_info_key}>Current Account Balance</Text>
                            <Text style={styles.section_info_value}>{props.selectedCountry['Current Account Balance']}</Text>
                        </View>
                        <View style={styles.section_info}>
                            <Text style={styles.section_info_key}>Exports</Text>
                            <Text style={styles.section_info_value}>{props.selectedCountry['Exports']}</Text>
                        </View>
                        <View style={styles.section_info}>
                            <Text style={styles.section_info_key}>Exports Partners</Text>
                            <Text style={styles.section_info_value}>{props.selectedCountry['Exports Partners']}</Text>
                        </View>
                        <View style={styles.section_info}>
                            <Text style={styles.section_info_key}>Exports Commodities</Text>
                            <Text style={styles.section_info_value}>{props.selectedCountry['Exports Commodities']}</Text>
                        </View>
                    </View>
                    <View style={styles.section_header}>
                        <Image style={styles.section_header_icon} source={require('../assets/menu-icons/money.png')}></Image>
                        <Text style={styles.section_header_title}>COMMUNICATIONS</Text>
                        <View style={styles.section_header_divider}></View>
                    </View>
                    <View style={styles.section}>
                        <TouchableOpacity>
                        <Text style={styles.section_text}>{props.selectedCountry['Economy']}</Text>
                            <Text style={styles.section_readmore}>Read more..</Text>
                        </TouchableOpacity>
                        <View style={styles.section_info}>
                            <Text style={styles.section_info_key}>GDP (official exchange rate)</Text>
                            <Text style={styles.section_info_value}>{props.selectedCountry['GDP (official exchange rate)']}</Text>
                        </View>
                        <View style={styles.section_info}>
                            <Text style={styles.section_info_key}>GDP (purchasing power parity)</Text>
                            <Text style={styles.section_info_value}>{props.selectedCountry['GDP (purchasing power parity)']}</Text>
                        </View>
                        <View style={styles.section_info}>
                            <Text style={styles.section_info_key}>GDP - per capita (PPP)</Text>
                            <Text style={styles.section_info_value}>{props.selectedCountry['GDP Per Capita (PPP)']}</Text>
                        </View>
                        <View style={styles.section_info}>
                            <Text style={styles.section_info_key}>Gross National Saving</Text>
                            <Text style={styles.section_info_value}>{props.selectedCountry['Gross National Saving']}</Text>
                        </View>
                        <View style={styles.section_info}>
                            <Text style={styles.section_info_key}>GDP Composition</Text>
                            <Text style={styles.section_info_value}>{props.selectedCountry['P composition - ag']}</Text>
                        </View>
                        <View style={styles.section_info}>
                            <Text style={styles.section_info_key}>Agriculture Products</Text>
                            <Text style={styles.section_info_value}>{props.selectedCountry['GDP composition - ag']}</Text>
                        </View>
                        <View style={styles.section_info}>
                            <Text style={styles.section_info_key}>Industries</Text>
                            <Text style={styles.section_info_value}>{props.selectedCountry['Industries']}</Text>
                        </View>
                        <View style={styles.section_info}>
                            <Text style={styles.section_info_key}>Public Debt</Text>
                            <Text style={styles.section_info_value}>{props.selectedCountry['Public Debt']}</Text>
                        </View>
                        <View style={styles.section_info}>
                            <Text style={styles.section_info_key}>Inflation Rate (Consumer Prices)</Text>
                            <Text style={styles.section_info_value}>{props.selectedCountry['Inflaction Rate']}</Text>
                        </View>
                        <View style={styles.section_info}>
                            <Text style={styles.section_info_key}>Current Account Balance</Text>
                            <Text style={styles.section_info_value}>{props.selectedCountry['Current Account Balance']}</Text>
                        </View>
                        <View style={styles.section_info}>
                            <Text style={styles.section_info_key}>Exports</Text>
                            <Text style={styles.section_info_value}>{props.selectedCountry['Exports']}</Text>
                        </View>
                        <View style={styles.section_info}>
                            <Text style={styles.section_info_key}>Exports Partners</Text>
                            <Text style={styles.section_info_value}>{props.selectedCountry['Exports Partners']}</Text>
                        </View>
                        <View style={styles.section_info}>
                            <Text style={styles.section_info_key}>Exports Commodities</Text>
                            <Text style={styles.section_info_value}>{props.selectedCountry['Exports Commodities']}</Text>
                        </View>
                    </View>
                    <View style={styles.section_header}>
                        <Image style={styles.section_header_icon} source={require('../assets/menu-icons/money.png')}></Image>
                        <Text style={styles.section_header_title}>MILITARY</Text>
                        <View style={styles.section_header_divider}></View>
                    </View>
                    <View style={styles.section}>
                        <TouchableOpacity>
                        <Text style={styles.section_text}>{props.selectedCountry['Economy']}</Text>
                            <Text style={styles.section_readmore}>Read more..</Text>
                        </TouchableOpacity>
                        <View style={styles.section_info}>
                            <Text style={styles.section_info_key}>GDP (official exchange rate)</Text>
                            <Text style={styles.section_info_value}>{props.selectedCountry['GDP (official exchange rate)']}</Text>
                        </View>
                        <View style={styles.section_info}>
                            <Text style={styles.section_info_key}>GDP (purchasing power parity)</Text>
                            <Text style={styles.section_info_value}>{props.selectedCountry['GDP (purchasing power parity)']}</Text>
                        </View>
                        <View style={styles.section_info}>
                            <Text style={styles.section_info_key}>GDP - per capita (PPP)</Text>
                            <Text style={styles.section_info_value}>{props.selectedCountry['GDP Per Capita (PPP)']}</Text>
                        </View>
                        <View style={styles.section_info}>
                            <Text style={styles.section_info_key}>Gross National Saving</Text>
                            <Text style={styles.section_info_value}>{props.selectedCountry['Gross National Saving']}</Text>
                        </View>
                        <View style={styles.section_info}>
                            <Text style={styles.section_info_key}>GDP Composition</Text>
                            <Text style={styles.section_info_value}>{props.selectedCountry['P composition - ag']}</Text>
                        </View>
                        <View style={styles.section_info}>
                            <Text style={styles.section_info_key}>Agriculture Products</Text>
                            <Text style={styles.section_info_value}>{props.selectedCountry['GDP composition - ag']}</Text>
                        </View>
                        <View style={styles.section_info}>
                            <Text style={styles.section_info_key}>Industries</Text>
                            <Text style={styles.section_info_value}>{props.selectedCountry['Industries']}</Text>
                        </View>
                        <View style={styles.section_info}>
                            <Text style={styles.section_info_key}>Public Debt</Text>
                            <Text style={styles.section_info_value}>{props.selectedCountry['Public Debt']}</Text>
                        </View>
                        <View style={styles.section_info}>
                            <Text style={styles.section_info_key}>Inflation Rate (Consumer Prices)</Text>
                            <Text style={styles.section_info_value}>{props.selectedCountry['Inflaction Rate']}</Text>
                        </View>
                        <View style={styles.section_info}>
                            <Text style={styles.section_info_key}>Current Account Balance</Text>
                            <Text style={styles.section_info_value}>{props.selectedCountry['Current Account Balance']}</Text>
                        </View>
                        <View style={styles.section_info}>
                            <Text style={styles.section_info_key}>Exports</Text>
                            <Text style={styles.section_info_value}>{props.selectedCountry['Exports']}</Text>
                        </View>
                        <View style={styles.section_info}>
                            <Text style={styles.section_info_key}>Exports Partners</Text>
                            <Text style={styles.section_info_value}>{props.selectedCountry['Exports Partners']}</Text>
                        </View>
                        <View style={styles.section_info}>
                            <Text style={styles.section_info_key}>Exports Commodities</Text>
                            <Text style={styles.section_info_value}>{props.selectedCountry['Exports Commodities']}</Text>
                        </View>
                    </View>
                    <View style={styles.section_header}>
                        <Image style={styles.section_header_icon} source={require('../assets/menu-icons/money.png')}></Image>
                        <Text style={styles.section_header_title}>TRANSPORTATION</Text>
                        <View style={styles.section_header_divider}></View>
                    </View>
                    <View style={styles.section}>
                        <TouchableOpacity>
                        <Text style={styles.section_text}>{props.selectedCountry['Economy']}</Text>
                            <Text style={styles.section_readmore}>Read more..</Text>
                        </TouchableOpacity>
                        <View style={styles.section_info}>
                            <Text style={styles.section_info_key}>GDP (official exchange rate)</Text>
                            <Text style={styles.section_info_value}>{props.selectedCountry['GDP (official exchange rate)']}</Text>
                        </View>
                        <View style={styles.section_info}>
                            <Text style={styles.section_info_key}>GDP (purchasing power parity)</Text>
                            <Text style={styles.section_info_value}>{props.selectedCountry['GDP (purchasing power parity)']}</Text>
                        </View>
                        <View style={styles.section_info}>
                            <Text style={styles.section_info_key}>GDP - per capita (PPP)</Text>
                            <Text style={styles.section_info_value}>{props.selectedCountry['GDP Per Capita (PPP)']}</Text>
                        </View>
                        <View style={styles.section_info}>
                            <Text style={styles.section_info_key}>Gross National Saving</Text>
                            <Text style={styles.section_info_value}>{props.selectedCountry['Gross National Saving']}</Text>
                        </View>
                        <View style={styles.section_info}>
                            <Text style={styles.section_info_key}>GDP Composition</Text>
                            <Text style={styles.section_info_value}>{props.selectedCountry['P composition - ag']}</Text>
                        </View>
                        <View style={styles.section_info}>
                            <Text style={styles.section_info_key}>Agriculture Products</Text>
                            <Text style={styles.section_info_value}>{props.selectedCountry['GDP composition - ag']}</Text>
                        </View>
                        <View style={styles.section_info}>
                            <Text style={styles.section_info_key}>Industries</Text>
                            <Text style={styles.section_info_value}>{props.selectedCountry['Industries']}</Text>
                        </View>
                        <View style={styles.section_info}>
                            <Text style={styles.section_info_key}>Public Debt</Text>
                            <Text style={styles.section_info_value}>{props.selectedCountry['Public Debt']}</Text>
                        </View>
                        <View style={styles.section_info}>
                            <Text style={styles.section_info_key}>Inflation Rate (Consumer Prices)</Text>
                            <Text style={styles.section_info_value}>{props.selectedCountry['Inflaction Rate']}</Text>
                        </View>
                        <View style={styles.section_info}>
                            <Text style={styles.section_info_key}>Current Account Balance</Text>
                            <Text style={styles.section_info_value}>{props.selectedCountry['Current Account Balance']}</Text>
                        </View>
                        <View style={styles.section_info}>
                            <Text style={styles.section_info_key}>Exports</Text>
                            <Text style={styles.section_info_value}>{props.selectedCountry['Exports']}</Text>
                        </View>
                        <View style={styles.section_info}>
                            <Text style={styles.section_info_key}>Exports Partners</Text>
                            <Text style={styles.section_info_value}>{props.selectedCountry['Exports Partners']}</Text>
                        </View>
                        <View style={styles.section_info}>
                            <Text style={styles.section_info_key}>Exports Commodities</Text>
                            <Text style={styles.section_info_value}>{props.selectedCountry['Exports Commodities']}</Text>
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