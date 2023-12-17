import React from 'react';
import styled from 'styled-components/native';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

// const styles = StyleSheet.create({
//     container: {
//         width: '100%',
//         hegiht: 50,
//         backgroundColor: '#000000',
//         justifyContent: 'center',
//         alignItems: 'center',
//     },
//     label: {
//         fontSize: 16,
//         fontWeight: 'bold',
//         color: '#ffffff'
//     }
// })

const Container = styled.TouchableOpacity`
    width: 100%;
    height: 50px;
    background: #000000;
    justify-content: center;
    align-items: center;
`;

const Label = styled.Text`
    font-size: 16px;
    font-weight: bold;
    color: #ffffff;
`;

function Button(props) {
    return (
        <Container onPress={ props.onPress }>
            <Label>{props.children}</Label>
        </Container>
    )
}

// function Button(props) {
//     return (
//         <TouchableOpacity style={styles.container} onPress={props.onPress}>
//             <Text style={styles.label}>{props.children}</Text>
//         </TouchableOpacity>
//     )
// }

export default Button;