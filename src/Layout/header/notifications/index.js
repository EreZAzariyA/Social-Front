import { useState } from "react";
import { Badge, Button, Dropdown, Image, Tooltip, Empty, Avatar } from "antd";
import {IoIosNotificationsOutline} from "react-icons/io";
import {AiOutlineCheckCircle,AiOutlineCloseCircle,AiOutlineUser} from "react-icons/ai";
import { NavLink } from "react-router-dom";
import "./style.css";

const Notifications = ()=>{
  const [count,setCount] = useState(0);
  const [sentUsers, setSentUsers] = useState([]);


  const rejectRequest=(userToReject)=>{

  }

  const acceptRequest = (userToApprove)=>{

  }


  const items = sentUsers.length > 0 ? sentUsers.map((user)=>{
    return{
      label:
        <div className="user_label">
          <div className="name">
            <NavLink to={`/profile/${user._id}`}>
              {user.profile.first_name + ' ' + user.profile.last_name}
            </NavLink>
          </div>
          <div className="actions">
            <Tooltip title="Accept">
              <Button size="large" shape="circle" type="text" icon={<AiOutlineCheckCircle/>} onClick={()=>acceptRequest(user)}/>
            </Tooltip>
            <Tooltip title='Reject'>
              <Button size="large" danger shape="circle" type="text" icon={<AiOutlineCloseCircle/>} onClick={()=>rejectRequest(user)}/>
            </Tooltip>
          </div>
        </div>,
      key:user._id,
      icon: user.profile.image_profile ? <Image src={user.profile.image_profile}/> : <AiOutlineUser size={'20px'}/>
    }
  }):[{label:<Empty description="No Notifications" />,key:'empty'}];


  return(
    <Badge count={count > 0 ? count : 0}>
      <Dropdown menu={{items}} placement="bottomLeft" arrow trigger={['click','hover']}>
        <Avatar className="avatar_style" icon={<IoIosNotificationsOutline color="darkblue" size={'30px'} onClick={()=>setCount(0)}/>} />
      </Dropdown>
    </Badge>
  );
};

export default Notifications;