import React, { useEffect } from "react";
import Container from "../components/Container";
import Contents from "../components/Contents";
import Button from "../components/Button";
import styled from "styled-components/native";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Label = styled.Text`
    font-size: 20px;
    font-weight: bold;
    margin-bottom: 12px;
`;

const Input = styled.TextInput`
    width: 100%;
    border: 1px solid #666666;
    padding: 8px;
    font-size: 20px;
    margin-bottom: 12px;
`;

function Form({navigation, route}) {
    const [date, setDate] = React.useState('');
    const [text,setText] = React.useState('');

    useEffect(() => {
        if (route.params.isEdit) {
            setDate(route.params.date);
            setText(route.params.text);
        }
    }, [route.params.date, route.params.text, route.params.isEdit]);

    const handleButtonPress = async () => {
        if (date === '' || text === '') return;

        let list = await AsyncStorage.getItem('list');
        if(list === null) {
            list = [];
        } else {
            list = JSON.parse(list);
        }

        if(route.params.isEdit) {
            const updateDiaryIndex = list.findIndex(item => item.date === date);
            if(updateDiaryIndex !== -1) {
                list[updateDiaryIndex] = { date, text };
            }
        } else {
            list.push({
                date,
                text,
            });
        }

        await AsyncStorage.setItem('list', JSON.stringify(list));

        if(route.params.onEdit) {
            route.params.onEdit();
        }

        navigation.goBack();
    }

    // const store = async () => {
    //     if( date === '') return;
    //     if( text === '') return;
    
    //     let list = await AsyncStorage.getItem('list');
    //     if( list === null) {
    //         list = [];
    //     }
    //     else {
    //         list = JSON.parse( list );
    //     }

    //     list.push( {
    //         date,
    //         text,
    //     });
    //     await AsyncStorage.setItem('list', JSON.stringify(list));
    //     navigation.goBack();
    // }

    return (
        <Container>
            <Contents>
                <Label>날짜</Label>
                <Input 
                    placeholder={'YYYY-MM-DD 형식으로 입력하세요'}
                    value={date}
                    onChangeText={value => setDate(value)}
                />

                <Label>내용</Label>
                <Input
                    multiline={true}
                    style={{height:200}}
                    value={text}
                    onChangeText={value => setText(value)}
                />
            </Contents>
            <Button onPress={handleButtonPress}>
                {route.params.isEdit ? '수정' : '저장'}
            </Button>
        </Container>
    )
}

export default Form;