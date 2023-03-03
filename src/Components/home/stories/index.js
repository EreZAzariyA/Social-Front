import { lazy } from "react";
import "./style.css";

const StoriesSlider = lazy(()=>import('./stories-slider/stories-slider'));

const Stories = (props)=>{
  const { user } = props;
  const stories = [];

  return(
    <div className="stories_main_container">
      <div className="stories_inner_container">
        <div className="stories">
          <div className="stories_slider">
            <StoriesSlider stories={stories}/>
          </div>

        </div>
      </div>
    </div>
    );

};

export default Stories;