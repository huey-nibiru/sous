import "./Header.css";
import LoginButton from "../Login/LoginButton";
import SignUpButton from "../SignUp/SignUpButton";

export default function () {
	return (
		<>
			<div className="header">
				<h1 className="h1">SOUS NUTRITION</h1>
				{<LoginButton />}
				{<SignUpButton />}
			</div>
		</>
	);
}
