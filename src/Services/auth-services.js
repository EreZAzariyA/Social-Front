import axios from "axios";
import config from "../Utils/config";
import store from "../Redux/store";
import { loginAction, logoutAction, registerAction } from "../Redux/auth-state";
import socketServices from "./socket-services";


class AuthServices {

  async register(user){
    const response = await axios.post(config.urls.auth.register, user);
    const token = response.data;
    store.dispatch(registerAction(token));
    store.dispatch(loginAction(token));
    socketServices.socketIo.emit('register')
  };
  
  async login(credentials){
    const response = await axios.post(config.urls.auth.login, credentials)
    const token = response.data;
    store.dispatch(loginAction(token));
    socketServices.socketIo.emit('login', token);
  }
  
  logout(){
    store.dispatch(logoutAction());
    socketServices.socketIo.emit('logout');
  }


};

const authServices = new AuthServices();
export default authServices;
