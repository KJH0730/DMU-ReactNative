// ./components/AddressItem.js
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import styled from 'styled-components/native';

function AddressItem( { item } ) {
   return (
       <View style={ styles.container }>
           <Text>{`[${item.zipNo}] ${item.roadAddr}`}</Text>
       </View>
   )
}

const styles = StyleSheet.create({
    container: {
        paddingVertical: 12,
        borderBottomColor: '#666',
        borderBottomWidth: 1,
    }
});

// const Container = styled.View`
//     padding-vertical: 12px;
//     border-bottom-color: #666;
//     border-bottom-width: 1px;
// `;

export default AddressItem;
