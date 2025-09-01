import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from '@reduxjs/toolkit/query'

import counterStateReducer from "./slices/counterSlice";
import { apiSlice } from "./api/apiSlice";
import  UserInfoSliceReducer  from "./slices/userInfoSlice";


export const store = configureStore({
  reducer: {
    counter: counterStateReducer,
    UserInformation : UserInfoSliceReducer ,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (getdefultMiddleWare) => 
    getdefultMiddleWare().concat(apiSlice.middleware),
});



setupListeners(store.dispatch)





