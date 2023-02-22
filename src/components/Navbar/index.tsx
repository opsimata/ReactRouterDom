import { ReactComponent as Logo } from "assets/img/logo.svg";
import styles from "./Navbar.module.scss";
import { Link } from "react-router-dom";

export default function Navbar() {
	const directions = [{
		label: "Home",
		to: "/"
	}, {
		label: "Menu",
		to: "/menu"
	}, {
		label: "About",
		to: "/about"
	}
	];
	return(
		<nav className={styles.navbar}>
			<Logo />
			<ul className={styles.navbar__list}>
				{directions.map((direction, index) => (
					<li key={index} className={styles.navbar__link}>
						<Link to={direction.to}>
							{direction.label}
						</Link>
					</li>
				))}
			</ul>
		</nav>
	);
}