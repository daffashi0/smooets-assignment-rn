import React, {useState} from 'react';
import {TextInput} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {styles} from '../styles';

const RegisterScreen = () => {
  const [name, onChangeName] = useState<string>('');
  return (
    <SafeAreaView
      style={[
        styles.container,
        {
          flexDirection: 'column',
        },
      ]}>
      <TextInput
        onChangeText={onChangeName}
        value={name}
        placeholder="Input Name"
        keyboardType="default"
      />
    </SafeAreaView>
  );
};

export default RegisterScreen;
