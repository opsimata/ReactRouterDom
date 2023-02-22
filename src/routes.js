import Navbar from "components/Navbar";
import Menu from "pages/Menu";
import Start from "pages/Start";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import styles from "./Routes.module.scss";

export default function AppRouter() {
	return (
		<main>
			<Router>
				<Navbar />
				<header className={styles.header}>
					<div className={styles.header__text}>A casa do código e da massa</div>
				</header>
				<Routes>
					<Route path="/" element={<Start />} />
					<Route path="/menu" element={<Menu />} />
				</Routes>
			</Router>
		</main>
	);
}
