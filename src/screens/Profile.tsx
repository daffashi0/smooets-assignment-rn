import React from 'react';
import {View} from 'react-native';
import {Text} from 'react-native-paper';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useSelector} from 'react-redux';
import {RootState} from '../store';
import {styles} from '../styles';

const ProfileScreen = () => {
  const {user} = useSelector((state: RootState) => state.user);
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
          {user.email_verified_at ?? 'Unverified'}
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default ProfileScreen;
