import store from '../Redux/store';
import axios from "axios";

class InterceptorsService {

  token;

  constructor(){
    this.token = store.getState().auth.token;
  }
  
  createInterceptors() {

    axios.interceptors.request.use((request)=>{
      // If we have a token:
      if(this.token) {
        // Add a header to the request sending that token:
        request.headers = {
          authorization: "Bearer " + this.token
        };
      }
      return request
    });
  }
}

const interceptorsService = new InterceptorsService();

export default interceptorsService;

