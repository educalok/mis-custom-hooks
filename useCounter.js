import { useState } from "react";

export const useCounter = (initialState = 1) => {
  const [counter, setState] = useState(initialState);

  
  const reset = () => {
    setState(initialState);
  };

  const increment = () => {
    setState(counter + 1);
  };

  const decrement = () => {
    setState(counter - 1);
  };

  return { reset, counter, increment, decrement };
};
