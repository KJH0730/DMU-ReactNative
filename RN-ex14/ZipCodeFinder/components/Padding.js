// ./components/Padding.js
import React from 'react';
import { StyleSheet, View } from 'react-native';
import styled from 'styled-components/native';

// const PaddingContainer = styled.View`
//     padding: ${(props) => props.padding ?? 20}px;
// `;

function Padding( { children, padding, style } ) {
    return (
        <View style={ [ { padding: padding ?? 20 }, style ]}>
            { children }
        </View>
    )
}

// function Padding( { children, padding, style } ) {
//     return (
//         <PaddingContainer padding={padding} style={style}>
//             { children }
//         </PaddingContainer>
//     )
// }

export default Padding;