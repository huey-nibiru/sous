import React from "react";
import "./styles/Trial.css";

interface RedBoxWithImageProps {
	imageUrl: string;
	linkUrl: string;
}

const RedBoxWithImage: React.FC<RedBoxWithImageProps> = ({
	imageUrl,
	linkUrl,
}) => {
	const redirectToLink = () => {
		window.location.href = linkUrl;
	};

	return (
		<div className="red-box">
			{" "}
			{/* Use the CSS class for styling */}
			<img src={imageUrl} alt="Image" />
			<button onClick={redirectToLink}>Create Your First Meal!</button>
		</div>
	);
};

export default RedBoxWithImage;
