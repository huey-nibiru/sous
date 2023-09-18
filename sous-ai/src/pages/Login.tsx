import LoginComponent from "../components/LoginForm";
import "./styles.css";
import LoginClipart from "../assets/LoginClipart.png";

export default function () {
	return (
		<>
			<body className="login-body">
				<div className="centered-container">
					<img src={LoginClipart} alt="Centered Image" />
				</div>
				<div className="main-content"></div>
				<LoginComponent />
			</body>

			<div className="footer-pad">
				<footer className="footer">Sous</footer>
			</div>
		</>
	);
}
