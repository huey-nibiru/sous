import { Link } from "react-router-dom";
/*
function Navbar() {
	return (
		<nav>
			<ul>
				<li>
					<Link to="/">Home</Link>
				</li>
				<li>
					<Link to="/register">Register</Link>
				</li>
				<li>
					<Link to="/login">Login</Link>
				</li>
			</ul>
		</nav>
	);
}

export default Navbar;
*/

// Sidebar.js
import React, { useState } from "react";
//import { Link } from "react-router-dom";

import './Sidebar.css'

const Sidebar = () => {
	const [activeTab, setActiveTab] = useState("home");

	const handleTabClick = (tabName) => {
		setActiveTab(tabName);
	};

	return (
		<div className="sidebar">
			<div className="sidebar-title">Navigation</div>
			<ul className="sidebar-list">
				<li
					className={`sidebar-item ${activeTab === "home" ? "active" : ""}`}
					onClick={() => handleTabClick("home")}
				>
					Home
				</li>
				<li
					className={`sidebar-item ${activeTab === "register" ? "active" : ""}`}
					onClick={() => handleTabClick("register")}
				>
					Register
				</li>
				<li
					className={`sidebar-item ${activeTab === "login" ? "active" : ""}`}
					onClick={() => handleTabClick("login")}
				>
					Login
				</li>
			</ul>
		</div>
	);
};

export default Sidebar;
