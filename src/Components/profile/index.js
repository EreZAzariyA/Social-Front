import { Button, Dropdown, Image, Spin, Tabs, Tooltip } from "antd";
import { useCallback, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Header from "../../Layout/header";
import userServices from "../../Services/user-services";
import { useResize, getFullName, RelationshipSteps } from "../../Utils/helpers";
import { AiOutlineStar, AiOutlineUser } from "react-icons/ai";
import { FiUserPlus,FiUserX } from "react-icons/fi";
import { BiUserCheck, BiUserX } from "react-icons/bi";
import { BsMessenger } from "react-icons/bs";
import { useSelector } from "react-redux";


const Profile = ()=>{
  const [isLoading, setIsLoading ] = useState(true);
  const params = useParams();
  const stateUser = useSelector(state=>state.auth.user);
  const [user,setUser] = useState();
  const [ myProfile, setMyProfile ] = useState(false);
  const [ toConfirm,setToConfirm ] = useState(false);
  const [ hasRelationship,setHasRelationship ] = useState(false);
  const { isMobile, isResponsive } = useResize();

  const friends = [];
  const requests = [];


  const getUser = useCallback(async ()=>{
    const user = await userServices.getOneUser(params.user_id);
    setUser(user);
    if(params.user_id === stateUser._id){
      setMyProfile(true);
    }else{
      setMyProfile(false);
    }
  },[params.user_id, stateUser._id]);
  
  useEffect(()=>{
    getUser();

    setIsLoading(false);
  },[getUser]);

  const checkRelationshipStatus =()=>{

  }

  const sendFriendRequest = () =>{
    
  };
  const cancelFriendRequest = ()=>{

  };
  const approveRequest = ()=>{

  };
  const rejectRequest = ()=>{

  };
  
  const tabs = [
    {label: "Posts", key: 'posts', children: <h1>posts</h1>},
    {label: "About", key: 'about', children: <h1>About</h1>},
    {label: "Friends", key: 'friends', children: <h1>Friends</h1>},
    {label: "Photos", key: 'photos', children: <h1>Photos</h1>},
  ];
  const dropdownItems = [
    {label:'Favorites',key:'favorites',icon:<AiOutlineStar size='20'/>},
    {label:'Unfriends',key:'unfriends',icon:<BiUserX size='20'/>},
  ];

  if(!isLoading && user){
    return(
      <div
          className="profile-container d-flex flex-d-column align-items-center"
        >
          <div className="profile-head d-flex flex-d-column"
            style={isMobile ? {width:'100%'} : isResponsive ? {width:'90%'} : {width:'80%'}}
            >
            <Image
              className="cover"
              style={{width:'100%',height:'250px'}}
              src={user.profile?.cover_img ? user.profile.cover_img : 'https://i.pinimg.com/originals/20/ab/34/20ab3479a8b0eb6b36728652ef1443c0.jpg'}
              alt={`${getFullName(user)}_cover_img`}
            />

            <div
              className={`user-details gap-10 d-flex align-items-center ${isMobile ? 'flex-d-column' : 'flex-d-row'}`}
              >
              <div className="profile-img">
                {user.profile?.profile_img
                ?
                  <Image className="img" src={user.profile.profile_img} alt={`${getFullName(user)}_profile_img`}/>
                :
                  <AiOutlineUser size={'60px'} />
                }
              </div>

              <div className="details lh-10" >
                <p>{getFullName(user)}</p>
                <p>{friends ? friends.length + ' Friends' : 'No Friends'}</p>
              </div>
            </div>
          </div>

          {!myProfile &&
            <div className="d-flex flex-d-row gap-5">
              {!hasRelationship &&
                <div className="send-request">
                  <Tooltip title="Send-Request">
                    <Button type="primary" icon={<FiUserPlus size='20' className="mr-5"/>} onClick=  {sendFriendRequest}>
                      Add friend
                    </Button>
                  </Tooltip>
                </div>
              }

              {hasRelationship &&
                <>
                  {requests[0]?.details.status === RelationshipSteps.REQUESTֹ_SENT
                  && (!toConfirm
                    ?
                      <Tooltip title="Cancel-Request">
                        <Button type="primary" danger icon={<FiUserX size='20' className="mr-5"/>} onClick={cancelFriendRequest}>Cancel-request</Button>
                      </Tooltip>
                    :
                      <div className="to_confirm_container d-flex gap-5">
                        <Tooltip title="Approve">
                          <Button type="primary" icon={<BiUserCheck size='20' className="mr-5"/>} onClick={approveRequest}>Approve</Button>
                        </Tooltip>
                        <Tooltip title="Denied">
                          <Button danger icon={<BiUserX size='20' className="mr-5"/>} onClick={rejectRequest}>Denied</Button>
                        </Tooltip>
                      </div>
                    )
                  }

                  {requests[0]?.details.status === RelationshipSteps.APPROVED
                    &&
                  (
                    <Dropdown trigger={'click'} menu={{items: dropdownItems}} arrow>
                      <Button icon={<BiUserCheck size='20' className="mr-5"/>}>Friends</Button>
                    </Dropdown>
                  )}
                </>
              }
                
              
              <Button icon={<BsMessenger size='15' className="mr-5"/>}>Message</Button>
            </div>
          }

          <Tabs className="mt-10"
            style={isMobile ? {width:'100%',padding:'0 20px 20px'} : isResponsive ? {width:'90%'} : {width:'80%'}}
            mode="horizontal"
            items={tabs}
            tabBarExtraContent={myProfile ? <Button type="primary"> <Link to={`/edit-profile/${user._id}`}>Edit-Profile</Link></Button> : ''}
          />

      </div>
    );
  } else return <Spin/>
};

export default Profile;