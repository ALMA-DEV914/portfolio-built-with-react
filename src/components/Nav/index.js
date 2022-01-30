import React from "react";

function Nav(props) {
  const { currentCategory, setCurrentCategory } = props;

  return (
    <nav>
      <ul className="flex-row">
        <li className={currentCategory === "about" ? "mx-2 navActive" : "mx-2"}>
          <span onClick={() => setCurrentCategory("about")}>About Me</span>
        </li>
        <li
          className={
            currentCategory === "portfolio" ? "mx-2 navActive" : "mx-2"
          }
        >
          <span onClick={() => setCurrentCategory("portfolio")}>Portfolio</span>
        </li>
        <li
          className={currentCategory === "contact" ? "mx-2 navActive" : "mx-2"}
        >
          <span onClick={() => setCurrentCategory("contact")}>Contact</span>
        </li>
        <li
          className={currentCategory === "resume" ? "mx-2 navActive" : "mx-2"}
        >
          <span onClick={() => setCurrentCategory("resume")}>Resume</span>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
