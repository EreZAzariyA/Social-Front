import { io } from "socket.io-client";
import config from "../Utils/config";

const options ={
  reconnectionAttempts:3,
  extraHeaders: {
    auth: localStorage.getItem('token')
  }
}

class SocketServices {
  socketIo;

  constructor(){
    this.socketIo = io(config.urls.socket, options);
  };

  connect(){
    this.socketIo.connect();
  };

  disconnect(){
    this.socketIo.disconnect();
  }

}
const socketServices = new SocketServices();
export default socketServices;