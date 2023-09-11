import React from "react";
import { useNavigate } from "react-router-dom"; // Assuming you're using React Router for navigation
import "./styles/LoginButton.css"; // You can create a CSS file for styling

function LoginButton() {
	const navigate = useNavigate();

	const handleLoginClick = () => {
		// You can navigate to the login screen or any other desired location
		navigate("/login"); // Replace '/login' with your actual login route
	};

	return (
		<button className="login-button" onClick={handleLoginClick}>
			Login
		</button>
	);
}

export default LoginButton;
