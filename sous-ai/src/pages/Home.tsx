import React from "react";
import "./styles/home.css";
import LoginButton from "../components/LoginButton";

export default function Home() {
	return (
		<>
			<div className="header">
				<h1>SOUS</h1>
				{/* Add navigation links or other content here */}
			</div>

			<div className="App">
				<LoginButton />
			</div>
		</>
	);
}
