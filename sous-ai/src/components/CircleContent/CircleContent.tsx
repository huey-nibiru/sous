import React from "react";
import "./CircleContent.css"; // Import the CSS file for styling

// Define the props for the CircleComponent
interface CircleComponentProps {
	imageUrl: string; // URL of the image to display in the circle
	img_alt: string; // Alt text for the image
	heading: string; // The heading text for the circle
	paragraph: string; // The paragraph text for the circle
}

// CircleComponent is a functional React component that displays content within a circle
const CircleComponent: React.FC<CircleComponentProps> = ({
	imageUrl,
	img_alt,
	heading,
	paragraph,
}) => {
	return (
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
