import React, { useState } from "react";
import InputField from "../components/input";

const App: React.FC = () => {
	const [inputValue, setInputValue] = useState("");

	const handleInputChange = (value: string) => {
		setInputValue(value);
	};

	return (
		<div>
			<InputField
				label="First Name:"
				value={inputValue}
				onChange={handleInputChange}
			/>
			<InputField
				label="Last Name:"
				value={inputValue}
				onChange={handleInputChange}
			/>
			<InputField
				label="Username:"
				value={inputValue}
				onChange={handleInputChange}
			/>
			<InputField
				label="Create a password:"
				value={inputValue}
				onChange={handleInputChange}
			/>
			<InputField
				label="Confirm:"
				value={inputValue}
				onChange={handleInputChange}
			/>
		</div>
	);
};

export default App;
