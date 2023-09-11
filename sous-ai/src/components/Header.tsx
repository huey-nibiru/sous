import React from "react";
import "./styles/Header.css";
import LoginButton from "../components/LoginButton";
import SignUpButton from "./SignUpButton";

export default function () {
	return (
		<>
			<div className="header">
				<h1>Sous</h1>

				{<LoginButton />}
				{<SignUpButton />}
			</div>
		</>
	);
}
