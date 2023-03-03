import { authReducer } from "./auth-state";
import { configureStore } from '@reduxjs/toolkit'


export default configureStore({
  reducer: {
    auth: authReducer
  }
})