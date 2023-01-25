import { useRef } from "react";

export const Count = () => {
  const inpRef = useRef(null);

  const increaseVal = () => {
    inpRef.current.value = 
    +(inpRef.current.value) + 1;
  };

  const resetValue = () => {
    inpRef.current.value = 0;
  };

  return (
    <div>
      <h2>
        Counter Value: 
      </h2>
      <p>
        <input 
          size="24" 
          type="text" 
          ref={inpRef}
          defaultValue="0" 
        />
      </p>
      <button 
        type="button" 
        onClick={increaseVal} 
      >
        Increase counter
      </button>
      <button 
        type="button" 
        onClick={resetValue} 
      >
        Reset counter
      </button>
    </div>
  );
};
