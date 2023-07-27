import React, { useState } from "react";
import InputField from "../components/input";

const App: React.FC = () => {
	const [inputValue, setInputValue] = useState("");

	const handleInputChange = (value: string) => {
		setInputValue(value);
	};

	return (
		<>
			<div>
				<h1>Sign Up</h1>
				<h3>Let's get started</h3>
			</div>
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
		</>
	);
};

export default App;
