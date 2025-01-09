import React, { useState } from 'react';
import './App.css'; // Make sure to include the CSS styles in a file named App.css or adjust as needed

// Import images from the src/assets folder
import image1 from './assets/image1.jpg';
import image2 from './assets/image2.jpg';
import image3 from './assets/image3.jpg';
import image4 from './assets/image4.jpg';
import image5 from './assets/image5.jpg';
import image6  from './assets/image6.jpg';
import image7 from './assets/image7.jpg';
import image8 from './assets/image8.jpg';
import image9 from './assets/image9.jpg';
import image10 from './assets/image10.jpg';
import image11 from './assets/image11.jpg';
import image12 from './assets/image12.jpg';
import image13 from './assets/image13.jpg';
import image14 from './assets/image14.jpg';
import image15 from './assets/image15.jpg';
import image16 from './assets/image16.jpg';
import image17 from './assets/image17.jpg';
import image18 from './assets/image18.jpg';
import image19 from './assets/image19.jpg';
import image20 from './assets/image20.jpg';
import image21 from './assets/image21.jpg';
import image22 from './assets/image22.jpg';
import image23 from './assets/image23.jpg';
import image24 from './assets/image24.jpg';
import image25 from './assets/image25.jpg';
import image26 from './assets/image26.jpg';
import image27 from './assets/image27.jpg';
import image28 from './assets/image28.jpg';
import image29 from './assets/image29.jpg';
import image30 from './assets/image30.jpg';
import image31 from './assets/image31.jpg';
import image32 from './assets/image32.jpg';
import image33 from './assets/image33.jpg';
import image34 from './assets/image34.jpg';
import image35 from './assets/image35.jpg';
import image36 from './assets/image36.jpg';
import image37 from './assets/image37.jpg';
import image38 from './assets/image38.jpg';
import image39 from './assets/image39.jpg';
import image40 from './assets/image40.jpg';
import image41 from './assets/image41.jpg';
import image42 from './assets/image42.jpg';
import image43 from './assets/image43.jpg';
import image44 from './assets/image44.jpg';
import image45 from './assets/image45.jpg';
import image46 from './assets/image46.jpg';
import image47 from './assets/image47.jpg';
import image48 from './assets/image48.jpg';
import image49 from './assets/image49.jpg';
import image50 from './assets/image50.jpg';
import image51 from './assets/image51.jpg';
import image52 from './assets/image52.jpg';
import image53 from './assets/image53.jpg';
import image54 from './assets/image54.jpg';
import image55 from './assets/image55.jpg';
import image56 from './assets/image56.jpg';
import image57 from './assets/image57.jpg';
import image58 from './assets/image58.jpg';
import image59 from './assets/image59.jpg';
import image60 from './assets/image60.jpg';
import image61 from './assets/image61.jpg';
import image62 from './assets/image62.jpg';

// ... Add other imports as needed

const allImages = [
  { src: image1, alt: "Memory 1", remembrance: "Mommy duties." },
  { src: image2, alt: "Memory 2", remembrance: "Big Sister vibez" },
  { src: image3, alt: "Memory 3", remembrance: "Forever cherished in our hearts." },
  { src: image4, alt: "Memory 4", remembrance: "You will always be remembered." },
  { src: image5, alt: "Memory 5", remembrance: "Family " },
  { src: image6, alt: "Memory 6", remembrance: "Uncle and niece posing with her princess" },
  { src: image7, alt: "Memory 7", remembrance: "Forever in our hearts." },
  { src: image8, alt: "Memory 8", remembrance: "In loving memory of a life so beautifully lived." },
  { src: image9, alt: "Memory 9", remembrance: "Big siz treating the bro's" },
  { src: image10, alt: "Memory 10", remembrance: " " },
  { src: image11, alt: "Memory 11", remembrance: "You will always be remembered." },
  { src: image12, alt: "Memory 12", remembrance: "Mommy & her princess pose." },
  { src: image13, alt: "Memory 13", remembrance: "Your memory will always be a blessing." },
  { src: image14, alt: "Memory 14", remembrance: "Forever in our hearts." },
  { src: image15, alt: "Memory 15", remembrance: "In loving memory of a life so beautifully lived." },
  { src: image16, alt: "Memory 16", remembrance: "Your spirit will forever shine in our hearts." },
  { src: image17, alt: "Memory 17", remembrance: "Forever cherished in our hearts." },
  { src: image18, alt: "Memory 18", remembrance: "You will always be remembered." },
  { src: image19, alt: "Memory 19", remembrance: "In loving memory of a beautiful soul." },
  { src: image20, alt: "Memory 20", remembrance: "Your memory will always be a blessing." },
  { src: image21, alt: "Memory 21", remembrance: "Forever in our hearts." },
  { src: image22, alt: "Memory 22", remembrance: "In loving memory of a life so beautifully lived." },
  { src: image23, alt: "Memory 23", remembrance: "Your spirit will forever shine in our hearts." },
  { src: image24, alt: "Memory 24", remembrance: "Forever cherished in our hearts." },
  { src: image25, alt: "Memory 25", remembrance: "You will always be remembered." },
  { src: image26, alt: "Memory 26", remembrance: "In loving memory of a beautiful soul." },
  { src: image27, alt: "Memory 27", remembrance: "Your memory will always be a blessing." },
  { src: image28, alt: "Memory 28", remembrance: "Forever in our hearts." },
  { src: image29, alt: "Memory 29", remembrance: "In loving memory of a life so beautifully lived." },
  { src: image30, alt: "Memory 30", remembrance: "Your spirit will forever shine in our hearts." },
  { src: image31, alt: "Memory 31", remembrance: "Forever cherished in our hearts." },
  { src: image32, alt: "Memory 32", remembrance: "You will always be remembered." },
  { src: image33, alt: "Memory 33", remembrance: "In loving memory of a beautiful soul." },
  { src: image34, alt: "Memory 34", remembrance: "Your memory will always be a blessing." },
  { src: image35, alt: "Memory 35", remembrance: "Forever in our hearts." },
  { src: image36, alt: "Memory 36", remembrance: "In loving memory of a beautiful soul." },
  { src: image37, alt: "Memory 37", remembrance: "Your memory will always be a blessing." },
  { src: image38, alt: "Memory 38", remembrance: "Forever in our hearts." },
  { src: image39, alt: "Memory 39", remembrance: "In loving memory of a beautiful soul." },
  { src: image40, alt: "Memory 40", remembrance: "Your memory will always be a blessing." },
  { src: image41, alt: "Memory 41", remembrance: "Forever in our hearts." },
  { src: image42, alt: "Memory 42", remembrance: "In loving memory of a beautiful soul." },
  { src: image43, alt: "Memory 43", remembrance: "Your memory will always be a blessing." },
  { src: image44, alt: "Memory 44", remembrance: "Forever in our hearts." },
  { src: image45, alt: "Memory 45", remembrance: "In loving memory of a beautiful soul." },
  { src: image46, alt: "Memory 46", remembrance: "Your memory will always be a blessing." },
  { src: image47, alt: "Memory 47", remembrance: "Forever in our hearts." },
  { src: image48, alt: "Memory 48", remembrance: "Forever in our hearts." },
  { src: image49, alt: "Memory 49", remembrance: "In loving memory of a beautiful soul." },
  { src: image50, alt: "Memory 50", remembrance: "Your memory will always be a blessing." },
  { src: image51, alt: "Memory 51", remembrance: "Forever in our hearts." },
  { src: image52, alt: "Memory 52", remembrance: "In loving memory of a beautiful soul." },
  { src: image53, alt: "Memory 53", remembrance: "Your memory will always be a blessing." },
  { src: image54, alt: "Memory 54", remembrance: "Forever in our hearts." },
  { src: image55, alt: "Memory 55", remembrance: "In loving memory of a beautiful soul." },
  { src: image56, alt: "Memory 56", remembrance: "Your memory will always be a blessing." },
  { src: image57, alt: "Memory 57", remembrance: "Forever in our hearts." },
  { src: image58, alt: "Memory 58", remembrance: "In loving memory of a beautiful soul." },
  { src: image59, alt: "Memory 59", remembrance: "Your memory will always be a blessing." },
  { src: image60, alt: "Memory 60", remembrance: "Forever in our hearts." },
  { src: image61, alt: "Memory 61", remembrance: "In loving memory of a beautiful soul." },
  { src: image62, alt: "Memory 62", remembrance: "Your memory will always be a blessing." },
  // Add other images as needed...
];

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(null);

  // Open the modal with the selected image
  const openModal = (image) => {
    setCurrentImage(image);
    setIsModalOpen(true);
  };

  // Close the modal
  const closeModal = () => {
    setIsModalOpen(false);
    setCurrentImage(null);
  };

  return (
    <div className="App">
      <h1 className="gallery-title">Remembering Beautiful Moments</h1>
      
      <div className="gallery-grid">
        {allImages.map((photo, index) => (
          <div key={index} className="gallery-item" onClick={() => openModal(photo)}>
            <img src={photo.src} alt={photo.alt} className="gallery-image" />
            <div className="overlay-text">
              <p>{photo.remembrance}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Modal to display the selected image */}
      {isModalOpen && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <img src={currentImage.src} alt={currentImage.alt} className="modal-image" />
            <p className="modal-remembrance">{currentImage.remembrance}</p>
            <button className="modal-close" onClick={closeModal}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;