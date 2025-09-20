import React from 'react';

interface ButtonProps {
  text: string;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({ text, onClick }) => {
  return (
    <button className="ml-6 mt-2 bg-gradient-to-r from-red-800 via-red-600 to-red-500 text-white font-bold py-2 px-4 rounded-full shadow-xl" onClick={onClick}>
      {text}
    </button>
  );
}

export default Button;
