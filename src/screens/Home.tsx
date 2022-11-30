import React from 'react';
import {View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {styles} from '../styles';

const HomeScreen = () => {
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
