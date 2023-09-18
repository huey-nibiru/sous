import React from "react";
import "./styles/LoginForm.css";
const LoginComponent: React.FC = () => {
	return (
		<div className="white-half-container">
			<h1>Login</h1>
			<form className="form-container">
				<div className="input-group">
					<h2>Email</h2>
					<input type="text" placeholder="Enter your email" />
				</div>
				<div className="input-group">
					<h2>Password</h2>
					<input type="password" placeholder="Enter your password" />
				</div>
				<button className="log-in-button">Login</button>
			</form>
			<p className="forgot-password">
				<a href="#">Forgot your password?</a>
			</p>
			<button className="sign-up-button">Sign Up</button>
		</div>
	);
};

export default LoginComponent;
