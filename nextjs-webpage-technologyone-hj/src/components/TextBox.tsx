// components/TextBox.tsx

import React from 'react';

interface TextBoxProps {
  id: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  className: string;
}

const TextBox: React.FC<TextBoxProps> = ({ id, value, onChange, placeholder, className }) => {
  return (
    <input
      id={id}
      type="text"
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className={className}
    />
  );
}

export default TextBox;
