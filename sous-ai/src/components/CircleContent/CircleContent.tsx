import React from "react";
import "./CircleContent.css"; // You can style the circle component with CSS

interface CircleComponentProps {
	imageUrl: string;
	img_alt: string;
	heading: string;
	paragraph: string;
}

const CircleComponent: React.FC<CircleComponentProps> = ({
	imageUrl,
	img_alt,
	heading,
	paragraph,
}) => {
	return (
		<div className="circle-container">
			<div className="red-circle">
				<img src={imageUrl} alt={img_alt} className="circle-image" />
				<h2 className="circle-heading">{heading}</h2>
				<p className="circle-paragraph">{paragraph}</p>
			</div>
		</div>
	);
};

export default CircleComponent;
