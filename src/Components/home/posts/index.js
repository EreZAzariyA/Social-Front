import { lazy, useState } from "react";
import { Card } from "antd";
import "./style.css";

const PostCard = lazy(()=>import('./post-card/index'));

export const Posts = ()=>{
  const [posts,setPosts] = useState([]);

  return(
    <div className="posts_main_container">
      <div className="posts_inner_container">
        <div className="posts">
          {posts.length > 0
          ?
            posts
            ?.sort((a,b)=>{return new Date(b.dateCreated) - new Date(a.dateCreated)})
            ?.map((post)=>
              <PostCard key={post.id} post={post}/>
            )
          :
            Array(4).fill(null).map((_, index) => 
              <Card className="mt-10" key={index}>
                <p>No post</p>
              </Card>
            )
          }
        </div>
      </div>
    </div>
  );
};

export default Posts;