import React from 'react';
import {Button, StyleSheet, View} from 'react-native';

function AuthHomeScreen({navigation}) {
  return (
    <View>
      <Button
        title="로그인화면으로 이동"
        onPress={() => navigation.navigate('Login')}
      />
    </View>
  );
}

const styles = StyleSheet.create({});

export default AuthHomeScreen;
