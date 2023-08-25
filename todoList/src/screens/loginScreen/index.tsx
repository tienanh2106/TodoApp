import React from 'react';
import {Text, View} from 'react-native';
import {styles} from './styles';
import Logo from 'assets/icons/ic_meme_todo.svg';

function LoginScreen() {
  return (
    <View style={styles.screen}>
      <View style={{flex: 1}}>
        <Logo width={120} height={40} />
        <Text>123</Text>
      </View>
    </View>
  );
}

export default LoginScreen;
