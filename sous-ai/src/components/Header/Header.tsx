import "./Header.css";
import LoginButton from "../Login/LoginButton";
import SignUpButton from "../SignUp/SignUpButton";

// Contains the header components of login and signup buttons
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
