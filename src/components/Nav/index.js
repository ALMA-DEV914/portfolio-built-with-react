import React, {useEffect} from 'react';
import {capitalizeFirstLetter} from '../../utils/helpers';

function Nav(props) {
    const {
      categories = [],
      setCurrentCategory,
      currentCategory,
  
      contactSelected,
      setContactSelected,

      resumeSelected,
      setResumeSelected
    } = props;

    useEffect(() => {
      document.title = capitalizeFirstLetter(currentCategory.name);
    }, [currentCategory]);

    return (
      <header className="flex-row px-1">
        <h2>
          <a data-testid="link" href="/">
            Alma Braun
          </a>
        </h2>
        <nav>
          <ul className="flex-row">
            <li className="mx-2">
              <a
                data-testid="about"
                href="#about"
                onClick={() => setContactSelected(false)}
              >
                About me
              </a>
            </li>
            <li className={`mx-2 ${resumeSelected && "navActive"}`}>
                <a data-testid="resume" href='#resume' onClick={() => setResumeSelected(false)}>Resume</a>
            </li>
            <li className={`mx-2 ${contactSelected && "navActive"}`}>
              <span onClick={() => setContactSelected(true)}>Contact</span>
            </li>
            {categories.map((category) => (
              <li
                className={`mx-1 ${
                  currentCategory.name === category.name &&
                  !contactSelected &&
                  "navActive"
                }`}
                key={category.name}
              >
                <span
                  onClick={() => {
                    setCurrentCategory(category);
                    setContactSelected(false);
                  }}
                >
                  {/* {category.name} */}
                  {capitalizeFirstLetter(category.name)}
                </span>
              </li>
            ))}
          </ul>
        </nav>
      </header>
    );
  }
  
  export default Nav;
  