import React, { useState } from "react";
import InputField from "./InputField";

const FormComponent: React.FC = () => {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const [confirmPassword, setConfirmPassword] = useState("");
	const [agreedToTerms, setAgreedToTerms] = useState(false);

	const buttonStyle = {
		backgroundColor: "red",
		color: "white",
		padding: "10px 20px",
		borderRadius: "10px",
		border: "none",
		marginTop: "20px",
		width: "100%",

		cursor: "pointer",
	};

	const handlePasswordChange = (value: string) => {
		setPassword(value);
	};

	const handleConfirmPasswordChange = (value: string) => {
		setConfirmPassword(value);
	};
	const handleCheckboxChange = () => {
		setAgreedToTerms((prevAgreedToTerms) => !prevAgreedToTerms);
	};

	const isPasswordMatch = password === confirmPassword;

	return (
		<div>
			<InputField
				label="Full Name"
				value={name}
				onChange={(value) => setName(value)}
			/>
			<InputField
				label="Email"
				value={email}
				onChange={(value) => setEmail(value)}
			/>
			<InputField
				label="Username"
				value={username}
				onChange={(value) => setUsername(value)}
			/>
			<InputField
				label="Password"
				type="password"
				value={password}
				onChange={handlePasswordChange}
			/>
			<InputField
				label="Confirm Password"
				type="password"
				value={confirmPassword}
				onChange={handleConfirmPasswordChange}
				icon={isPasswordMatch ? "✅" : "❌"}
			/>

			{!isPasswordMatch && <p>Passwords do not match.</p>}

			<div>
				<label>
					<input
						type="checkbox"
						checked={agreedToTerms}
						onChange={handleCheckboxChange}
					/>
					By signing up, you agree to our Terms and Pivacy Policy.
				</label>
			</div>
			<div>
				<button style={buttonStyle}>Sign Up</button>
			</div>
		</div>
	);
};

export default FormComponent;
