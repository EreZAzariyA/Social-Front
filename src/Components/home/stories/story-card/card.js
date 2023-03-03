import { Card } from "antd";
import "./style.css";

const StoryCard = ({story})=>{  
  if(story){
    return(
      <Card className="card">
          <p>{story}</p>
      </Card>
    );
  }else if(story === undefined || !story) {
    return(
      <Card className="card empty_card">
        <p>Create story</p>
        <p>+</p>
      </Card>
    );
  };
};

export default StoryCard;