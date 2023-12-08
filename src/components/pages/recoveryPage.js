import React, { useState } from 'react';
import { Button, Text, TextInput } from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';
import recoverstyle from '../style/recoverstyle';
import { StyleSheet, Image, View, Alert } from 'react-native';

const RecoveryPage = ({ navigation }) => {
  const [email, setEmail] = useState('');

  const handleResetPassword = async () => {
    if (!email) {
      Alert.alert('Error', 'Please enter your registered email address');
      return;
    }

    try {
      const response = await fetch('http://backend-server:3000/reset-password', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });
  
      if (response.ok) {
        Alert.alert('Success', 'Password reset email sent successfully');
      } else {
        const responseData = await response.json();
        console.error('Error resetting password:', responseData.message);
        Alert.alert('Error', 'Failed to reset password. Please try again.');
      }
    } catch (error) {
      console.error('Unexpected error resetting password:', error.message);
      Alert.alert('Error', 'An unexpected error occurred. Please try again.');
    }
  };

  return (
    <SafeAreaView>

      <View style={styles.headerContainer}>
        <Image
          source={require('../images/lg.png')}
          style={recoverstyle.lg}
        />
        <Text variant="displaySmall">Recover Account</Text>
      </View>

      <View styles={{ flex: 1 }}>
        <TextInput
          mode="outlined"
          label="Registered Email Address"
          value={email}
          onChangeText={(text) => setEmail(text)}
          style={{ marginTop: 30, marginLeft: 20, marginRight: 20 }}
          error={!email} 
        />
      </View>

      <Button
        onPress={handleResetPassword}
        mode="contained"
        style={{ marginTop: 30, padding: 8, marginHorizontal: 50 }}>
        RESET PASSWORD 
      </Button>

      <Button 
        icon="arrow-left-bold-circle"
        onPress={() => navigation.navigate('LOGIN PAGE')}
        style={{ padding: 20, }}>
        Back to Login
      </Button>
    </SafeAreaView>
  );
};

export default RecoveryPage;
const styles = StyleSheet.create(recoverstyle);
