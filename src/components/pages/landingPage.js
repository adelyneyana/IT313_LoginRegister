import React from 'react';
import { Button, Text } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";
import { View } from 'react-native';
import landingstyle from "../style/landingstyle";
import { StyleSheet, Image } from 'react-native';

const LandingPage = ({ navigation }) => {
      return (
    <SafeAreaView>

      <View style={styles.headerContainer}>
       <Image
          source={require('../images/logo.png')}
          style={landingstyle.logo}
        />
    </View>

      <Button 
      onPress={() => navigation.navigate('LOGIN PAGE')}
      icon="login" 
      mode="contained" 
      style={{ marginTop: 35, padding: 5, marginRight: 60, marginLeft: 60 }}> 
        LOGIN
      </Button>
      <Button
        onPress={() => navigation.navigate("REGISTER PAGE")}
        icon="account-plus"
        mode="contained"
        style={{ marginTop: 20, padding: 5, marginRight: 60, marginLeft: 60 }}
      >
        REGISTER
      </Button>
      </SafeAreaView>
  );
};

export default LandingPage;
const styles = StyleSheet.create(landingstyle);