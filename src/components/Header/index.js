import React from 'react';
import Nav from "../Nav";

function Header(props) {
  const { currentCategory, setCurrentCategory } = props;

  return (
    <header className='flex-row px-1'>
      <div>
        <h1 className='header' >Alma Braun</h1>
      </div>
      <div>
        <Nav
          currentCategory={currentCategory}
          setCurrentCategory={setCurrentCategory}
        ></Nav>
      </div>
    </header>
  );
}

export default Header;