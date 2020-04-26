import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Header from './components/Header';
import Home from './screens/Home';
import List from './screens/List';
import Game from './screens/Game';
import Information from './screens/Information';

import db from './database/test';


export default function App() {

    const[screenState, setScreenState] = useState(0); 
    const[selectedCountry, setSelectedCountry] = useState(db[Object.keys(db)[0]]); 

    var CountryList = []

    Object.keys(db).forEach(c => {
        if (c != 'default')    
        {    
            CountryList.push(db[c])
        }
    })

    const renderCountyInfo = (countryId) => {
        console.log(countryId);
        Object.keys(db).forEach(c => {
            if (db[c].id == countryId){
                setSelectedCountry(db[c])
                console.log(db[c].name);
            }
        })   
        setScreenState(2);
  
        
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
        <View style={styles.container}>
            <Header title="Project Orbis" screenState={screenState} onHome={setScreenState}></Header> 
            {screenContent}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff',
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
});
