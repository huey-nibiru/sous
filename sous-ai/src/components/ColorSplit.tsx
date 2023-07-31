import React from "react";
import "./ColorSplit.css"; // Import the CSS file with the styles

const HalfPageGrey: React.FC = () => {
	return (
		<div className="half-page-grey-container">
			<div className="grey-half"></div>
			<div className="white-half"></div>
		</div>
	);
};

export default HalfPageGrey;
