import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React,{useState} from 'react';
import {useSelector} from 'react-redux'
import { deletetodo } from '../Redux/todoSlice';
import {useDispatch} from 'react-redux'
import { CheckBox } from 'react-native-elements'
const TodoList = () => {
    const dispatch=useDispatch();
const todos =useSelector((state)=> state.todox);
const tododelet =(id)=>{
dispatch(
    deletetodo({
        id:id
    })
)
}
const [isSelected, setSelection] = useState(false);



    const renderItem=({item})=>{
        return(<View style={styles.item}>
         <Text style={styles.todo}>{item.name}</Text>
          <CheckBox
     checked={isSelected}
     onPress={() =>{
        setSelection(!isSelected)
    }}
          style={styles.checkbox}
        />
               
            </View>
        )
    }
  return (
    <View>
<FlatList
data={todos}
renderItem={renderItem}
/>

<TouchableOpacity style={styles.touc}
                onPress={(item)=>tododelet(item.id)}>
                <Text style={styles.delet}>Delet</Text>
                </TouchableOpacity>
    </View>
  )
}

export default TodoList

const styles = StyleSheet.create({
item:{
// backgroundColor:'width',
padding:20,
marginHorizontal:16,
marginVertical:8,
alignItems: 'center',
flexDirection:'row',
justifyContent:'space-between'
},
touc:{

alignItems:'center',
backgroundColor:'pink',
margin:70,
padding:20

},
todo:{
    fontSize:24,
    color:'black'
},
delet:{
fontSize:32,
color:'red'
},
checkbox: {
    marginRight:15
//   alignSelf: 'center',
},


})
