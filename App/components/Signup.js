import React from 'react';
import {Text, View} from 'react-native';
import {TextLink} from '../common';

const Signup = ({navigation}) => {
  return (
    <View>
      <Text>Signup Form</Text>
      <TextLink onPress={() => navigation.navigate('login')}>
        Already have an account? Login!
      </TextLink>
    </View>
  );
};

export default Signup;
