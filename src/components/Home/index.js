//import react
import React from 'react';
//import the cover image from the path directory
import homeImage from "../../assets/cover/port.jpeg";
//initiate the About section component
function Home(){
    return(
        <main>
            <h1>Welcome to my</h1>
       <img src={homeImage} className="my-2" alt="homepage"/>
        
        </main>
    );
}
//export the Aboit default
export default Home;