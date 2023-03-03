/* eslint-disable default-case */
import jwtDecode from "jwt-decode";
import socketServices from "../Services/socket-services";
import { AuthActionType } from "../Utils/helpers";

export class AuthState {
  token = null;
  user = null;

  constructor() {
    this.token = localStorage.getItem("token");
    if (this.token) {
      const decodedData = jwtDecode(this.token);
      this.user = decodedData;
    };
  };
};


export const registerAction = (token)=>{
  return {type: AuthActionType.REGISTER, payload: token};
};
export const loginAction = (token)=>{
  return { type: AuthActionType.LOGIN, payload: token};
};
export const logoutAction = ()=>{
  return { type: AuthActionType.LOGOUT }
};

export const authReducer = (currentAuthReducer = new AuthState(),action)=>{
  const newAuthState = {...currentAuthReducer};

  switch(action.type){
    case AuthActionType.REGISTER:
      break;
    case AuthActionType.LOGIN:
      newAuthState.token = action.payload;
      const decodedData = jwtDecode(newAuthState.token);
      newAuthState.user = decodedData;
      localStorage.setItem("token", newAuthState.token);
      break;
      case AuthActionType.LOGOUT:
        newAuthState.token = null;
        newAuthState.user = null;
        localStorage.removeItem('token');
      break;
  }
  return newAuthState;
}