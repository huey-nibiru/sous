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

	const formStyle = {
		display: "flex",
		flexDirection: "column",
		alignItems: "center",
	};
	const containerStyle = {
		display: "flex",
		flexDirection: "column",
		alignItems: "center",
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
		<div style={containerStyle}>
			<form style={formStyle}>
				<InputField
					label="Email"
					value={email}
					onChange={(value) => setEmail(value)}
				/>

				<InputField
					label="Password"
					type="password"
					value={password}
					onChange={handlePasswordChange}
				/>
			</form>

			{!isPasswordMatch && <p>Passwords do not match.</p>}

			<button style={buttonStyle}>Log In</button>
			<p>
				Forgot Password? <a href="https://www.example.com">Click Here</a>
			</p>
		</div>
	);
};

export default FormComponent;
