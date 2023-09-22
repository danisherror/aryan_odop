import React from 'react';
import './CardGrid.css'; // Import your CSS file for styling
import walnut from './images/Walnut_anantnag.jpg';
import pashmina from './images/pashmina kashmir.jpg';
import saffron from './images/saffron.webp';
import papier from './images/papier mache kashmir.webp';
import kani from './images/kani shawl kahmir.jpg';
import carpet from './images/carpet baramulla.jpg';
import basholi from './images/basohli-painting.jpg';
import img1 from './images/img1 .jpeg';
import img2 from './images/img2.jpg';

function CardGrid() {
  const cardData = [
    {
      image: walnut,
      caption: 'Walnuts of Kupwara',
    },
    {
      image: pashmina,
      caption: 'Pashmina From Shrinagar',
    },
    {
      image: saffron,
      caption: 'Saffron From Pulwama',
    },
    {
      image: papier,
      caption: 'Papier Mache From Badgaon',
    },
    {
      image: kani,
      caption: 'Kani Shawl From Shopia',
    },
  ];

  const headingStyle = {
    backgroundColor: '#f0f0f0', // Background color for the heading
    padding: '20px',
    textAlign: 'center',
  };

  return (
    <div>
      <h2 style={headingStyle}>District-Wise Selected Products</h2>
      <div className="card-grid">
        {cardData.map((card, index) => (
          <div key={index} className="card">
            <img src={card.image} alt={`Card ${index + 1}`} />
            <p>{card.caption}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CardGrid;
