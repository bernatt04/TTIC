// src/components/Button.tsx
import React from 'react';

interface ButtonProps {
  onClick: () => void;
  children: React.ReactNode;
  className?: string;
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({ onClick, children, className = '', disabled = false }) => {
  return (
    <button
      onClick={onClick}
      className={`px-4 py-2 bg-blue-600 text-white rounded ${className} ${disabled ? 'opacity-50 cursor-not-allowed' : 'hover:bg-blue-700 transition duration-300 ease-in-out'}`}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
