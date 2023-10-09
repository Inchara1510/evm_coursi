import { useState, useEffect } from 'react';
import React from 'react';
import { View,SafeAreaView, Text, TextInput,StyleSheet, Button } from 'react-native';
import tw from "tailwind-react-native-classnames";
// import { createStackNavigator } from "@react-navigation/native-stack";

const LoginScreen = ({ navigation }) => {
   // If null, no SMS has been sent
   const [confirm, setConfirm] = useState(null);

   // verification code (OTP - One-Time-Passcode)
   const [code, setCode] = useState('');

  const handleLogin = () => {
    // Add logic to handle login with the entered phone number
    // For example, you can send an OTP or navigate to another screen
  };

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);
  async function signInWithPhoneNumber(phoneNumber) {
    const confirmation = await auth().signInWithPhoneNumber(phoneNumber);
    setConfirm(confirmation);
  }

  async function confirmCode() {
    try {
      await confirm.confirm(code);
    } catch (error) {
      console.log('Invalid code.');
    }
  }

  if (!confirm) {
    return (
      <Button
        title="Phone Number Sign In"
        onPress={() => signInWithPhoneNumber('8553226267')}
      />
    );
  }

  return (
    <SafeAreaView>
      <View style={tw`flex h-full flex-wrap items-center justify-center p-2 pl-20 pb-8 pt-4 bg-gray-200 m-2 w-full`}>
        <Text style={tw`mt-2 text-lg font-semibold pb-2`}>Enter your mobile number:</Text>
        <TextInput
          placeholder="Mobile Number"
          keyboardType="phone-pad"
          style={tw`text-lg pb-2 items-center justify-center`}
          onChangeText={(text) => setPhoneNumber(text)}
        />
        <Button title="Login"  style={tw`px-7 pb-2.5 pt-3 text-lg font-medium uppercase`} onPress={() => confirmCode()} />
      </View>
    </SafeAreaView>
  );
};

export default LoginScreen;


