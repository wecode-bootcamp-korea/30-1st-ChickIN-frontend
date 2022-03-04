import React, { useState } from 'react';

let init = 0;
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
          required
          type="number"
          name="counter"
          value={count}
          onChange={event => {
            handleCount(event.target.value);
          }}
        />
        <span>
          {/* <button onClick={() => onIncreaseCount(count + 1)}>증가</button> */}
          {/* <button onClick={onDecreaseCount}>감소</button> */}
          <input
            type="button"
            onClick={() => onIncreaseCount()}
            value="+"
            className="cursor-pointer"
          />
        </span>
      </span>
    </form>
  );
}

export default Counter;
