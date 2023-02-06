import {createSlice} from '@reduxjs/toolkit'



export const todoSlice = createSlice ({
    name:"todox",
    initialState: [],
    reducers:{
        addtodo : (state=[] , action)=>{
            const newtodo ={
                id:action.payload.todo ,
                name : action.payload.todo,
            }
            state.push(newtodo);
        },

        deletetodo :(state,action)=>{
return  state.filter((item)=> item.id !== action.payload.id)
       
}
    }
});

export const  { addtodo, deletetodo} = todoSlice.actions;
export default todoSlice.reducer