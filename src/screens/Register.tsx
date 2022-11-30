import React, {useState} from 'react';
import {ToastAndroid, View} from 'react-native';
import {Button, Text, TextInput} from 'react-native-paper';
import {SafeAreaView} from 'react-native-safe-area-context';
import {NavigationProp} from '../navigations/Navigation';
import axios from '../services/axios-client';
import {styles} from '../styles';

const RegisterScreen = ({navigation}: NavigationProp) => {
  const [name, onChangeName] = useState<string>('');
  const [email, onChangeEmail] = useState<string>('');
  const [phone, onChangePhone] = useState<string>('');
  const [password, onChangePassword] = useState<string>('');
  const [confirmPassword, onChangeConfirmPassword] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const formData = new FormData();

  const appendForm = () => {
    formData.append('name', name);
    formData.append('email', email);
    formData.append('phone', phone);
    formData.append('password', password);
    formData.append('password_confirmation', confirmPassword);
  };
  const handleRegister = async () => {
    appendForm();
    try {
      setLoading(true);
      await axios.post('/register', formData);
      setLoading(false);
      ToastAndroid.show('Register Success', ToastAndroid.SHORT);
      navigation.navigate('Login');
    } catch (error) {
      setLoading(false);
      ToastAndroid.show(error as string, ToastAndroid.SHORT);
    }
  };
  return (
    <SafeAreaView
      style={[
        styles.container,
        {
          flexDirection: 'column',
        },
      ]}>
      <View style={{marginBottom: 10}}>
        <Text variant="titleMedium" style={styles.label}>
          Name
        </Text>
        <TextInput
          onChangeText={onChangeName}
          value={name}
          keyboardType="default"
          mode="outlined"
        />
      </View>
      <View style={{marginBottom: 10}}>
        <Text variant="titleMedium" style={styles.label}>
          Email
        </Text>
        <TextInput
          onChangeText={onChangeEmail}
          value={email}
          keyboardType="default"
          mode="outlined"
        />
      </View>
      <View style={{marginBottom: 10}}>
        <Text variant="titleMedium" style={styles.label}>
          Phone
        </Text>
        <TextInput
          onChangeText={onChangePhone}
          value={phone}
          keyboardType="number-pad"
          mode="outlined"
        />
      </View>
      <View style={{marginBottom: 10}}>
        <Text variant="titleMedium" style={styles.label}>
          Password
        </Text>
        <TextInput
          onChangeText={onChangePassword}
          value={password}
          keyboardType="default"
          mode="outlined"
          secureTextEntry={true}
        />
      </View>
      <View style={{marginBottom: 20}}>
        <Text variant="titleMedium" style={styles.label}>
          Confirm Password
        </Text>
        <TextInput
          onChangeText={onChangeConfirmPassword}
          value={confirmPassword}
          keyboardType="default"
          mode="outlined"
          secureTextEntry={true}
        />
      </View>
      <Button
        onPress={handleRegister}
        buttonColor="#000000"
        textColor="#ffffff"
        loading={loading}>
        Register
      </Button>
      <View style={{alignItems: 'center', marginTop: 20}}>
        <Text variant="titleMedium" style={styles.label}>
          Already have account?
        </Text>
        <Text
          variant="titleMedium"
          style={styles.label}
          onPress={() => navigation.navigate('Login')}>
          Login Here
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default RegisterScreen;
