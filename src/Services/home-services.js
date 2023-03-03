import axios from "axios";
import config from "../Utils/config";

class HomeServices {

  // Search user (Search input-header)
  async searchUser(userDetails){
    const response = await axios.post(config.urls.home.searchUser, {searchValue: userDetails});
    const usersBaseOnSearch = response.data;
    return usersBaseOnSearch;
  }



};

const homeServices = new HomeServices();
export default homeServices;