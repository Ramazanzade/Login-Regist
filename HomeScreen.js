import { View, Text , Button} from 'react-native'
import React, {useEffect} from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'
import axios from 'axios'
const HomeScreen = ({navigation}) => {
useEffect(() => {
 AsyncStorage.getItem('token')
 .then(token =>{
  axios.get('https://seal-app-mobi6.ondigitalocean.app/api/home',{
    headers:{
      'Authorization': 'Bearer ' + token
    }
  })
 })

}, [])


const logout =()=>{
  AsyncStorage.removeItem('token')
  .then(res=>{
    navigation.navigate('Login')
  })
}

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>

      <Text>Home Screen</Text>
<Button title='Logout' onPress={()=>logout()}></Button>
    </View>
  )
}

export default HomeScreen