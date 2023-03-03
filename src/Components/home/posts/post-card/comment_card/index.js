import { useState } from "react";
import { Card } from "antd";
import { BiUserCircle } from "react-icons/bi";
import "./style.css";

const CommentCard = (props)=>{
  const {comment} = props;
  const [commentedUser, setCommentedUser] = useState();

  return(
    <Card type="inner" size="small" className="comment_card">
      <p>
        <BiUserCircle size={'20px'}/>
        {commentedUser.profile.first_name}
      </p>
      <p>
        {comment.text}
      </p>
    </Card>
  );
}

export default CommentCard;
