import React, { ChangeEvent } from 'react';
import './input.css';

interface InputFieldProps {
  label: string;
  value: string;
  onChange: (value: string) => void;
}

const InputField: React.FC<InputFieldProps> = ({ label, value, onChange }) => {
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.value);
  };

  return (
    <div className="input-field-container">
      <label className="input-field-label" htmlFor="inputField">
        {label}
      </label>
      <input
        type="text"
        id="inputField"
        value={value}
        onChange={handleChange}
        className="input-field"
      />
    </div>
  );
};

export default InputField;
