import React, { useState } from "react";
import image26 from './assets/image26.jpg'; // Import the image from the assets folder

function HerStory() {
  const [language, setLanguage] = useState("english");

  const eulogy = {
    english: `In Loving Memory of Our Dear Mother, Daughter, Sister, Cousin, and Friend, Caroline Wanjiku Njung'e.
    Caroline Wanjiku Njung'e was born on March 24, 1990, to Joseph Njung'e and Lucy Huura. She was the firstborn child and had two siblings: Eric Chege and Kelvin Ng'ang'a. Caroline was known to be a God-fearing child.

    She began her schooling in 1995 at Tutu Primary School and later transferred to Gathiga Primary School. She sat for her KCPE exams in 2005, after which she joined Kibichiku Secondary School, where she completed her KCSE exams in 2008.

    Caroline furthered her studies at Kivuli College, where she trained in beauty therapy. She was baptized at PCEA Church and later became a member of the Church of Restoration, where she continued to grow in her Christian faith. On March 10, 2024, Caroline gave her life to Christ.

    In her professional career, Caroline worked as a beautician in various countries, including Lebanon, Saudi Arabia, and Berlin.

    In November 2023, Caroline was diagnosed with cancer, a diagnosis that deeply impacted her and her loved ones. Despite her struggles, she remained strong and resilient. She passed away on January 2, 2025.

    Caroline was a loving mother to her children, Jayden Njung'e and Jayln Njoki. She will always be remembered for her faith, kindness, and dedication to her family.`,

    kikuyu: `Wamwĩrĩa wĩrĩ wa wendo wĩtũ wa mũrũ, mũtũrĩ, mũrĩrũ, na mũkĩrĩ, Caroline Wanjiku Njung'e.
    Caroline Wanjiku Njung'e aciarirwo mweri wa 24/03/1990 ni aciari ake Joseph Njung'e na Lucy Huura, maciaranirwo na Eric Chege na Kelvin Ng'ang'a. Niambiririe githomo giake Tutu Primary School mwaka wa 1995, na thutha ucio akiangira cukuru wa Gathiga Primary School. Thutha ucio agicenjia cukuru na agithie Kibichiku Secondary School, kuria athomire ngina mwaka wa 2008.

    Arikia cukuru, niangirire Kivuli College agithomera uhoro wa beauty therapy. Caroline niatwarirwo kanitha wa PCEA, ni aciari ake na akibatithio. Thutha ucio agecenjia kanitha agithie wa ACK aneneha.

    Caroline niacokire akiingira kanitha wa Church of Restoration na akirumia kihonoko. Mweri wa 10/03/2024, Wanjiku agetikira Mwathani na akienda uhoro wa Ngai.

    Caroline niarutate wira wa uthaka ma bururi ta Saudi Arabia, Berlin na Lebanon.

    Wanjiku akoretwe e muiruti wa giteo kuri aciari na andu othe. Kuri mwaka wa 2023, Wanjiku niambirwe guthinio ni mwiri. Kuri mweri wa November 2023, niathimirwo akioneka ena murimo wa cervical cancer. Niarigitirwo na njera ya guthinjwo na agicokereria ugima wake wa mwiri. Kuri mweri wa February, Caroline niambirie guthinio ni mwiri ringi na agitwaro Nazareth Hospital, thutha ucio agitumwo Kenyatta Hospital, kuria amenyekire murimu wa cancer niucokete ringi na akiambiriria kurigitwo.

    Kuri 29/12/2024, Caroline niehirwo ni mwiri na akiguthukio PCEA Kikuyu Hospital. Kuri mweri wa 02/01/2025, Caroline niahurukirwo ni Mwathani. Arari mami wa Jayden Njung'e na Jalyn Njoki.` 
  };

  return (
    <div style={{ 
      backgroundImage: `url(${image26})`, // Set the background image
      backgroundSize: 'cover',           // Ensure the image covers the whole page
      backgroundPosition: 'center',      // Center the image
      backgroundAttachment: 'fixed',     // Keep the background fixed when scrolling
      height: '100vh',                   // Full viewport height
      color: 'white',                    // Set text color to white for visibility
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',   // Ensure content is spaced between top and bottom
      alignItems: 'center',
      textAlign: 'center',               // Center text
      padding: '20px',
    }}>
      <div style={{ flex: 1 }}>
        <h1>Her Story / Eulogy</h1>
        <p>{eulogy[language]}</p>
        <h2>Life of Caroline Wanjiku Njung'e</h2>
        <p>[We as your family, friends we cherish the moments we shared together]</p>
      </div>

      {/* Language Buttons at the Bottom */}
      <div style={{ marginTop: 'auto', padding: '10px' }}>
        <button 
          onClick={() => setLanguage("english")}
          style={{ 
            padding: '10px 20px', 
            margin: '5px', 
            backgroundColor: '#4CAF50', 
            color: 'white', 
            border: 'none', 
            borderRadius: '5px',
            cursor: 'pointer',
          }}>
          English
        </button>
        <button 
          onClick={() => setLanguage("kikuyu")}
          style={{
            padding: '10px 20px',
            margin: '5px',
            backgroundColor: '#4CAF50',
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
          }}>
          Kikuyu
        </button>
      </div>
    </div>
  );
}

export default HerStory;
