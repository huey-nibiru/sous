import React from "react";
import "./Trial.css";
import salmon from "../../assets/salmon.png";

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
			<img src={salmon} alt="Image" />
			<button onClick={redirectToLink}>Create Your First Meal!</button>
		</div>
	);
};

export default RedBoxWithImage;
