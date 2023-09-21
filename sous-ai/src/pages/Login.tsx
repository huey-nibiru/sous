import LoginComponent from "../components/Login/LoginForm";
import "./styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import LoginClipart from "../assets/LoginClipart.png";
import { faHouse } from "@fortawesome/free-solid-svg-icons";

export default function () {
	return (
		<>
			<body className="login-body">
				<div className="centered-container">
					<img src={LoginClipart} alt="Centered Image" />
					<div className="icon-container">
						<FontAwesomeIcon icon={faHouse} size="5x" />
						<h1>Sous</h1>
						<p>All your meal plans, in one place.</p>
					</div>
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
