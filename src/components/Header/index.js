//import the react
import React from 'react';
//import the Nav compponent 
import Nav from "../Nav";
//import thye logo 
import logoImage from '../../assets/cover/logo-dark.png';
//initiate the Header component and associated Nav component
function Header(props) {
  const { currentCategory, setCurrentCategory } = props;

  // When the user scrolls down 20px from the top of the document, slide down the navbar
  var prevScrollpos = window.pageYOffset;
  window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
      document.getElementById("navbar").style.top = "0";
    } else {
      document.getElementById("navbar").style.top = "-120px";
    }
    prevScrollpos = currentScrollPos;
  }



  return (
    <header className='flex-row px-2' id='navbar'>
      <div className='logo'>
       <img src={logoImage} alt='logo'/> <h1 className='header' >Alma Braun</h1>
         </div>
      <div className='nav'>
      <Nav
          currentCategory={currentCategory}
          setCurrentCategory={setCurrentCategory}
        ></Nav>
      </div>
    </header>
  );
}
//export the Header default
export default Header;