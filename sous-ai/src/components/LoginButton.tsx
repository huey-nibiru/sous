import React, { useState } from "react";
import "./LoginButton.css"; // You can style the button in a separate CSS file

interface LoginSignupButtonProps {
	// You can define any additional props you need here
}

const LoginSignupButton: React.FC<LoginSignupButtonProps> = () => {
	const [isGlowing, setIsGlowing] = useState(false);

	const handleButtonClick = () => {
		setIsGlowing(!isGlowing);
	};

	return (
		<button
			className={`login-signup-button ${isGlowing ? "glow" : ""}`}
			onClick={handleButtonClick}
		>
			{isGlowing ? "Sign Up" : "Login"}
		</button>
	);
};

export default LoginSignupButton;
