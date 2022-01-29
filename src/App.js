import React, {useState} from 'react';
import './App.css';
import About from './components/About';
import Nav from './components/Nav';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import Resume from './components/Resume';


function App() {
  const [contactSelected, setContactSelected] = useState(false);

  const [categories] = useState([
    {
      name: "project",
      description:
        "Photos and links of all the projects",
    },
    { name: "homeworks", description: "Photos and links of all my homeworks" },
    
  ]);

  const [currentCategory, setCurrentCategory] = useState(categories[0]);
  return (
    <div>
      <Nav
        categories={categories}
        setCurrentCategory={setCurrentCategory}
        currentCategory={currentCategory}
        contactSelected={contactSelected}
        setContactSelected={setContactSelected}
        
      ></Nav>
      <main>
        {}
        {!contactSelected ? (
          <>
            <Gallery currentCategory={currentCategory}></Gallery>
            <About></About>
            <Resume></Resume>
          </>
        ): (
          <Contact></Contact>
          )}
      </main>
    </div>
  );
}
export default App;