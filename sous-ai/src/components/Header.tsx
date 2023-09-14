import "./styles/Header.css";
import "./styles/Banner.css";
import LoginButton from "./LoginButton";
import SignUpButton from "./SignUpButton";

export default function () {
	return (
		<>
			<div className="header">
				<h1 className="h1">SOUS</h1>
				{<LoginButton />}
				{<SignUpButton />}
			</div>
			
		</>
	);
}
