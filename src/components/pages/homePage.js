import React from 'react';
import { Text, Button, Image } from 'react-native';
import { SafeAreaView } from "react-native-safe-area-context";
import homestyle from "../style/homestyle";
import { StyleSheet, View } from 'react-native';

const HomePage = ({ navigation }) => {
  return (
    <SafeAreaView>
      <View style={styles.headerContainer}>

      <View>
       <Image
          source={require('../images/l.png')}
          style={homestyle.l}
        /> 
    </View>

      <View style={homestyle.header}>
        <Button
          title="LOGOUT"
          onPress={() => navigation.navigate('LOGIN PAGE')}
        />
      </View>
 
      </View>

      <View style={styles.centeredContent}>
      <Image
      source={require('../images/welcome-image.png')}
      style={styles.welcomeImage}
    />
      </View>
      
      <Text style={styles.greetingText}>Hello, User!</Text>
      <Text style={styles.greetingText}> Welcome to Styling and Navigation in React Native!</Text>

    <Text style={styles.additionalText}>
      This is my Activity 2 in IT313 - Mobile Programming. I am Adelyn Eyana from Bachelor in Science in Information Technology, section IT3R8.
    </Text>

  </SafeAreaView>
  );
};

export default HomePage;
const styles = StyleSheet.create(homestyle);