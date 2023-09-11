import React from "react";
import { useNavigate } from "react-router-dom"; // Assuming you're using React Router for navigation
import "./styles/SignUpButton.css"; // You can create a CSS file for styling

function SignUpButton() {
	const navigate = useNavigate();

	const handleSignUpClick = () => {
		// You can navigate to the signup screen or any other desired location
		navigate("/signup"); // Replace '/signup' with your actual signup route
	};

	return (
		<button className="signup-button" onClick={handleSignUpClick}>
			Sign Up
		</button>
	);
}

export default SignUpButton;
