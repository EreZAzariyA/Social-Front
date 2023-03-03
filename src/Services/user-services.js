import axios from "axios";
import config from "../Utils/config";

class UserServices {

 
  // Get one user (Profile page)
  async getOneUser(user_id){
    const response = await axios.get(config.urls.user.getOneUserUrl + user_id);
    const user = response.data;
    return user;
  }



}

const userServices = new UserServices();
export default userServices;