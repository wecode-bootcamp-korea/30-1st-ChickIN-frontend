import React, { useState } from 'react';
import './MainOptionsBox.scss';

function priceToString(price) {
  return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}
function MainOptionsBox({ items, setResultPrice }) {
  const [count, setCount] = useState(1);
  const maxCount = 10;
  const minCount = 1;
  const productPrice = items.price;
  const onIncreaseCount = () => {
    if (count < maxCount) setCount(count + 1);
    else if (count > maxCount) setCount(maxCount);
  };
  const onDecreaseCount = () => {
    if (count > minCount) setCount(count - 1);
  };
  setResultPrice(productPrice * count);

  return (
    <form>
      <div className="option_total_area">
        <div className="order_product_option_display_area">
          <span className="product_name">{items.name}</span>
          <div className="product_price">
            <span className="product_count">
              <input className="input_text_goodsCnt" value={count} readOnly />
              <span>
                <div className="button_box">
                  <input
                    className="up_button"
                    type="button"
                    onClick={() => onIncreaseCount()}
                    title="증가"
                    value="&#8896;"
                  />
                  <input
                    className="down_button"
                    type="button"
                    onClick={() => onDecreaseCount()}
                    title="감소"
                    value="&#8897;"
                  />
                </div>
              </span>
            </span>
            <em>{priceToString(productPrice * count)} 원</em>
          </div>
        </div>
      </div>
    </form>
  );
}

export default MainOptionsBox;
