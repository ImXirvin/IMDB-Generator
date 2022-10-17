import styled from "styled-components";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick"

const ImgSlider = (props) => {
  let settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };
  return (
   
    <Carousel {...settings} className="ImgSlider">
      <Wrap className="wrap_slider">
        <a>
          <img src="/images/spiderman.jpg" alt="" />
        </a>
      </Wrap>

      <Wrap className="wrap_slider">
        <a>
          <img src="/images/Aquaman.jpeg" alt="" />
        </a>
      </Wrap>

      <Wrap className="wrap_slider">
        <a>
          <img src="/images/avatar.jpg" alt="" />
        </a>
      </Wrap>

      <Wrap className="wrap_slider">
        <a>
          <img src="/images/pik.jpg" alt="" />
        </a>
      </Wrap>
      <Wrap className="wrap_slider">
        <a>
          <img src="/images/lion.jpg" alt="" />
        </a>
      </Wrap>
      <Wrap className="wrap_slider">
        <a>
          <img src="/images/groot.jpg" alt="" />
        </a>
      </Wrap>
      <Wrap className="wrap_slider">
        <a>
          <img src="/images/batman.jpg" alt="" />
        </a>
      </Wrap>
      <Wrap className="wrap_slider">
        <a>
          <img src="/images/incredibles.jpg" alt="" />
        </a>
      </Wrap>
      <Wrap className="wrap_slider">
        <a>
          <img src="/images/blade_runner.jpg" alt="" />
        </a>
      </Wrap>
      <Wrap className="wrap_slider">
        <a>
          <img src="/images/lightning.jpg" alt="" />
        </a>
      </Wrap>
     
    </Carousel>
    
  );
};

const Carousel = styled(Slider)`
 margin-top: 75px;
 margin-left: 5%;


& > button {
  opacity: 0;
  height: 100%;
  width: 5vw;
  z-index: 1;
  &:hover {
    opacity: 1;
    transition: opacity 0.2s ease 0s;
  }
}
ul li button {
  &:before {
    font-size: 10px;
    color: rgb(150, 158, 171);
  }
}

.slick-list {
  overflow: initial;
}
.slick-prev {
  left: -75px;
  color:white;
}
.slick-next {
  right: -75px;
  color: white;
}


.slick-dots li button {
  width: 10px;
  height: 10px;
  border-radius: 100%;
  color: white;
}
.slick-dots li.slick-active button {
  width: 11px;
  height: 11px;
  border-radius: 100%;
  background: transparent;
  color: white;
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
  color: white;
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
          color: white;
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
  border-radius: 4px;
  cursor: pointer;
  position: relative;

  a {
    border-radius: 4px;
    box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
      rgb(0 0 0 / 73%) 0px 16px 10px -10px;
    cursor: pointer;
    display: block;
    position: relative;
    padding: 4px;

    img {
      width: 100%;
      height: 100%;
    }

    &:hover {
      padding: 0;
      border: 4px solid rgba(249, 249, 249, 0.8);
      transition-duration: 300ms;
    }
  }
`;

export default ImgSlider;
