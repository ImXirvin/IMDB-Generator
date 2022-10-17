import styled from "styled-components";
import Image from 'next/image';
import Link from 'next/link';



const Header = (props) => {
  

  



  return (
 
    <div className="nav-header">
      <div className="logo-header">
        <Image src="/images/tmovie.png" alt="IMDB" width={80} height={40} />
      </div>

    
        <>
          <div className="div-menu-header">
            <a href='/' className="a-header">
              
              <Image className="header-icons" src="/images/home-icon.svg" alt="HOME" width={20} height={20} />
              
              <span className="span-header"> HOME</span>
             
            </a>
            <a href='/' className="a-header">
            
               <Image  className="header-icons"src="/images/search-icon.svg" alt="SEARCH" width={20} height={20} />
              
              <span  className="span-header"> SEARCH</span>
            </a>
           
            <a href='/' className="a-header">
              <Image className="header-icons" src="/images/movie-icon.svg" alt="MOVIES" width={20} height={20}/>
              <span href='/home' className="span-header"> MOVIES</span>
            </a>
            <a href='/' className="a-header">
              <Image className="header-icons" src="/images/series-icon.svg" alt="SERIES" width={20} height={20}/>
              <span href='/home' className="span-header">TV</span>
            </a>
            <a href='/' className="a-header">
              <Image className="header-icons" src="/images/original-icon.svg" alt="GALLERY" width={20} height={20}/>
              <span href='/home' className="span-header">AI GALLERY</span>
            </a>
            <a href='/paint' className="a-header">
              <Image className="header-icons" src="/images/bot.svg" alt="AI" width={30} height={30}/>
              <span href='/home' className="span-header">MOVIE DESIGNER</span>
            </a>
          </div>
          
        </>
      
    </div>
  );
};

const Nav = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 70px;
  background-color: #090b13;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 36px;
  letter-spacing: 16px;
  z-index: 3;
`;

const Logo = styled.a`
  padding: 0;
 
  margin-top: 4px;
  max-height: 70px;
  font-size: 0;
  display: inline-block;

  img {
    display: block;
    width: 100%;
  }
`;

const NavMenu = styled.div`
  align-items: center;
  display: flex;
  flex-flow: row nowrap;
  height: 100%;
  justify-content: flex-end;
  margin: 0px;
  padding: 0px;
  position: relative;
  margin-right: auto;
  margin-left: 25px;

  a {
    display: flex;
    align-items: center;
    padding: 0 12px;

    Image {
      height: 20px;
      min-width: 20px;
      width: 20px;
      z-index: auto;
    }

    span {
      color: white;
      font-size: 13px;
      letter-spacing: 1.42px;
      line-height: 1.08;
      padding-left: 7px;
      white-space: nowrap;
      position: relative;

      &:before {
        background-color: rgb(249, 249, 249);
        border-radius: 0px 0px 4px 4px;
        bottom: -6px;
        content: "";
        height: 2px;
        left: 0px;
        opacity: 0;
        position: absolute;
        right: 0px;
        transform-origin: left center;
        transform: scaleX(0);
        transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
        visibility: hidden;
        width: auto;
      }
    }

   

    &:hover {
      span:before {
        transform: scaleX(1);
        visibility: visible;
        opacity: 1 !important;
      }
    }
  }

  /* @media (max-width: 768px) {
    display: none;
  } */
`;








export default Header;
