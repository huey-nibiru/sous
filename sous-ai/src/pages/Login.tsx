import React from "react";
import "./styles.css";
import clipArt from "../assets/SignUpPageClipart.png";
import FormComponent from "../components/LoginForm.tsx";
import ColorSplit from "../components/ColorSplit.tsx";
import Sidebar from "../components/Sidebar.tsx";

const LoginPage: React.FC = () => {
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
			<div>
				<Sidebar />
				<ColorSplit />
			</div>
		</>
	);
};

export default LoginPage;
