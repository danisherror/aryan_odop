import React from 'react';
import './CardGrid.css'; // Create this CSS file for styling
import walnut from './images/Walnut_anantnag.jpg';
import pashmina from './images/pashmina kashmir.jpg';
import safron from './images/saffron pulwama.jpg';
import papier from './images/papier mache kashmir.jpg';
import kani from './images/kani shawl kahmir.jpg';
import carpet from './images/carpet baramulla.jpg';
import basholi from '/Users/aryanmehrotra/react-app/my-app/src/components/CardGrid/images/basohli-painting.jpg';
import img1 from '/Users/aryanmehrotra/react-app/my-app/src/components/CardGrid/images/img1 .jpeg';
import img2 from '/Users/aryanmehrotra/react-app/my-app/src/components/CardGrid/images/img2.jpg';
function CardGrid() {
  const cardData = [
    {
      image: walnut,
      caption: 'Walnuts of Kupwara',
      backgroundColor: '#FF6347', // Background color for the card
    },
    {
      image: pashmina,
      caption: 'Pashmina From Shrinagar',
      backgroundColor: '#66CDAA',
    },
    {
      image: safron,
      caption: 'Saffron From Pulwama',
      backgroundColor: '#FFD700',
    },
    {
      image: papier,
      caption: 'Papier Mache From Badgaon',
      backgroundColor: '#9370DB',
    },
    {
      image: kani,
      caption: "Kani shawl From Shopia",
      backgroundColor: '#87CEEB',
    },
    {
      image: carpet,
      caption: 'Carpet From Baramulla',
      backgroundColor: '#FFA07A',
    },
    {
      image: basholi,
      caption: 'Basholi From Kathua',
      backgroundColor: '#98FB98',
    },
    {
      image: img1,
      caption: 'Chikiri Wood Craft From Rajouri',
      backgroundColor: '#FF69B4',
    },
    {
      image: img2,
      caption: 'Mushqbudgi Rice From Anantnag',
      backgroundColor: '#FF69B4',
    },
    
    
  ];

  return (
    <div className="card-grid">
      {cardData.map((card, index) => (
        <div
          key={index}
          className="card"
          style={{ backgroundColor: card.backgroundColor }}
        >
          <img src={card.image} alt={`Card ${index + 1}`} />
          <p>{card.caption}</p>
        </div>
      ))}
    </div>
  );
}

export default CardGrid;
