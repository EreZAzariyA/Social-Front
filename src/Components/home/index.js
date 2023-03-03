import { Spin } from "antd";
import { lazy, Suspense } from "react";
import { useSelector } from "react-redux";
import { useResize } from "../../Utils/helpers";
import "./style.css";

const Posts = lazy(()=>import('./posts/index'));
const UploadInput = lazy(()=>import('./upload-input/index'));
const Stories = lazy(()=>import('./stories/index'));

const Home = ()=>{
  const {isMobile, isResponsive} = useResize();
  const user = useSelector(state=>state.auth.user);

  const posts = [];

  return(
    <div className="home_main_container">
      <div className="home_inner_container" 
      style={isMobile ? {width:'100%'} : isResponsive ? {width:'90%'} : {width:'90%'}}
      >
        <div className="home_page">
          
          <div className="stories_section">
            <Suspense fallback={<Spin/>}>
              <Stories user={user}/>
            </Suspense>
          </div>

          <div className="upload_input_section">
            <Suspense fallback={<Spin/>}>
              <UploadInput user={user} listOfPosts={posts}/>
            </Suspense>
          </div>

          <div className="posts_section">
            <Suspense fallback={<Spin/>}>
              <Posts />
            </Suspense>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Home;
