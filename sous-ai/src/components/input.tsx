import React, { ChangeEvent } from "react";

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
		<div>
			<label htmlFor="inputField">{label}</label>
			<input
				type="text"
				id="inputField"
				value={value}
				onChange={handleChange}
			/>
		</div>
	);
};

export default InputField;
