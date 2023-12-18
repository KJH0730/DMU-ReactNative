// ./screens/Home.js
import React, {useCallback} from 'react';
import {StyleSheet, Button, View, Text, ScrollView, FlatList} from 'react-native';
import Constants from 'expo-constants';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import LottoGenerator from './LottoGenerator';
import ClockDigital from './ClockDigital';

const screenList = [
    {key: 'LottoGenerator', title: '로또 번호 생성기', link: 'LottoGenerator'},
    {key: 'ClockDigital', title: '디지털 시계', link: 'ClockDigital'},
]

function HomeF( {navigation} ) {
    const renderItem = useCallback( ({ item }) => {
            return <Button title={ item.title } onPress={ () => {
            navigation.navigate(item.link);
        }} />
    }, []);

//     function renderItem( {item }) {
//         return <Button title={ item.title } onPress={ () => {
//             navigation.navigate(item.link);
//     }} />
// }

    return (
        <>
            <FlatList data = { screenList }
                renderItem={ renderItem }
            />
        </>
    )
}

export default HomeF;