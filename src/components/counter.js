import React, { useState, useEffect, useRef } from 'react';

const Counter = ({ upperLimit, item, margin }) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const counterRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.5 } // Adjust the threshold as needed
    );

    if (counterRef.current) {
      observer.observe(counterRef.current);
    }

    return () => {
      if (counterRef.current) {
        observer.unobserve(counterRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (isVisible) {
      const interval = setInterval(() => {
        if (count < parseInt(upperLimit)) {
          setCount((prevCount) => prevCount + 1);
        }
      }, 100); // Increment every 200ms (5 times per second)

      return () => {
        clearInterval(interval); // Clear the interval when the component unmounts
      };
    }
  }, [isVisible, count, upperLimit]);

  const isAtUpperLimit = count >= parseInt(upperLimit);

  return (
    <div
      ref={counterRef}
      className={`bg-transparent w-[200px] h-[200px] md:w-[250px] md:h-[250px] rounded-full border border-white p-8 flex flex-col items-center justify-center mx-auto my-${margin}`}
    >
      <h2 className={`text-5xl md:text-6xl font-semibold text-gray-100`}>
        {isAtUpperLimit ? `${count}+` : count}
      </h2>
      <p className="text-gray-100 text-xl md:text-2xl">{item}</p>
    </div>
  );
};

export default Counter;
