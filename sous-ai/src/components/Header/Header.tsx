import "./Header.css";
//import "./Banner.css";
import LoginButton from "../Login/LoginButton";
import SignUpButton from "../SignUp/SignUpButton";

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
