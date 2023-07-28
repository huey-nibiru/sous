import React from "react";
import clipArt from "../assets/SignUpPageClipart.png";

const ImageWithForm = () => {
	const containerStyle = {
		display: "flex",
		alignItems: "center", // Align the items vertically (change this as needed)
	};

	const imageStyle = {
		width: "200px", // Adjust the width of the image as needed
		marginRight: "20px", // Add some space between the image and the form
	};

	return (
		<div style={containerStyle}>
			<img src={clipArt} alt="clipart" style={imageStyle} />
			<form>{/* Add your form elements here */}</form>
		</div>
	);
};

export default ImageWithForm;
