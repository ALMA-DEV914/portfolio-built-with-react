import React from 'react';
import Nav from "../Nav";
import logoImage from '../../assets/cover/logo-dark.png';
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

export default Header;