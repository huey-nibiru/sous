import React from "react";
//import "./ColorSplit.css"; // Import the CSS file with the styles
import loginClipart from "../assets/loginClipart.png";
import FormComponent from "./LoginForm";
/*
const HalfPageGrey: React.FC = () => {
	return (
		<div className="half-page-grey-container">
			<div className="grey-half">
				<div className="container">
					<div className="content">
						<div className="centered-content">
							<img
								src={loginClipart}
								alt="Centered Image"
								className="centered-image"
							/>
							<h1>Sous</h1>
							<p>All your meal plans, in one place.</p>
						</div>
					</div>
				</div>
			</div>
			<div className="white-half">
				<div className="container">
					<div className="content">
						<div className="centered-content">
							<div className="formContainer">
								<FormComponent />
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default HalfPageGrey;
*/


import "./Pagesplit.css"; // Import the CSS file with the styles


const SplitPage = () => {
  return (
    <div className="split-container">
      <div className="half grey-bg">
        <div className="centered-text">Centered Grey Text</div>
      </div>
      
	  <div className="half white-bg">
        <div className="centered-text">Centered White Text</div>
      </div>
    </div>
  );
};

export default SplitPage;