/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect, useState} from 'react';
import {FlatList, ToastAndroid} from 'react-native';
import {Divider, IconButton, Menu} from 'react-native-paper';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useDispatch} from 'react-redux';
import BannerCard from '../components/BannerCard';
import {NavigationProp} from '../navigations/Navigation';
import {logout} from '../store/user';
import {styles} from '../styles';
import axios from '../services/axios-client';

type BannerProps = {
  id: number;
  title: string;
  description: string;
  image: string;
  is_active: boolean;
  created_at: string;
  updated_at: string;
  image_url: string;
};

const HomeScreen = ({navigation}: NavigationProp) => {
  const [open, setOpen] = useState<boolean>(false);
  const dispatch = useDispatch();
  const [listBanner, setListBanner] = useState<BannerProps[]>([]);

  const doLogout = () => {
    dispatch(logout());
  };

  const toProfile = () => {
    navigation.navigate('Profile');
    setOpen(false);
  };

  const getListBanner = async () => {
    try {
      const {data} = await axios.get('/banner');
      setListBanner(data);
    } catch (error) {
      ToastAndroid.show('Error Fetch Banner', ToastAndroid.SHORT);
      console.log(error);
    }
  };

  useEffect(() => {
    getListBanner();
  }, []);

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <Menu
          visible={open}
          onDismiss={() => setOpen(false)}
          anchor={
            <IconButton icon="account-circle" onPress={() => setOpen(true)} />
          }>
          <Menu.Item onPress={toProfile} title="Profile" />
          <Divider />
          <Menu.Item onPress={doLogout} title="Logout" />
        </Menu>
      ),
    });
  }, [navigation, open]);

  return (
    <SafeAreaView
      style={[
        styles.container,
        {
          flexDirection: 'column',
          paddingVertical: 30,
        },
      ]}>
      <FlatList
        data={listBanner}
        renderItem={({item}) => (
          <BannerCard
            image_url={item.image_url}
            title={item.title}
            description={item.description}
          />
        )}
        keyExtractor={item => item.id.toString()}
      />
    </SafeAreaView>
  );
};

export default HomeScreen;
