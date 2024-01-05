import { useNavigate } from "react-router-dom";
import "./LoginButton.css";

function LoginButton() {
	const navigate = useNavigate();

	const handleLoginClick = () => {
		navigate("/login");
	};

	return (
		<button className="login-button" onClick={handleLoginClick}>
			Login
		</button>
	);
}

export default LoginButton;
