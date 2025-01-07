import React, { useState } from "react";
import image26 from './assets/image26.jpg'; // Import the image from the assets folder

function HerStory() {
  const [language, setLanguage] = useState("english");

  const eulogy = {
    english: "In Loving Memory of Our Dear Cousin...",
    kikuyu: "Wamwĩrĩa wĩrĩ wa wendo wĩtũ...",
    kiswahili: "Kwa mapenzi makubwa ya binamu yetu...",
  };

  return (
    <div style={{ 
      backgroundImage: `url(${image26})`, // Set the background image
      backgroundSize: 'cover',           // Ensure the image covers the whole page
      backgroundPosition: 'center',      // Center the image
      backgroundAttachment: 'fixed',     // Keep the background fixed when scrolling
      height: '70vh',                   // Full viewport height
      color: 'white',                    // Set text color to white for visibility
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      textAlign: 'center',               // Center text
      padding: '20px',
    }}>
      <h1>Her Story / Eulogy</h1>
      <div>
        <button onClick={() => setLanguage("english")}>English</button>
        <button onClick={() => setLanguage("kikuyu")}>Kikuyu</button>
        <button onClick={() => setLanguage("kiswahili")}>Kiswahili</button>
      </div>
      <p>{eulogy[language]}</p>
      <h2>Life of Caroline Wanjiku Njung'e</h2>
      <p>[A detailed tribute can go here in each language]</p>
    </div>
  );
}

export default HerStory;
