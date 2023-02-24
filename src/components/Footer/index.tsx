/* eslint-disable indent */
import styles from "./Footer.module.scss";
import { ReactComponent as Logo } from "assets/img/logo.svg";

export default function Footer() {
	return(
		<footer className={styles.footer}>
            <Logo />
		</footer>
	);
}