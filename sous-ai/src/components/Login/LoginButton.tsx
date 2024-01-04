import { useNavigate } from "react-router-dom";
import "./LoginButton.css";

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
