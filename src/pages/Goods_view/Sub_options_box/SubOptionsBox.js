import React, { useState } from 'react';
import './SubOptionsBox.scss';

function SubOptionsBox({ items }) {
  const [count, setCount] = useState(1);
  const maxCount = 10;
  const minCount = 1;
  const oldPrice = items.result.options[1].option_price;
  const resultPrice = oldPrice * count;
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
  const {
    id,
    title,
    discount,
    old_price,
    new_price,
    total_price,
    images,
    description,
    options,
  } = items.result;
  return (
    <form>
      <div className="sub_option_total_area">
        <div className="sub_option_display_area">
          <span className="sub_option_name">
            &#9493; {options[1].option_name}
          </span>
          <div className="sub_option_price">
            <span className="sub_option_count">
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

            <em>{resultPrice}원</em>
          </div>
          <div className="delete_button">
            <button type="button">&#x2613;</button>
          </div>
        </div>
      </div>
    </form>
  );
}
export default SubOptionsBox;
