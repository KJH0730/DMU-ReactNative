// ./screens/ZipCodeFinder.js
import React, { useCallback, useEffect, useState } from 'react';
import { Button, FlatList, Text, TextInput } from 'react-native';
import axios from 'axios';
import Padding from '../components/Padding';
import Row from '../components/Row';
import AddressItem from '../components/AddressItem';
import { StyleSheet } from 'react-native';

function ZipCodeFinder() {
    const [ keyword, setKeyword ] = useState('');
    const [ list, setList ] = useState( [] );
    const search = useCallback(()=>{
        axios.get('https://business.juso.go.kr/addrlink/addrLinkApi.do', {
            params: {
                confmKey: 'devU01TX0FVVEgyMDIzMTIxNDIwMTMyNTExNDM1OTQ=',
                currentPage: 1,
                countPerPage: 10,
                keyword,
                resultType: 'json'
            }
        } )
        .then( response => {
            setList( response.data.results.juso );
        } )
        .catch( console.warn )
    },[keyword, list]);
    
    return (
        <Padding style={ {flex: 1}}>
            <Row>
                <TextInput
                    style={[ styles.input, {flex: 1}]}
                    value={ keyword }
                    onChangeText={ text => setKeyword( text ) }
                />
                <Button title="검색" onPress={search} />
            </Row>
            <FlatList
                data={ list }
                renderItem={ item => <AddressItem item={ item.item }/> }
                keyExtractor={ item => item.rnMgtSn + item.roadAddr }
                style={{ flex: 1 }}
            />
        </Padding>
    )
}

const styles = StyleSheet.create({
    input: {
        borderWidth: 1,
        padding: 5,
        borderColor: '#00FF00',
    },
});

export default ZipCodeFinder;