import React from "react";
import "./styles/LoginForm.css";
const SignupComponent: React.FC = () => {
	return (
		<div className="white-half-container">
			<h1>Sign Up</h1>
			<form className="form-container">
				<div className="input-group">
					<h2>First Name</h2>
					<input type="text" />
				</div>
				<div className="input-group">
					<h2>Last Name</h2>
					<input type="text" />
				</div>
				<div className="input-group">
					<h2>Enter Your Email</h2>
					<input type="text" />
				</div>
				<div className="input-group">
					<h2>Mobile Number</h2>
					<input type="text" />
				</div>
				<div className="input-group">
					<h2>Create a Password</h2>
					<input type="password" />
				</div>
				<button className="log-in-button">Login</button>
			</form>
			<p className="footer-link">
				<a href="#">Forgot your password?</a>
			</p>
			<p className="footer-link">
				<a href="#">Log In</a>
			</p>
		</div>
	);
};

export default SignupComponent;
