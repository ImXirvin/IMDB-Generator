import styled from "styled-components";
import ImgSlider from "../components/ImgSlider";
import NewDisney from "../components/NewDisney";
import Originals from "../components/Originals";
import Recommends from "../components/Recommends";
import Trending from "../components/Trending";
import Viewers_1 from "../components/Viewers_1";
import Viewers_2 from "../components/Viewers_2";
import ImgSlider_AI from "../components/ImgSlider_AI";
import { useEffect } from "react";
import Header from "../components/Header";






const Home = (props) => {
 

  return (
    <div className="content">
    <Container>
      <Header />
      <ImgSlider />
      <br></br>
      <br></br>
      <h2 class="sub-titles">Featured Today</h2>
      <Viewers_1 />
     
      <br></br>
      <h2 className="what-to-watch">What To Watch</h2>
     
      <h2 className="movieTitles">Top Picks </h2>
      <br></br>
      <Recommends />
      <h2 className="movieTitles">Recommended To You</h2>
      <br></br>
      <NewDisney />
      
     
   
      
    </Container>
    </div>
  );
};

const Container = styled.main`
  
 
  overflow-x: hidden;
  display: block;
  top: 72px;
  padding: 0 calc(3.5vw + 5px);


`;

export default Home;