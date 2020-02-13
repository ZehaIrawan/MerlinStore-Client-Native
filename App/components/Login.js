import React, {Fragment, useState} from 'react';
import {Text, View} from 'react-native';
import {connect} from 'react-redux';
import {Button, Input, Loading, TextLink} from '../common';
import {login} from '../thunk/user';

const Login = ({authSwitch, login, isAuthenticated, navigation}) => {
  const [email, setEmail] = useState('jangkaringbumi@gmail.com');
  const [password, setPassword] = useState('123456');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const {form, section, errorTextStyle} = styles;

  const handleSubmit = async () => {
    try {
      const user = await login({email, password});
    } catch (err) {
      console.log('Invalid credential');
    }
  };
  if (isAuthenticated) {
    return navigation.navigate('dashboard');
  }

  return (
    <Fragment>
      <View style={form}>
        <View style={section}>
          <Input
            placeholder="user@email.com"
            label="Email"
            value={email}
            onChangeText={email => setEmail(email)}
          />
        </View>

        <View style={section}>
          <Input
            secureTextEntry
            placeholder="password"
            label="Password"
            value={password}
            onChangeText={password => setPassword(password)}
          />
        </View>

        <Text style={errorTextStyle}>{error}</Text>

        {!loading ? (
          <Button onPress={handleSubmit}>Login</Button>
        ) : (
          <Loading size={'large'} />
        )}
      </View>
      <TextLink onPress={() => navigation.navigate('register')}>
        Don't have an account? Register!
      </TextLink>
    </Fragment>
  );
};

const styles = {
  form: {
    width: '100%',
    borderTopWidth: 1,
    borderColor: '#ddd',
  },
  section: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    backgroundColor: '#fff',
    borderColor: '#ddd',
  },
  errorTextStyle: {
    alignSelf: 'center',
    fontSize: 18,
    color: 'red',
  },
};

const mapStateToProps = state => ({
  isAuthenticated: state.currentUser.authenticated,
});

export default connect(mapStateToProps, {login})(Login);
