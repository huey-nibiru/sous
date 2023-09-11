import React from "react";
import "./styles/ContentCircle.css"; // Import your CSS file for styling

interface CircleWithContentProps {
	imageUrl: string;
	headerText: string;
	paragraphText: string;
}

const Circle: React.FC<CircleWithContentProps> = ({
	imageUrl,
	headerText,
	paragraphText,
}) => {
	return (
		<div className="circle-content">
			<div className="circle">
				<img src={imageUrl} alt="Circle Image" />
			</div>
			<h2>{headerText}</h2>
			<p>{paragraphText}</p>
		</div>
	);
};

export default Circle;
