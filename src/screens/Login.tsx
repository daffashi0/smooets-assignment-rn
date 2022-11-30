import React, {useState} from 'react';
import {ToastAndroid, View} from 'react-native';
import {Button, TextInput, Text} from 'react-native-paper';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useDispatch} from 'react-redux';
import {NavigationProp} from '../navigations/Navigation';
import axios from '../services/axios-client';
import {setUser} from '../store/user';
import {styles} from '../styles';

const LoginScreen = ({navigation}: NavigationProp) => {
  const [email, onChangeEmail] = useState<string>('');
  const [password, onChangePassword] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const formData = new FormData();

  const dispatch = useDispatch();

  const appendForm = () => {
    formData.append('email', email);
    formData.append('password', password);
  };
  const handleLogin = async () => {
    appendForm();
    try {
      setLoading(true);
      const {data} = await axios.post('/login', formData);
      dispatch(setUser(data));
      setLoading(false);
      ToastAndroid.show('Login Success', ToastAndroid.SHORT);
      navigation.navigate('Home');
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
          justifyContent: 'center',
        },
      ]}>
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
      <View style={{marginBottom: 30}}>
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
      <Button
        onPress={handleLogin}
        buttonColor="#000000"
        textColor="#ffffff"
        loading={loading}>
        Login
      </Button>
      <View style={{alignItems: 'center', marginTop: 20}}>
        <Text variant="titleMedium" style={styles.label}>
          Don't have account?
        </Text>
        <Text
          variant="titleMedium"
          style={styles.label}
          onPress={() => navigation.navigate('Register')}>
          Register Here
        </Text>
      </View>
      <View style={{alignItems: 'center', marginTop: 20}}>
        <Text variant="titleMedium" style={[styles.label, {marginBottom: 20}]}>
          or
        </Text>
        <Text
          variant="titleMedium"
          style={styles.label}
          onPress={() => navigation.navigate('ResetPassword')}>
          Reset password
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default LoginScreen;
