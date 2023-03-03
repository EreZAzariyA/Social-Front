import { Avatar, Dropdown, Image, Spin } from "antd";
import {BiMenuAltLeft} from "react-icons/bi";
import { Link } from "react-router-dom";
import { AiOutlineUser } from "react-icons/ai";
import { HiOutlineUsers, HiOutlineUserGroup } from "react-icons/hi";
import { BsSave } from "react-icons/bs";
import { MdOutlineEventAvailable } from "react-icons/md";
import { useSelector } from "react-redux";
import { getFullName } from "../../../Utils/helpers";
import { useEffect, useState } from "react";

const MobileBookmarks = ()=>{
  const user = useSelector(state=>state.auth.user);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(()=>{
    setIsLoading(false);
  },[]);

  const items = [
    {
      key: 'profile',
      title: 'Profile',
      label: <Link to={`/profile/${user?._id}`}>{getFullName(user)}</Link>,
      icon: user?.profile?.image ? <Image src={user.profile?.image} style={{width: '25px'}}/> : <AiOutlineUser size={25}/>
    },
    {
      key: 'friends',
      title: 'Friends',
      label: <Link to={'/home/friends'}>Friends</Link>,
      icon: <HiOutlineUsers size={25}/>
    },
    {
      key: 'saved',
      title: 'Saved',
      label: <Link to={'/home/saved'}>Saved</Link>,
      icon: <BsSave size={25}/>
    },
    {
      key: 'events',
      title: 'Events',
      label: <Link to={'/home/events'}>Events</Link>,
      icon: <MdOutlineEventAvailable size={25}/>
    },
    {
      key: 'see-more',
      label: 'See-More',
      children: [
        {
          key: 'groups',
          title: 'Groups',
          label: <Link to={'/groups'}>Groups</Link>,
          icon: <HiOutlineUserGroup size={25}/>
        }
      ]
    },
    {type: 'divider'},
    {
      key:'shortcuts',
      label:'Your-Shortcuts',
      children:[
        {
          key:'new',
          label: "New"
        }
      ],
      type:'group',
      icon: null
    }
  ];

  if(!isLoading){
    return(
      <Dropdown menu={{items}} placement="bottomRight" arrow trigger={["click","hover"]}>
        <Avatar className="avatar_style" icon={<BiMenuAltLeft color="darkblue" size={'30px'}/>}/>
      </Dropdown>
    );
  } else return <Spin/>
}

export default MobileBookmarks;