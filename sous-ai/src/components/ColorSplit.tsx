import React from "react";
import "./ColorSplit.css"; // Import the CSS file with the styles
import FormComponent from "./LoginForm";
const ColorSplit: React.FC = (left, right) => {
	return (
		<div className="color-split-container">
			<div className="left-half">
				<h1>Sous</h1>
			</div>
			<div className="right-half">
				<h1>Log in</h1>
				<FormComponent />
			</div>
		</div>
	);
};

export default ColorSplit;
