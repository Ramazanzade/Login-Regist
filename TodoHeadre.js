import { Alert, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React ,{useState} from 'react'
import {useDispatch} from 'react-redux'
import { addtodo } from '../Redux/todoSlice';
 const todos =[]
const TodoHeadre = () => {
const dispatch = useDispatch();




const [todo , setTodo]=useState("")
const onSumbittodo =()=>{
    if(todo.trim().length === 0){
alert('Plase eneter todo')
        setTodo('')
        return
    }
    dispatch(
     addtodo({
        todo:todo
     })
        )
    setTodo("")
}
   
    

  return (
    <View>
      <Text style={styles.text}>Todo</Text>


     <View style={{justifyContent:'center',alignItems:'center'}}>
     <TextInput
      style={styles.inp}
      placeholder="Add todo"
      onChangeText={setTodo}
      value={todo}
      />


      <TouchableOpacity 
      style={styles.button}
      onPress={onSumbittodo}
      >
        <Text style={{color:'gray'}}>Add</Text>
      </TouchableOpacity>
     </View>
    </View>
  )
}

export default TodoHeadre

const styles = StyleSheet.create({
text:{
    fontSize:20,
    fontWeight:'bold',
    textAlign:'center',
    margin:30,
},
inp:{
    borderColor:'gray',
    borderWidth:1,
    padding:10,
    margin:10,
    width:'80%',
    borderRadius:5
},
button:{
  borderColor:'gray',
  borderWidth:1,
  padding:10,
  margin:10,
  width:'40%',
  borderRadius:5,
  alignItems:'center'
}


})