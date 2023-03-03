import { Badge, Dropdown, Empty, Avatar } from "antd";
import { useState } from "react";
import { AiOutlineMessage } from "react-icons/ai";

const Messages = ()=>{
  const [messages,setMessages]=useState([]);
  const [count, setCount] = useState(0);

  const items = messages.length > 0
  ?
    messages.map((message,index)=>{
    return {key: index, label: message.sendUserId}
    })
  :
  [{label:<Empty description="No Messages" />,key:'empty'}];
  
  return(
    <Badge count={count}>
      <Dropdown menu={{items}} placement="bottomLeft" arrow trigger={['click','hover']}>
        <Avatar
          className="avatar_style"
          icon={<AiOutlineMessage color="darkblue" size={'30px'} onClick={()=>setCount(0)}/>}
          />
      </Dropdown>
    </Badge>
  );
};

export default Messages;