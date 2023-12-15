import React, { useState } from 'react';
import { View, Text, Button } from 'react-native';

const generateRandomNumbers = () => {
  const numbers = [];
  while (numbers.length < 6) {
    const randomNumber = Math.floor(Math.random() * 45) + 1;
    if (!numbers.includes(randomNumber)) {
      numbers.push(randomNumber);
    }
  }
  return numbers.sort((a, b) => a - b);
};

const getCircleColor = (number) => {
  const section = Math.ceil(number / 5);
  return `rgb(${section * 25}, ${section * 10}, ${section * 5})`;
};

const LottoGenerator = () => {
  const [lottoNumbers, setLottoNumbers] = useState([]);
  const [buttonText, setButtonText] = useState('번호 생성');

  const handleGenerateNumbers = () => {
    const numbers = generateRandomNumbers();
    setLottoNumbers(numbers);
    setButtonText('다시 생성');
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ marginBottom: 20, fontSize: 20 }}>로또 번호 생성기</Text>
      {lottoNumbers.map((number, index) => (
        <View
          key={index}
          style={{
            width: 50,
            height: 50,
            borderRadius: 25,
            backgroundColor: getCircleColor(number),
            justifyContent: 'center',
            alignItems: 'center',
            margin: 5,
          }}
        >
          <Text>{number}</Text>
        </View>
      ))}
      <Button title={buttonText} onPress={handleGenerateNumbers} />
    </View>
  );
};

export default LottoGenerator;