import React, { useState } from 'react';
import './CountBox.scss';

function Counter({ items }) {
  const [count, setCount] = useState(1);
  const maxCount = 10;
  const minCount = 1;

  const handleCount = event => {
    if (event > maxCount) {
      setCount(maxCount);
    } else if (event < minCount) {
      setCount(minCount);
    } else setCount(event);
  };
  const onIncreaseCount = () => {
    if (count < maxCount) setCount(count + 1);
    else if (count > maxCount) setCount(maxCount);
  };
  const onDecreaseCount = () => {
    if (count > minCount) setCount(count - 1);
  };

  return (
    <form>
      <div className="option_total_area">
        <div className="order_product_option_display_area">
          <span className="product_name">{items.result.title}</span>
          <div className="product_price">
            <span className="product_count">
              <input
                className="input_text_goodsCnt"
                value={count}
                onChange={event => {
                  handleCount(event.target.value);
                }}
              />
              <span>
                <div className="button_box">
                  <input
                    className="up_button"
                    type="button"
                    class
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
            <em>{items.result.old_price}</em>
          </div>
          <div className="delete_button">
            <button type="button">&#x2613;</button>
          </div>
        </div>
      </div>
    </form>
  );
}

export default Counter;
