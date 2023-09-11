import React from "react";
import "./styles/HomeImage.css";
import Header from "../components/Header";

export default function () {
	return (
		<>
			<div className="home-page">
				<Header />
				<div className="banner-container">
					<img
						src="./src/assets/food_platter.png"
						alt="Your Image"
						className="banner-image"
					/>
				</div>
			</div>
		</>
	);
}
