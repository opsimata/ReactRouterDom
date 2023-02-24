import Footer from "components/Footer";
import Navbar from "components/Navbar";
import TemplatePage from "components/TemplatePage";
import About from "pages/About";
import Menu from "pages/Menu";
import NotFound from "pages/NotFound";
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
						<Route path="about" element={<About />} />
					</Route>
					<Route path="*" element={<NotFound />} />
				</Routes>
				<Footer />
			</Router>
		</main>
	);
}
