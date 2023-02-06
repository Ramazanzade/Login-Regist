import { configureStore } from "@reduxjs/toolkit";
 import todoSlice from "./todoSlice";
const store = configureStore({
    reducer: {
        todox: todoSlice,
      },  })



  export default store