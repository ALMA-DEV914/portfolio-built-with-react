import React from 'react';
import Nav from "../Nav";


function Header(props) {
  const { currentCategory, setCurrentCategory } = props;

  return (
    <header>
      <div>
        <h1>Alma Braun</h1>
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