import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Header from './components/Header';
import Home from './screens/Home';
import List from './screens/List';
import Game from './screens/Game';
import Information from './screens/Information';

import * as coreData from './assets/data/data';


export default function App() {
    const[screenState, setScreenState] = useState(0); 
    //const[selectCountry, setSelectCountry] = useState(0);
    var selectedCountry
    var CountryList = []

    Object.keys(coreData).forEach(c => {
        if (c != 'default')    
        {    
            CountryList.push(coreData[c])
            selectedCountry = coreData[c]
            console.log(c)
        }
    })

    const renderCountyInfo = (countryId) => {
        setScreenState(2);
        console.log(countryId);
        
    }
    let screenContent = '';

    switch(screenState) {
        case 0:
            screenContent = <Home onSelect={setScreenState}/>;
            break;
        case 1:
            screenContent = <List list={CountryList} onSelect={renderCountyInfo}/>;
            break;
        case 2:
            screenContent = <Information selectedCountry={selectedCountry}/>;
            break;
        default:
            screenContent = <Home onSelect={setScreenState}/>;
    }

    return (
        <View>
            <Header title="Project Orbis" screenState={screenState} onHome={setScreenState}></Header> 
            {screenContent}
        </View>
    );
}

const styles = StyleSheet.create({
    app_container: {
        
    }
});