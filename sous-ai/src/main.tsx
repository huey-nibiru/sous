import React from "react";
import ReactDOM from "react-dom/client";
import SignUpPage from "./pages/Register.tsx";
import LoginPage from "./pages/Login.tsx";

import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
	<React.StrictMode>
		<LoginPage />
	</React.StrictMode>
);
