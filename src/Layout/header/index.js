import React, { lazy } from "react";
import { Avatar, Button, Dropdown } from "antd";
import { VscAccount } from "react-icons/vsc";
import { useNavigate } from "react-router-dom";
import "./style.css";
import { useResize } from "../../Utils/helpers";
import authServices from "../../Services/auth-services";
import TabsMenu from "./tabs";
import { useSelector } from "react-redux";

const Notifications = lazy(()=>import('./notifications/index'));
const Bookmarks = lazy(()=>import('./bookmarks/index'));
const Messages = lazy(()=>import('./messages/index'));
const SearchInput = lazy(()=>import('./search-input/index'));

const Header = ()=>{
  const user = useSelector(state=>state.auth.user);
  const { isResponsive, isMobile } = useResize();
  const navigate = useNavigate();

  const logout = ()=>{
    authServices.logout();
    navigate('/');
  };

  const items = [
    {
      key: 'logout',
      label: <Button onClick={logout} type="link" danger>Logout</Button>
    }
  ];

  return(
    <div className="header_main_container">
      <div className="header_inner_container">

        <div className="left_side_container">
          <div className="left_side">

            <div className="logo">
              {/* <Logo/> */}
            </div>

            {isResponsive &&
              <div className="profile_menu_dropdown">
                  <Bookmarks/>
              </div> 
            }

            <SearchInput user={user} />
            {/* {isMobile &&
              <SearchInput/>
            } */}
          </div>
        </div>


        <div className="center">
          {/* <div className="search_box">
            <SearchInput/>
          </div> */}
          {!isMobile &&
            <TabsMenu/>
          }
        </div>


        <div className="right_side_container">
          <div className="right_side">
            {isMobile &&
              <div className="messages">
                <Messages />
              </div>
            }

            <div className="notifications">
              <Notifications/>
            </div>

            <div className="auth">
              <Dropdown menu={{items}} placement="bottomLeft" arrow trigger={['click','hover']}>
                <Avatar className="avatar_style" icon={<VscAccount color="darkblue" size={'30px'}/>}/>
              </Dropdown>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
};

export default Header;
