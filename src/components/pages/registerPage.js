import React from 'react';
import { Button, Text, TextInput } from "react-native-paper";
import registerstyle from "../style/registerstyle";
import { StyleSheet, Image } from 'react-native';
import { View, Platform, ToastAndroid, ToastIOS, } from 'react-native';
import fetchServices from '../services/fetchServices';

export default function RegisterPage({ navigation }) {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [repassword, setRepassword] = React.useState("");
  const [showPass, setShowPass] = React.useState(false);
  const [showRePass, setShowRePass] = React.useState(false);
  const [loading, setLoading] = React.useState(false);
  const [isError, setIsError] = React.useState(false);

  const showToast = (message = "Something went wrong") => {
    if (Platform.OS === 'android') {
      ToastAndroid.show(message, 3000);
    } else if (Platform.OS === 'ios') {
      ToastIOS.show(message, 3000);
    }
  };
  
  const handleRegistration= async () => {
    try {
      setLoading(true);

      if (name === "" || email === "" || password === "" || repassword === "") {
        showToast("Please input required data");
        setIsError(true);
        return false;
      }

      if (password !== repassword) {
        showToast("Please match the password");
        setIsError(true);
        return false;
      }

      const url = "http://192.168.100.53/api/v1/register";
      const data = {
        name,
        email,
        password,
        password_confirmation: repassword,
      };
 

      const result = await fetchServices.postData(url, data);

      console.log("API Response:", result);

    if (result?.message != null) {
      showToast(result?.message);
    } else {
      navigation.navigate("LOGIN PAGE");
    }
  } catch (e) {
      console.error("Error during registration:", e); 
      showToast("Something went wrong during registration");
  } finally {
      setLoading(false);
  }
};

  return (
    <View style={{ flex: 1 }}>

      <View style={styles.headerContainer}>
        <Image
            source={require('../images/lg.png')}
            style={registerstyle.lg}
          /> 
          <Text variant="displaySmall">Create Account</Text>
      </View>

      <TextInput
        mode="outlined"
        label="Name"
        style={{ marginTop: 10, marginLeft: 20, marginRight: 20 }}
        value={name}
        onChangeText={setName}
        error={isError}
      /> 
      <TextInput
        mode="outlined"
        label="Email"
        style={{ marginTop: 10, marginLeft: 20, marginRight: 20 }}
        value={email}
        onChangeText={setEmail}
        error={isError}      
      />     
      <TextInput
        mode="outlined"
        label="Password"
        secureTextEntry={!showPass}
        right={
          <TextInput.Icon
            icon={showPass ? "eye" : "eye-off"}
            onPress={() => setShowPass(!showPass)}
          />
        }
        style={{ marginTop: 10, marginLeft: 20, marginRight: 20 }}
        value={password}
        onChangeText={setPassword}
        error={isError}
      />
      <TextInput
        mode="outlined"
        label="Confirm Password"
        secureTextEntry={!showRePass}
        right={
          <TextInput.Icon
            icon={showPass ? "eye" : "eye-off"}
            onPress={() => setShowRePass(!showRePass)}
          />
        }
        style={{ marginTop: 10, marginLeft: 20, marginRight: 20 }}
        value={repassword}
        onChangeText={setRepassword}
        error={isError}
      />
      <Button  
        icon="account-plus"
        mode="contained" 
        disabled={loading}
        loading={loading}
        style={{ marginTop: 20, padding: 8, marginHorizontal: 80  }}
        onPress = {handleRegistration}>
        Register
      </Button>

      <View style={styles.registerContainer}>
        <Text>Already have an account?</Text>
        <Button
          onPress={() => navigation.navigate('LOGIN PAGE')}>
         Login
        </Button>
      </View>
    </View>
  );
};

const styles = StyleSheet.create(registerstyle);