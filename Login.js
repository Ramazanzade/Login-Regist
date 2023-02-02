import { View, Text, Button , TextInput, StyleSheet} from 'react-native'
import React, { useState } from 'react'
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Login = ({navigation}) => {
const {email , setemail}=useState('')
const {passwod , setpasswod}= useState('')

const Login=()=>{
    
let user ={
    email:email,
    passwod:passwod
}

axios.get('https://seal-app-mobi6.ondigitalocean.app/api/token', user)
.then(res=>{
    AsyncStorage.setItem('token' , res.data.token)
    .then(res=>{
        navigation.navigate('HomeScreen')
    })
})
.catch(err=>{
    console.log('err', err);
})


}


  return (
    <View>
      <Text>Login</Text>
      <TextInput
        style={styles.input}
        onChangeText={setemail}
        value={email}
      />
      <TextInput
        style={styles.input}
        onChangeText={setpasswod}
        value={passwod}
      />
      <Button title='Login' onPress={ Login()}></Button>

    </View>
  )
}

export default Login


const styles = StyleSheet.create({
    input: {
      height: 40,
      margin: 12,
      borderWidth: 1,
      padding: 10,
    },
  });