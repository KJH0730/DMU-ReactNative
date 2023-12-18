import * as React from 'react';
import { Button, SafeAreaView, StyleSheet, View, Text } from 'react-native';
import styled from 'styled-components/native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ClockDigital from './screens/ClockDigital';
import LottoGenerator from './screens/LottoGenerator';
import Home from './screens/Home';
import HomeF from './screens/HomeF';
import HomeP from './screens/HomeP';
import SimpleTodo from './screens/SimpleTodo';
import ZipCodeFinder from './screens/ZipCodeFinder';
import List from './pages/List';
import Form from './pages/Form';
import Detail from './pages/Detail';

const Stack = createStackNavigator();

function Diary() {
  return (
      <Stack.Navigator>
        { <Stack.Screen name="List" component={List}  options={{title:'일기 목록'}}/> }
        { <Stack.Screen name="Detail" component={Detail} /> }
        { <Stack.Screen name="Form" component={Form} options={{title:'일기 작성'}}/> }

      </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="HomeP" component={HomeP} />
        <Stack.Screen name="LottoGenerator" component={LottoGenerator} />
        <Stack.Screen name="ClockDigital" component={ClockDigital} />
        <Stack.Screen name="SimpleTodo" component={SimpleTodo} />
        <Stack.Screen name="Diary" component={Diary} />
        <Stack.Screen name="ZipCodeFinder" component={ZipCodeFinder} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}



