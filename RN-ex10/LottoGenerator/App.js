import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View , TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';
import _ from 'lodash';
import React from 'react';

let numbers = [];

_.times(45, n => numbers.push( n+1 ));
numbers = _.shuffle( numbers );

const getBallColor = (number) => {
  if (number <= 10) return '#f1c40f'; // 노란색
  if (number <= 20) return '#3498db'; // 파란색
  if (number <= 30) return '#e74c3c'; // 빨강색
  if (number <= 40) return '#2c3e50'; // 검정색
  return '#2ecc71'; // 초록색
};

export default function App() {
  const [displayNumbers, setNumbers] = React.useState(_.take(_.shuffle(numbers), 6));

  const resetNumbers = () => {
    setNumbers(_.take(_.shuffle(numbers), 6));
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.row}>
        {displayNumbers.map((number, index) => (
          <View key={index} style={[styles.ball, { backgroundColor: getBallColor(number) }]}>
            <Text style={styles.text}>{number}</Text>
          </View>
        ))}
      </View>
      <TouchableOpacity style={styles.resetButton} onPress={resetNumbers}>
        <Text style={styles.resetButtonText}>다시하기</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

// export default function App() {
//   const[displayNumbers, setNumbers] = React.useState(_.shuffle(numbers));

//   return (
//     <SafeArrayView style = {styles.container}>
//       <View style = { styles.row }>
//         <View style = { styles.ball }>
//           <Text style = {styles.text}>{displayNumbers[0]}</Text>
//         </View>
//         <View style = { styles.ball }>
//           <Text style = {styles.text}>{displayNumbers[1]}</Text>
//         </View>
//         <View style = { styles.ball }>
//           <Text style = {styles.text}>{displayNumbers[2]}</Text>
//         </View>
//         <View style = { styles.ball }>
//           <Text style = {styles.text}>{displayNumbers[3]}</Text>
//         </View>
//         <View style = { styles.ball }>
//           <Text style = {styles.text}>{displayNumbers[4]}</Text>
//         </View>
//         <View style = { styles.ball }>
//           <Text style = {styles.text}>{displayNumbers[5]}</Text>
//         </View>
        
//       </View>
//     </SafeArrayView>
//   );
// }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  ball: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#3498db',
    margin: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: 'white',
    fontSize: 20,
  },
  resetButton: {
    marginTop: 20,
    padding: 10,
    backgroundColor: '#3498db',
    borderRadius: 5,
  },
  resetButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});