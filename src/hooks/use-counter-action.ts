import { useEffect, useState } from "react";

export const useCounterAction = () => {
  const [count, setCount] = useState(0);

  const counterAction = (cap: number) => {
    useEffect(() => {
      const newInterval = setInterval(() => {
        setCount((prev) => {
          if (prev === cap) {
            return cap;
          } else return prev + 1;
        });
      }, 1000);
      return () => clearInterval(newInterval);
    }, []);
    return cap;
  };

  return counterAction;
};
