import React, {useState} from 'react';
import {ToastAndroid, View} from 'react-native';
import {Button, Text, TextInput} from 'react-native-paper';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useDispatch, useSelector} from 'react-redux';
import {NavigationProp} from '../navigations/Navigation';
import axios from '../services/axios-client';
import {RootState} from '../store';
import {styles} from '../styles';
import {updateUser} from '../store/user';

const EditProfileScreen = ({navigation}: NavigationProp) => {
  const {token, user} = useSelector((state: RootState) => state.user);

  const [name, onChangeName] = useState<string>(user.name);
  const [phone, onChangePhone] = useState<string>(user.phone);
  const [loading, setLoading] = useState<boolean>(false);
  const formData = new FormData();

  const dispatch = useDispatch();

  const appendForm = () => {
    formData.append('name', name);
    formData.append('phone', phone);
  };

  const getProfile = async () => {
    try {
      const {data} = await axios.get('/user-profile', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      dispatch(updateUser(data));
      navigation.goBack();
    } catch (error) {
      setLoading(false);
      ToastAndroid.show(error as string, ToastAndroid.SHORT);
    }
  };

  const handleEdit = async () => {
    appendForm();
    try {
      setLoading(true);
      const {data} = await axios.post('/user-profile/update', formData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log(data);
      getProfile();
      setLoading(false);
      ToastAndroid.show('Edit Profile Success', ToastAndroid.SHORT);
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
          Name
        </Text>
        <TextInput
          onChangeText={onChangeName}
          value={name}
          keyboardType="default"
          mode="outlined"
        />
      </View>
      <View style={{marginBottom: 20}}>
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
      <Button
        onPress={handleEdit}
        buttonColor="#000000"
        textColor="#ffffff"
        loading={loading}>
        Edit Profile
      </Button>
    </SafeAreaView>
  );
};

export default EditProfileScreen;
