import React from "react";
import "./styles/HomeImage.css";
import Header from "../components/Header";

export default function () {
	return (
		<>
			<div>
				<Header />
			</div>
			<div>
				<img
					src="../src/assets/food_platter.png"
					alt="Food Image 1"
					className="home-page-image"
				/>
			</div>
		</>
	);
}
