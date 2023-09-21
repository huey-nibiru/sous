import React from "react";
import "./LoginForm.css";
const LoginComponent: React.FC = () => {
	return (
		<div className="white-half-container">
			<h1>Log In</h1>
			<form className="form-container">
				<div className="input-group">
					<h2>Email</h2>
					<input type="text" />
				</div>
				<div className="input-group">
					<h2>Password</h2>
					<input type="password" />
				</div>
				<button className="log-in-button">Login</button>
			</form>
			<p className="footer-link">
				<a href="#">Forgot your password?</a>
			</p>
			<p className="footer-link">
				<a href="#">Sign Up</a>
			</p>
		</div>
	);
};

export default LoginComponent;
