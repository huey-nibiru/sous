import React from "react";

const LoginComponent: React.FC = () => {
	return (
		<div className="white-half-container">
			<h1>Main Heading</h1>
			<form className="form-container">
				<div className="input-group">
					<h2>Username</h2>
					<input type="text" placeholder="Enter your username" />
				</div>
				<div className="input-group">
					<h2>Password</h2>
					<input type="password" placeholder="Enter your password" />
				</div>
				<button className="login-button">Login</button>
			</form>
			<p className="forgot-password">
				<a href="#">Forgot your password?</a>
			</p>
			<button className="sign-up-button">Sign Up</button>
		</div>
	);
};

export default LoginComponent;
