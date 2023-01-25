import { useRef } from "react";

export const Refer = () => {
  const spanRef = useRef(null);

  const handleIncrease = () => {
    spanRef.current.textContent = 
    +(spanRef.current.textContent) + 1;
  };

  const handleReset = () => {
    spanRef.current.textContent = 0;
  };

  return (
    <div>
      <h3>Counter Value:&nbsp;
        <span ref={spanRef}>0</span>
      </h3>
      <button onClick={handleIncrease}>
        Increase counter
      </button>
      <button onClick={handleReset}>
        Reset counter
      </button>
    </div>
  );
};
