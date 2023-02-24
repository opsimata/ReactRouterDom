import styles from "./NotFound.module.scss";
import { ReactComponent as NotFoundImage } from "assets/img/not_found.svg";
import classNames from "classnames";
import stylesTheme from "../../styles/Theme.module.scss";

export default function NotFound() {
	return(
		<div className={classNames({
			[styles.container]: true,
			[stylesTheme.container]: true,
		})}>
			<NotFoundImage />
		</div>
	);
}