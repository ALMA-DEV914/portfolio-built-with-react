// import all associated components to build the appliaction
//import the React and state package
import React, {useState} from 'react';
import './App.css';
import About from './components/About';
import ContactForm from './components/Contact';
import Resume from './components/Resume';
import Portfolio from './components/Portfolio';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from "./components/Home";
//initiate the Application
function App() {
  const [currentCategory, setCurrentCategory] = useState("about");
//function to switch each section or page
const displaySection = () => {
  switch (currentCategory) {
    case "home":
      return <Home/>
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
//content sections
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
      <Footer>
      </Footer>
    </div>
  </div>
);
}
//export the App default
export default App;
