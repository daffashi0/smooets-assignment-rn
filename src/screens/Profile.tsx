import axios from 'axios';
import React, {useState} from 'react';
import {ToastAndroid, View} from 'react-native';
import {Button, Text} from 'react-native-paper';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useSelector} from 'react-redux';
import {NavigationProp} from '../navigations/Navigation';
import {RootState} from '../store';
import {styles} from '../styles';
import moment from 'moment';

const ProfileScreen = ({navigation}: NavigationProp) => {
  const {user, token} = useSelector((state: RootState) => state.user);

  const [loading, setLoading] = useState(false);

  const verifyEmail = async () => {
    try {
      setLoading(true);
      await axios.post('/email/request-verification', null, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setLoading(false);
      ToastAndroid.show(
        'Email has been sent. Check your email',
        ToastAndroid.SHORT,
      );
    } catch (error) {
      ToastAndroid.show('Error Verify Email', ToastAndroid.SHORT);
      console.log(error);
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
        <Text variant="titleMedium" style={styles.title}>
          Name
        </Text>
        <Text variant="titleLarge" style={styles.title}>
          {user.name}
        </Text>
      </View>
      <View style={{marginBottom: 10}}>
        <Text variant="titleMedium" style={styles.title}>
          Email
        </Text>
        <Text variant="titleLarge" style={styles.title}>
          {user.email}
        </Text>
      </View>
      <View style={{marginBottom: 10}}>
        <Text variant="titleMedium" style={styles.title}>
          Phone
        </Text>
        <Text variant="titleLarge" style={styles.title}>
          {user.phone}
        </Text>
      </View>
      <View style={{marginBottom: 10}}>
        <Text variant="titleMedium" style={styles.title}>
          Email Verified At
        </Text>
        <Text variant="titleLarge" style={styles.title}>
          {user.email_verified_at
            ? moment(user.email_verified_at).format('YYYY-MM-DD hh:mm:ss')
            : 'Unverified'}
        </Text>
      </View>
      <Button
        onPress={() => navigation.navigate('EditProfile')}
        buttonColor="#000000"
        textColor="#ffffff"
        disabled={user.email_verified_at ? false : true}>
        Edit Profile
      </Button>
      {!user.email_verified_at && (
        <Button
          onPress={verifyEmail}
          style={{marginTop: 20}}
          buttonColor="#000000"
          textColor="#ffffff"
          loading={loading}>
          Verify Email
        </Button>
      )}
    </SafeAreaView>
  );
};

export default ProfileScreen;
