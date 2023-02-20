import React from "react";
import ReactDOM from "react-dom/client";
import "normalize.css";
import "./index.css";
import Menu from "./pages/Menu";
import Start from "pages/Start/";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

const currentComponent = window.location.pathname === "/" ? <Start /> : <Menu />;

root.render(
	<React.StrictMode>
		{currentComponent}
	</React.StrictMode>
);