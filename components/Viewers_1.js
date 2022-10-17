import styled from "styled-components";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick"


const Viewers_1 = (props) => {
 
    let settings = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: false,
      scroll: true
    };
 

  return (

     
     
      
   
       
       <Sliders {...settings} className="news_carousel">
     
       <Wrap className="wrap_news_1">
        <img src="/images/news.png" alt="" />
        <video autoPlay={true} loop={true} playsInline={true}>
          <source src="/videos/1564674844-disney.mp4" type="video/mp4" />
        </video>
      </Wrap>
     
      
      <div className="wrap_news_1">
        <img src="/images/news_1.png" alt="" height={100} width={100}/>
        <video autoPlay={true} loop={true} playsInline={true}>
          <source src="/videos/1564676714-pixar.mp4" type="video/mp4" />
        </video>
      </div>

      <div className="wrap_news_1">
        <img src="/images/news_2.png" alt="" height={100} width={100}/>
        <video autoPlay={true} loop={true} playsInline={true}>
          <source src="/videos/1564676115-marvel.mp4" type="video/mp4" />
        </video>
      </div>
      
      <div className="wrap_news_1">
        <img src="/images/news_3.png" alt="" />
        <video autoPlay={true} loop={true} playsInline={true}>
          <source src="/videos/1564674844-disney.mp4" type="video/mp4" />
        </video>
      </div>
      
      <div className="wrap_news_1">
        <img src="/images/news_4.png" alt="" />
        <video autoPlay={true} loop={true} playsInline={true}>
          <source src="/videos/1564676714-pixar.mp4" type="video/mp4" />
        </video>
      </div>
      
      <Wrap className="wrap_news_1">
        <img src="/images/news_5.png" alt="" />
        <video autoPlay={true} loop={true} playsInline={true}>
          <source src="/videos/1564676115-marvel.mp4" type="video/mp4" />
        </video>
      </Wrap>
      
      </Sliders>
     
);
};   
    
   
      
   



const Sliders = styled(Slider)`
   
  width: 100%;
  margin-left: 3%;
  & > button {
    
    height: 100%;
    width: 5vw;
    z-index: 1;
    

    &:hover {
      opacity: 1;
      transition: opacity 0.2s ease 0s;
      color: blue;
    }
  }

  ul li button {
    &:before {
      font-size: 10px;
      color: rgb(150, 158, 171);
    }
  }

  li.slick-active button:before {
    color: blue;
  }

  
  .slick-prev {
    left: -27px;
  }

  .slick-slide {
    margin: 12px 0px;
    padding-right: 20px;
    padding-left: 10px;
}



  .slick-next {
    right: -28px;
  }
  .slick-list {
    margin: 0 10px;
}

.slick-dots {
  position: absolute;
  bottom: -25px;
  list-style: none;
  display: block;
  text-align: center;
  padding: 0;
  margin: 0;
  width: 100%;
  li {
      position: relative;
      display: inline-block;
      height: 20px;
      width: 20px;
      margin: 0 5px;
      padding: 0;
      cursor: pointer;
      button {
          border: 0;
          background: transparent;
          display: block;
          height: 20px;
          width: 20px;
          outline: none;
          line-height: 0px;
          font-size: 0px;
          color: transparent;
          padding: 5px;
          cursor: pointer;
          &:hover, &:focus {
              outline: none;
              &:before {
                  opacity: @slick-opacity-on-hover;
              }
          }
          &:before {
              position: absolute;
              top: 0;
              left: 0;
              content: @slick-dot-character;
              width: 20px;
              height: 20px;
              font-family: @slick-font-family;
              font-size: @slick-dot-size;
              line-height: 20px;
              text-align: center;
              color: @slick-dot-color;
              opacity: @slick-opacity-not-active;
              -webkit-font-smoothing: antialiased;
              -moz-osx-font-smoothing: grayscale;
          }
      }
      &.slick-active button:before {
          color: @slick-dot-color-active;
          opacity: @slick-opacity-default;
      }
  }
}
 
`;


const Wrap = styled.div`
 
  padding-top: 56.25%;
 
  height: 200px;
  border-radius: 10px;
  box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
    rgb(0 0 0 / 73%) 0px 16px 10px -10px;
  cursor: pointer;
  overflow: hidden;
  position: relative;
  transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
  border: 3px solid rgba(249, 249, 249, 0.1);

  img {
    inset: 0px;
    display: block;
    height: 100%;
    object-fit: cover;
    opacity: 1;
    position: absolute;
    transition: opacity 500ms ease-in-out 0s;
    width: 100%;
    z-index: 1;
    top: 0;
  }

  video {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0px;
    opacity: 0;
    z-index: 0;
  }

  &:hover {
    box-shadow: rgb(0 0 0 / 80%) 0px 40px 58px -16px,
      rgb(0 0 0 / 72%) 0px 30px 22px -10px;

    transform: scale(1.05);
    border-color: rgba(249, 249, 249, 0.8);

    video {
      opacity: 1;
    }
  }
`;

export default Viewers_1;
