import React, {useState} from 'react';
import './App.css';
import About from './components/About';
import ContactForm from './components/Contact';
import Resume from './components/Resume';
import Portfolio from './components/Portfolio';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  const [currentCategory, setCurrentCategory] = useState("porfolio");
const displaySection = () => {
  switch (currentCategory) {
    
    case "about":
      return <About />;
    case "portfolio":
      return <Portfolio />;
    case "contact":
      return <ContactForm />;
    case "resume":
      return <Resume />;
    default:
      return null;
  }
};

return (
  <div>
    <div>
      <Header
        currentCategory={currentCategory}
        setCurrentCategory={setCurrentCategory}
      ></Header>
    </div>
    <div>
      <div>{displaySection()}</div>
    </div>
    <div>
      <Footer></Footer>
    </div>
  </div>
);
}

export default App;
