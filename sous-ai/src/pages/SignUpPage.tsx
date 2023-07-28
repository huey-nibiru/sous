import React from "react";
import "./styles.css";
import clipArt from "../assets/SignUpPageClipart.png";
import FormComponent from "../components/SignUpForm";

const App: React.FC = () => {
	const containerStyle = {
		display: "flex",
		alignItems: "center", // Align the items vertically (change this as needed)
	};

	const imageStyle = {
		width: "200px", // Adjust the width of the image as needed
		//height: "200px", // Set the desired height
		marginRight: "20px", // Add some space between the image and the form
	};

	return (
		<>
			<div className="wrapper" style={containerStyle}>
				
				<div className="clipArtContainer">
					<img
						className="clipArt"
						src={clipArt}
						alt="sous clipart"
						style={imageStyle}
					/>
				</div>

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
