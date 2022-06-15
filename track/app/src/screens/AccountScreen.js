import React, { useContext } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Context as AuthContext } from '../context/AuthContext';
import { Button } from '@rneui/themed';
import { SafeAreaView } from 'react-native-safe-area-context';

const AccountScreen = ({ navigation }) => {
  const { signout } = useContext(AuthContext);

  return (
    <SafeAreaView edges={['top']}>
      <Text>Account screen</Text>
      <Button 
        title={'Sign Out'} 
        onPress={() => signout(() => navigation.navigate('ResolveAuth'))} 
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({

});

export default AccountScreen;
