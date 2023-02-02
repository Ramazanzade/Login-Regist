import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react'
import { Button, StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import axios from 'axios'
import AsyncStorage from '@react-native-async-storage/async-storage'
import HomeScreen from './HomeScreen'
import Login from './Login'


const Stack = createNativeStackNavigator();

export default function App() {

  const {loading , setloading}= useState(true)
  const {login , setlogin}=useState(false)

  AsyncStorage.getItem('token')
  .then(res=>{
    if (res)
    axios.post('https://seal-app-mobi6.ondigitalocean.app/token/tokencontrol', {
      token: res
    })
    .then(res=>{
      setloading(false)
      setlogin(true)
    })
    .catch(err=>{
      setloading(false)
      setlogin(false)
    })

    // else {      
    //   setloading(false)
    // }
  })


  return <>



{
        loading == true ? <Text>loading..</Text> : <>
          <NavigationContainer>

            <Stack.Navigator initialRouteName="Login">
              {
                login == true ?
                  <>
                  <Stack.Screen name="HomeScreen" component={HomeScreen} />
                    <Stack.Screen name="Login" component={Login} />
                  </>

                  : <>
                  <Stack.Screen name="Login" component={Login} />
                    <Stack.Screen name="HomeScreen" component={HomeScreen} />
                  </>
              }

            </Stack.Navigator>

          </NavigationContainer>
        </>
      }

  </>

    
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
