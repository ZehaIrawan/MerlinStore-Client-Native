import React, {useEffect} from 'react';
import {Text, View} from 'react-native';
import {connect} from 'react-redux';

const InitialLoadingScreen = ({isAuthenticated, navigation}) => {
  useEffect(() => {
    bootstrapAsync();
  });

  const bootstrapAsync = async () => {
    // Load the home screen for the logged in users
    if (isAuthenticated) {
      console.warn('SUCCESS');
      return navigation.navigate('dashboard');
    }

    // load the Auth screen if the user is NOT logged in
    navigation.navigate('home');
    console.log('FAIL');
  };

  // Render any loading content that you like here

  return (
    <View>
      <Text>Loading...</Text>
    </View>
  );
};

const mapStateToProps = state => ({
  isAuthenticated: state.currentUser.authenticated,
});

export default connect(mapStateToProps)(InitialLoadingScreen);
