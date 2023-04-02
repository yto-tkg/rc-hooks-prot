import { useState } from "react";

const App = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  const increment2 = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const reset = () => {
    setCount(0);
  };

  const three = () => {
    setCount((prevCount) => (prevCount % 3 === 0 ? prevCount / 3 : prevCount));
  };

  return (
    <>
      <div>count: {count}</div>
      <button onClick={increment}>increment</button>
      <button onClick={decrement}>decrement</button>
      <button onClick={increment2}>increment2</button>
      <button onClick={reset}>reset</button>
      <button onClick={three}>three</button>
    </>
  );
};

export default App;
