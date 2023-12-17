// ./component/Row.js
import React from 'react';
import { StyleSheet, View } from 'react-native';
import styled from "styled-components/native";

function Row( { children, style } ) {
    return (
        <View style={ [ styles.row, style ] }>
            { children }
        </View>
    )
}

const styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
    }
})

// const Row = styled.View`
//     flex-direction: row;
// `;

export default Row;