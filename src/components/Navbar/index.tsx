import { ReactComponent as Logo } from "assets/img/logo.svg";
import styles from "./Navbar.module.scss";

export default function Navbar() {
	return(
		<nav className={styles.navbar}>
			<Logo />
		</nav>
	);
}