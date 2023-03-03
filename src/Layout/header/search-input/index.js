import { useState } from "react";
import { AutoComplete } from "antd";
import { useNavigate } from "react-router-dom";
import { getFullName, useResize } from "../../../Utils/helpers";
import homeServices from "../../../Services/home-services";

const SearchInput = (props)=>{
  const { user } = props;
  const [options, setOptions] = useState([]);
  const navigate = useNavigate();
  const { isMobile } = useResize();


  const onSearch = async (value)=>{
    const usersBaseOnSearch = await homeServices.searchUser(value);
    if(value) {
      // Remove the current user from the list:
      const newList = await usersBaseOnSearch.filter(u=>u._id !== user._id);

      setOptions(newList.map((user) => {
        return {value: getFullName(user) , ...user}
      }));
    }
  }
  
  
  
  
  const onSelect = (_,option) => {
    navigate(`/profile/${option._id}`);
  };

  return(
    <div className="search_input_main_container">
      <div className="search_input_main_container">
        <AutoComplete
          allowClear
          options={options}
          style={isMobile ? {width: '120px'}:{
            width: '200px'
          }}
          onSelect={onSelect}
          onSearch={onSearch}  placeholder="Search"/>
      </div>
    </div>
  );
};

export default SearchInput;