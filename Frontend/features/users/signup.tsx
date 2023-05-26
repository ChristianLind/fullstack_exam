import React, { useEffect, useState } from 'react'
import { AppDispatch, RootState } from '../../store'
import { useSelector, useDispatch } from 'react-redux'
import { View, Text, TextInput, StyleSheet, Button } from 'react-native'
import { signup } from './usersSlice'
import { UsersSignup } from './usersSignup'

export function Signup({navigation}: {navigation: any}) {
  const error: string | undefined = useSelector((state: RootState) => state.users.error)
  const dispatch = useDispatch<AppDispatch>()

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');

  const handleSignup = (event: any) => {
    event.preventDefault();

    dispatch(signup(new UsersSignup(username, password, email)));
    navigation.navigate('problems');
    //navigation.navigate('todos');
  }

  return (
    <View>
      <Text>Please insert your username</Text>
      <TextInput
        style={styles.input}
        onChangeText={setUsername}
        value={username}
        placeholder='Insert your username'
      />
      <Text>Please insert your password</Text>
      <TextInput
        style={styles.input}
        onChangeText={setPassword}
        value={password}
        placeholder='Insert your password'
      />
      <Text>Please insert your email</Text>
      <TextInput
        style={styles.input}
        onChangeText={setEmail}
        value={email}
        placeholder='Insert your email'
      />
      <Button title="Signup" onPress={handleSignup}/>

      <Text>{error}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    width: 200
  },
});