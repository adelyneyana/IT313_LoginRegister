import React from 'react';
import { Button, Text, TextInput, HelperText, } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";
import loginstyle from "../style/loginstyle";
import { StyleSheet, Image, } from 'react-native';
import { View, ToastAndroid, ToastIOS, } from 'react-native';
import fetchServices from '../services/fetchServices';
import * as Yup from 'yup';
import { Formik } from 'formik';

export default function LoginPage({ navigation }) {
  const [showPass, setShowPass] = React.useState(false); 

  function showToast(message) {
    if (Platform.OS === 'android') {
      ToastAndroid.show(message, ToastAndroid.SHORT);
    } else if (Platform.OS === 'ios') {
      ToastIOS.show(message, ToastIOS.SHORT);
    }
  }

  const handleLogin = async (values) => {
    try { 
      const url = "http://192.168.100.53/api/v1/login";
      const result = await fetchServices.postData(url, values);

      if (result.message != null) {
        showToast(result?.message);
      } else {
        navigation.navigate("HOME PAGE");
      }
    } catch (error) {
        console.error('Login failed', error);
    }
  };

  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .email("Invalid Email")
      .required("Please enter your email"),
    password: Yup.string().required("Please enter your password"),
  });

  return (
    <Formik
      initialValues={{ email: "", password: "" }}
      onSubmit={async (values) => {
        await handleLogin(values);
      }}
      validationSchema={validationSchema}
    >
      {({
        values,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting,
        errors,
        touched,
        setTouched,
      }) => {

  return (

    <SafeAreaView>

      <View style={styles.headerContainer}>
       <Image
          source={require('../images/lg.png')}
          style={loginstyle.lg}
        />
    </View>

      <TextInput
        mode="outlined"
        label="Email"
        left={<TextInput.Icon icon="email" />}
        style={{ marginTop: 50, marginLeft: 20, marginRight: 20 }}
        defaultValue={values.email}
        value={values.email}
        keyboardType="email-address"
        onChangeText={handleChange("email")}
        onBlur={handleBlur("email")}
        error={errors.email && touched.email}
        onFocus={() => setTouched({ email: true }, false)}
      />
       {errors.email && touched.email && (
          <HelperText type="error" visible={errors.email}>
              {errors.email}
          </HelperText>
        )}
      <TextInput
        mode="outlined"
        label="Password"
        secureTextEntry={!showPass}
        left={<TextInput.Icon icon="lock" />}
        right={
          <TextInput.Icon
            icon={!showPass ? "eye" : "eye-off"}
            onPress={() => setShowPass(!showPass)}
          />
        }
        style={{ marginTop: 10, marginLeft: 20, marginRight: 20  }}
        value={values.password}
        onChangeText={handleChange("password")}
        onBlur={handleBlur("password")}
        error={errors.password && touched.password}
        onFocus={() => setTouched({ password: true }, false)}
      />
      {errors.password && touched.password && (
          <HelperText type="error" visible={errors.password}>
            {errors.password}
          </HelperText>
      )}

    <View style={styles.forgotContainer}>
          <Text>Forgot your password?</Text>
          <Button
            onPress={() => navigation.navigate('RECOVERY PAGE')}>
            Recover
          </Button>
        </View>

        <Button
          loading={isSubmitting}
          disabled={isSubmitting}
          icon="login"
          mode="contained"
          style={{ marginTop: 30, padding: 8, marginHorizontal: 90 }}
          onPress = {handleSubmit}>
          LOGIN
        </Button>

        <View style={styles.registerContainer}>
          <Text>Don't have an account?</Text>
          <Button
            disabled = {isSubmitting}
            onPress={() => navigation.navigate('REGISTER PAGE')}
            style={{ padding: 2 }}>
            Register
          </Button>
        </View>

        <Button 
          icon="arrow-left-bold-circle"
          onPress={() => navigation.navigate('LANDING PAGE')}
          style={{ padding: 20 }}>
          Back to Landing Page
        </Button>

        </SafeAreaView>
      );
    }}
  </Formik>
 );
}

const styles = StyleSheet.create(loginstyle);