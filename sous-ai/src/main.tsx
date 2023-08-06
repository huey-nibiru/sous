import React from "react";
import ReactDOM from "react-dom/client";
import LoginPage from "./pages/Login.tsx";
import SignUpPage from "./pages/Register.tsx";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App.tsx";

import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
	<React.StrictMode>
		<Router>
			<App />
		</Router>
	</React.StrictMode>
);
