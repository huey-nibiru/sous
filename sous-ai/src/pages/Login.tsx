import LoginComponent from "../components/LoginForm";
import "./styles.css";

export default function () {
	return (
		<>
			<body>
				<div className="main-content"></div>
				<LoginComponent />
			</body>

			<div className="footer-pad">
				<footer className="footer">Sous</footer>
			</div>
		</>
	);
}
