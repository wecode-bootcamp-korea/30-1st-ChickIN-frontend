import React from 'react';
import './GoodsCard.scss';

function GoodsCard(props) {
  console.log(props);
  return props.CardsList.map((card, index) => {
    return (
      <div className="product" key={index}>
        <img src={card.imgUrl} alt={card.title} title={card.title} />
        <h4>{card.title}</h4>
        <div className="product_price">{card.price}</div>
      </div>
    );
  });
}

export default GoodsCard;
