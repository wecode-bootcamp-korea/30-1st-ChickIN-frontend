import React, { useState } from 'react';

function Counter() {
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
      <span className="product_count">
        <input
          name="counter"
          value={count}
          onChange={event => {
            handleCount(event.target.value);
          }}
        />
        <span>
          <div className="button_box">
            <input type="button" onClick={() => onIncreaseCount()} value="+" />
            <input type="button" onClick={() => onDecreaseCount()} value="-" />
          </div>
        </span>
      </span>
    </form>
  );
}

export default Counter;
