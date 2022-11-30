import React, {useState} from 'react';
import {ToastAndroid, View} from 'react-native';
import {Button, Text, TextInput} from 'react-native-paper';
import {SafeAreaView} from 'react-native-safe-area-context';
import {NavigationProp} from '../navigations/Navigation';
import axios from '../services/axios-client';
import {styles} from '../styles';

const ResetPasswordScreen = ({navigation}: NavigationProp) => {
  const [email, onChangeEmail] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const formData = new FormData();

  const appendForm = () => {
    formData.append('email', email);
  };

  const handleResetPassword = async () => {
    appendForm();
    try {
      setLoading(true);
      const {data} = await axios.post('/password/reset-request', formData);
      setLoading(false);
      ToastAndroid.show(data.status, ToastAndroid.SHORT);
      navigation.goBack();
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
      <View style={{marginBottom: 30}}>
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
      <Button
        onPress={handleResetPassword}
        buttonColor="#000000"
        textColor="#ffffff"
        loading={loading}>
        Reset Password
      </Button>
    </SafeAreaView>
  );
};

export default ResetPasswordScreen;
