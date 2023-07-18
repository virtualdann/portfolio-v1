import React, { useState, useEffect } from 'react';

const fontOptions = ['Playfair Display', 'Poppins', 'Times New Roman'];

const RandomFontText = ({ text, delay }) => {
  const [currentFont, setCurrentFont] = useState(fontOptions[0]);

  useEffect(() => {
    const fontInterval = setInterval(() => {
      const randomIndex = Math.floor(Math.random() * fontOptions.length);
      const randomFont = fontOptions[randomIndex];
      setCurrentFont(randomFont);
    }, delay);

    return () => {
      clearInterval(fontInterval);
    };
  }, [delay]);

  const styledText = text.split('').map((letter, index) => (
    <span key={index} style={{ fontFamily: currentFont }}>
      {letter}
    </span>
  ));

  return <div className='text-3xl sm:text-7xl lg:text-8xl xl:text-[150px] 2xl:text-[165px] tracking-tight'>{styledText}</div>;
};

export default RandomFontText;
