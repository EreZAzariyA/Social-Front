import { Image, Menu } from "antd";
import { Link } from "react-router-dom";
import { AiOutlineUser } from "react-icons/ai";
import { HiOutlineUsers, HiOutlineUserGroup } from "react-icons/hi";
import { BsSave } from "react-icons/bs";
import { MdOutlineEventAvailable } from "react-icons/md";
import "./style.css";
import { useSelector } from "react-redux";
import { getFullName } from "../../Utils/helpers";

const Bookmarks = ()=>{
  const user = useSelector(state=>state.auth.user);

  const items = [
    {
      key: 'profile',
      title: 'Profile',
      label: <Link to={`/profile/${user._id}`}>{getFullName(user)}</Link>,
      icon: user?.profile?.image ? <Image src={user.profile?.image} style={{width: '25px'}}/> : <AiOutlineUser size={25}/>
    },
    {
      key: 'friends',
      title: 'Friends',
      label: <Link to={'home/friends'}>Friends</Link>,
      icon: <HiOutlineUsers size={25}/>
    },
    {
      key: 'saved',
      title: 'Saved',
      label: <Link to={'home/saved'}>Saved</Link>,
      icon: <BsSave size={25}/>
    },
    {
      key: 'events',
      title: 'Events',
      label: <Link to={'home/events'}>Events</Link>,
      icon: <MdOutlineEventAvailable size={25}/>
    },
    {
      key: 'see-more',
      label: 'See-More',
      children: [
        {
          key: 'groups',
          title: 'Groups',
          label: <Link to={'groups'}>Groups</Link>,
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

  return(
    <div className="profile_menu_container">
      <Menu theme="light" className="profile_menu" items={items} mode='inline'/>
    </div>
  );
};

export default Bookmarks;