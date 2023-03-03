import { lazy, useState } from "react";
import { Button, Card, Divider, Input, Space, Spin } from "antd";
import { getFullName } from "../../../../Utils/helpers.js";
import "./style.css";

const CommentCard = lazy(()=>import('./comment_card/index'));

const PostCard = (props)=>{
  const { post } = props;
  const [uploadedUser,setUploadedUser]=useState();
  const [comment,setComment] = useState('');
  const [comments,setComments] = useState([]);

  const addComment = ()=>{ }

  return(
    <Card
      className="post_card"
      title={getFullName(uploadedUser) + " " + new Date(post.dateCreated).toLocaleDateString()}
      >
        <div className="post">
          <p>{post.post}</p>
        </div>

        <Divider/>
        <div className="comments_container">
          {comments.length > 0 &&
            <div className="comments">
              <Card className="comments_card_container">
                <Space
                  direction="vertical"
                  size="middle"
                  style={{ display: 'flex' }}
                  >
                  {comments?.map((comment)=>
                      <CommentCard key={comment.id} comment={comment} />
                    )
                  }
                </Space>

                <div className="comments_counter">
                {comments?.length > 0
                ?
                  <>
                    <Button type="text" size="small">See all comments</Button>
                    <p>{comments.length + ' Comments'}</p>
                  </>
                :
                  <p>No comments</p>
                }
                </div>
              </Card>
            </div>
          }

          <div className="add_comment">
            <Input.Group compact>
              <Input type="text"
                style={{width: '90%'}}
                placeholder="Write an answer"
                onChange={(e)=>setComment(e.target.value)}
              />
              <Button style={{width:'10%',padding:'5px'}} type="primary" onClick={addComment}>Post</Button>
            </Input.Group>
          </div>
        </div>
    </Card>
  );
};

export default PostCard;
