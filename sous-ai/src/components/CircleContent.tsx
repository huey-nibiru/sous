import React from "react";
import "./styles/CircleContent.css"; // You can style the circle component with CSS

interface CircleComponentProps {
	imageUrl: string;
	heading: string;
	paragraph: string;
}

const CircleComponent: React.FC<CircleComponentProps> = ({
	imageUrl,
	heading,
	paragraph,
}) => {
	return (
		<div className="circle-container">
			<div className="red-circle">
				<img src={imageUrl} alt="Image" className="circle-image" />
				<h2 className="circle-heading">{heading}</h2>
				<p className="circle-paragraph">{paragraph}</p>
			</div>
		</div>
	);
};

export default CircleComponent;
