import React, {useEffect} from 'react';
import {View} from 'react-native';
import {IconButton} from 'react-native-paper';
import {SafeAreaView} from 'react-native-safe-area-context';
import {NavigationProp} from '../navigations/Navigation';
import {styles} from '../styles';

const HomeScreen = ({navigation}: NavigationProp) => {
  useEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <IconButton
          icon="account-circle"
          onPress={() => navigation.navigate('Profile')}
        />
      ),
    });
  }, [navigation]);

  return (
    <SafeAreaView
      style={[
        styles.container,
        {
          flexDirection: 'column',
          justifyContent: 'center',
        },
      ]}>
      <View style={{marginBottom: 10, backgroundColor: '#808080'}} />
    </SafeAreaView>
  );
};

export default HomeScreen;
