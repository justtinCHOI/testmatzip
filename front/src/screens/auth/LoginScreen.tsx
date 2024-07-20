import React from 'react';
import {SafeAreaView, StyleSheet, View, Text} from 'react-native';

interface LoginScreenProps {}

function LoginScreen({}: LoginScreenProps) {
  return (
    <SafeAreaView>
      <View>
        <Text>로그인 스크린</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});

export default LoginScreen;
