import React from 'react';
import { View, Text, TextInput, TouchableOpacity} from 'react-native';

const LoginScreen = () => {


  return (
    <View>
      <Text>Username</Text>
      <TextInput
        placeholder="Username"
        keyboardType="default"
      />
       <Text>Password</Text>
      <TextInput
        placeholder="Password"
        secureTextEntry
      />
      <TouchableOpacity>
        <Text>Connexion</Text>
      </TouchableOpacity>
    </View>
  );
};

export default LoginScreen;
