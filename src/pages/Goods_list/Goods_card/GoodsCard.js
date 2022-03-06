import React from 'react';
import './GoodsCard.scss';

function GoodsCard(props) {
  // console.log(props);
  return props.CardsList.map(
    ({ product_id, product_img, product_name, product_price }) => (
      <li className="product" key={product_id}>
        <div
          className="product_img_Wrap"
          // onClick={() => goToDetail(product_id)}
        >
          <img alt="product" className="product_img" src={product_img} />
        </div>
        <div className="content_wrap">
          <div
            className="product_name"
            // onClick={() => goToDetail(product_id)}
          >
            {product_name}
          </div>
          <div className="product_price"> {product_price} </div>
        </div>
      </li>
    )
  );
}

export default GoodsCard;

//  li vs div 물어보기 !

// logo는 h1 tag를 써야한다
