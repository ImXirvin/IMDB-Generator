import styled from "styled-components";
import Link from 'next/Link';

const Trending = (props) => {
  
  return (
    <div className="movieContainer">
      

      
        <div className="movieWrap">
         <li>
          <img src="https://images.hdqwalls.com/wallpapers/the-batman-red-2020-86.jpg"
           alt='/' 
          />
         </li>
        </div>

        <div className="movieWrap">
         <li>
          <img src="https://images.alphacoders.com/105/1052332.jpg"
           alt='/' 
          />
         </li>
        </div>

        <div className="movieWrap">
         <li>
          <img src="https://w0.peakpx.com/wallpaper/396/955/HD-wallpaper-the-incredibles-2-film-2019-featured.jpg"
           alt='/' 
          />
         </li>
        </div>

        <div className="movieWrap">
         <li>
          <img src="http://wallpaperset.com/w/full/1/d/6/130786.jpg"
           alt='/' 
          />
         </li>
        </div>
      
    </div>








  );

};

const Container = styled.div`
  padding-right: 10px;
  padding-right: 10px;
  padding-bottom: 50px;
  
  margin-left: -25%;
  display: grid;
  grid-gap: 50px;
  gap: 36px;
  grid-template-columns: repeat(5, minmax(0, 1fr));
  
  
  
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


export default Trending;