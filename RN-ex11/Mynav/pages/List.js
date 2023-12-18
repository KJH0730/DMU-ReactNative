import React from "react";
import Container from "../components/Container";
import Contents from "../components/Contents";
import Button from "../components/Button";
import styled from 'styled-components/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import _ from 'lodash';
import { Button as Btn2 } from "react-native";
import { View } from "react-native";


const ListItem = styled.TouchableOpacity`
    width: 100%;
    padding: 12px;
    border-bottom-color: #aaaaaa;
    border-bottom-width: 1px;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;
const Label = styled.Text`
    font-size: 20px;
`;

const BtnContainer = styled.View`
    flex-direction: row;
    justify-content: space-between;
`;

function List({navigation}) {
    const[ list, setList ] = React.useState([]);
    const load = async () => {
        const data = await AsyncStorage.getItem('list');
        if(data !== null) {
            setList(JSON.parse( data ));
        }
    } 

    React.useEffect(() => {
        const unsubscribe = navigation.addListener('focus', () => {
            load();
        });

        load();
        return unsubscribe;
    }, [navigation]);

    const remove = async (date) => {
        let storedList = await AsyncStorage.getItem('list');

        if(storedList !== null) {
            storedList = JSON.parse(storedList);

            const updatedList = storedList.filter(item => item.date !== date);

            await AsyncStorage.setItem('list', JSON.stringify(updatedList));

            load();
        }
        
    }
    return (
        <Container>
            <Contents>
                {_.sortBy(list, 'date').map(item => {
                    return (
                        <ListItem key= {item.date}
                            onPress={ () => navigation.navigate( 'Detail', {date:item.date})}>
                            <Label>{item.date}</Label>
                            <BtnContainer>
                                <Btn2 title="수정" onPress={ () => navigation.navigate( 'Form', {date:item.date, text: item.text, onEdit: load, isEdit: true})}/>
                                <View style={{ width: 5 }} />
                                <Btn2 title="삭제" onPress={() => remove(item.date)}/>
                            </BtnContainer>
                        </ListItem>
                    )
                })}
            </Contents>
            <Button onPress={ () => navigation.navigate('Form', { isEdit: false})}>
                새 일기 작성
            </Button>
        </Container>
    )
}

export default List;