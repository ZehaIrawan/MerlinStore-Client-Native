import React from 'react';
import {Text, View} from 'react-native';
import {TextLink} from '../common';

const Home = ({navigation}) => {
  return (
    <View>
      <Text>Home</Text>
      <TextLink onPress={() => navigation.navigate('register')}>
        Register
      </TextLink>
      <TextLink onPress={() => navigation.navigate('login')}>Login</TextLink>
    </View>
  );
};

export default Home;
