import React from "react";
import "./styles.css";
import clipArt from "../assets/SignUpPageClipart.png";
import FormComponent from "../components/SignUpForm";
import Navbar from "../components/Navbar";

const SignUpPage: React.FC = () => {
	const containerStyle = {
		display: "flex",
		alignItems: "center",
		placeItems: "center",
		position: "fixed",
		top: "0",
		left: "0",
		bottom: "0",
		right: "0",
		justifyContent: "center",
	};

	const imageStyle = {
		width: "400px", // Adjust the width of the image as needed
		//height: "200px", // Set the desired height
		marginRight: "100px", // Add some space between the image and the form
	};

	const headerContainer = {
		textAlign: "center",
		marginLeft: "auto",
		marginTop: "10px",
	};

	const formColumn = {
		flexDirection: "column", // Align form and header items in a column
	};

	return (
		<>
			<Navbar />
			{
				// Align the clipart with the form horizontally
			}
			<div style={containerStyle}>
				<div className="clipArtContainer">
					<img
						className="clipArt"
						src={clipArt}
						alt="sous clipart"
						style={imageStyle}
					/>
				</div>

				{
					//	Align the form with the header vertically
				}
				<div style={formColumn}>
					<div style={headerContainer}>
						<h1>Sign Up</h1>
						<h4>Let's get started!</h4>
					</div>

					<div className="formContainer">
						<FormComponent />
					</div>
				</div>
			</div>
		</>
	);
};

export default SignUpPage;
