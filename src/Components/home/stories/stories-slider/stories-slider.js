import { lazy } from "react";
import Slider from "react-slick";
import { useResize } from "../../../../Utils/helpers";
import "slick-carousel/slick/slick.css"; 
import "./style.css";

const StoryCard = lazy(()=>import('../story-card/card'));

const StoriesSlider = (props)=>{
  const { stories } = props;
  const {isMobile, isResponsive} = useResize();

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: isMobile ? 3 : isResponsive ? 4 : 4,
    slidesToScroll: 2,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />
  };

  return(
    <div className="slider_main_container">
      <div className="slider_inner_container">
        <Slider {...settings} className='slider'>

          {(!stories || stories?.length === 0) &&
            new Array(9).fill(null).map((_, index) => (
                <StoryCard key={index} story={null}/>
              ))
          }

        </Slider>
      </div>
    </div>
  )
};

export default StoriesSlider;

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "inline",borderRadius:'50%' ,background: "lightGray"}}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "inline",borderRadius:'50%' ,background: "lightGray"}}
      onClick={onClick}
    />
  );
};
