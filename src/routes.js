import Navbar from "components/Navbar";
import TemplatePage from "components/TemplatePage";
import Menu from "pages/Menu";
import Start from "pages/Start";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export default function AppRouter() {
	return (
		<main>
			<Router>
				<Navbar />
				<Routes>
					<Route path="/" element={<TemplatePage />}>
						<Route index element={<Start />} />
						<Route path="menu" element={<Menu />} />
					</Route>

				</Routes>
			</Router>
		</main>
	);
}
