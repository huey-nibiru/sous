import React from "react";
import "./CircleContent.css"; // Import the CSS file for styling

// Define the props for the CircleComponent
interface CircleComponentProps {
	imageUrl: string;
	img_alt: string;
	heading: string;
	paragraph: string;
}

// CircleComponent is a functional React component that displays content within a circle
const CircleComponent: React.FC<CircleComponentProps> = ({
	imageUrl,
	img_alt,
	heading,
	paragraph,
}) => {
	return (
		// Contains the contents of each circle in the carousel
		<div className="circle-container">
			<div className="red-circle">
				<img src={imageUrl} alt={img_alt} className="circle-image" />{" "}
				{/* Display the image with alt text */}
				<h2 className="circle-heading">{heading}</h2>{" "}
				{/* Display the heading */}
				<p className="circle-paragraph">{paragraph}</p>{" "}
				{/* Display the paragraph */}
			</div>
		</div>
	);
};

export default CircleComponent; // Export the CircleComponent for use in other components
