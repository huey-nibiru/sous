import React from "react";
import "./styles/Header.css";
import LoginButton from "../components/LoginButton";

export default function () {
	return (
		<>
			<div className="header">
				<h1>Sous</h1>

				{<LoginButton />}
			</div>
		</>
	);
}
