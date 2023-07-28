import React from "react";
import "./styles.css";
import clipArt from "../assets/SignUpPageClipart.png";
import FormComponent from "../components/SignUpForm";

const App: React.FC = () => {
	return (
		<>
			<div className="wrapper">
				<img className="signUpClipart" src={clipArt} alt="react logo" />
				<div className="headerContainer">
					<h1>Sign Up</h1>
					<h4>Let's get started!</h4>
				</div>

				<div className="formContainer">
					<FormComponent />
				</div>
			</div>
		</>
	);
};

export default App;
