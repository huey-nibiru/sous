import React from "react";
import "./Trialbox.css";
import salmon from "../../assets/salmon.png";
import { useNavigate } from "react-router-dom";

interface RedBoxWithImageProps {
	imageUrl: string;
	linkUrl: string;
}

const RedBoxWithImage: React.FC<RedBoxWithImageProps> = ({}) => {
	const navigate = useNavigate();
	const handleLoginClick = () => {
		// You can navigate to the login screen or any other desired location
		navigate("/trial"); // Replace '/login' with your actual login route
	};

	return (
		<div className="red-box">
			{" "}
			{/* Use the CSS class for styling */}
			<img src={salmon} alt="Image" />
			<button onClick={handleLoginClick}>Create Your First Meal!</button>
		</div>
	);
};

export default RedBoxWithImage;
