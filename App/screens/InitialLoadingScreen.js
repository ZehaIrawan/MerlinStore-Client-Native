import React from 'react';
import {Text, View} from 'react-native';
import {connect} from 'react-redux';

class InitialLoadingScreen extends React.Component {
  constructor(props) {
    super(props);
    this.bootstrapAsync();
  }

  bootstrapAsync = async () => {
    // Load the home screen for the logged in users
    console.log(this.props.isAuthenticated);
    if (this.props.isAuthenticated) {
      return this.props.navigation.navigate('home');
    }

    // load the Auth screen if the user is NOT logged in
    this.props.navigation.navigate('login');
  };

  // Render any loading content that you like here
  render() {
    return (
      <View>
        <Text>Loading..</Text>
      </View>
    );
  }
}

const mapStateToProps = state => ({
  isAuthenticated: state.currentUser.isAuthenticated,
});

export default connect(mapStateToProps)(InitialLoadingScreen);
