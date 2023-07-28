import React, { useState } from "react";
import InputField from "./InputField";

const FormComponent: React.FC = () => {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const [confirmPassword, setConfirmPassword] = useState("");

	const handlePasswordChange = (value: string) => {
		setPassword(value);
	};

	const handleConfirmPasswordChange = (value: string) => {
		setConfirmPassword(value);
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
        label="Password:"
        type="password"
        value={password}
        onChange={handlePasswordChange}
      />
      <InputField
        label="Confirm Password:"
        type="password"
        value={confirmPassword}
        onChange={handleConfirmPasswordChange}
        icon={isPasswordMatch ? '✅' : '❌'}
      />
      {!isPasswordMatch && <p>Passwords do not match.</p>}
		</div>
	);
};

export default FormComponent;
