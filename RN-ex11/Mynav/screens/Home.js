// ./screens/Home.js
import React from 'react';
import {StyleSheet, Button, View, Text} from 'react-native';
import Constants from 'expo-constants';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import { ScrollView } from 'react-native-gesture-handler';

function Home( {navigation} ) {
    return (
        <>
            <ScrollView style = { {height: 150} }>
            <Button title="로또 번호 생성기" onPress={ () => {
                navigation.navigate('LottoGenerator')
            }} />
            <Button title="디지털 시계" onPress={ () => {
                navigation.navigate('ClockDigital')
            }} />
            </ScrollView>
            <View style = { {flex: 1} } />
        </>
    )
}

export default Home;