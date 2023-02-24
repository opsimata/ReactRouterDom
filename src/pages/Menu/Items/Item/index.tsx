import styles from "./Item.module.scss";
import menu from "data/menu.json";
import classNames from "classnames";
import { Dish } from "types/Dish";

export default function Items(props: Dish) {
	const { title, description, category, size, serving, price, photo } = props;
	return (
		<div className={styles.item}>
			<div className={styles.item__image}>
				<img src={photo} alt={title} />
			</div>
			<div className={styles.item__description}>
				<div className={styles.item__title}>
					<h2>{title}</h2>
					<p>{description}</p>
				</div>
				<div className={styles.item__tags}>
					<div 
						className={classNames({
							[styles.item__type]: true,
							[styles[`item__type__${category.label.toLowerCase()}`]]:true
						})}
					>
						{category.label}
					</div>
					<div className={styles.item__portion}>{size} g</div>
					<div className={styles.item__qttpeople}>Serve {serving} {serving === 1 ? "pessoa" : "pessoas"}</div>
					<div className={styles.item__price}>R$ {price.toFixed(2)}</div>
				</div>
			</div>
		</div>
	);
}
