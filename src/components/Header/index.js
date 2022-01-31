//import the react
import React from 'react';
//import the Nav compponent 
import Nav from "../Nav";
//import thye logo 
import logoImage from '../../assets/cover/logo-dark.png';
//initiate the Header component and associated Nav component
function Header(props) {
  const { currentCategory, setCurrentCategory } = props;

  return (
    <header className='flex-row px-2'>
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