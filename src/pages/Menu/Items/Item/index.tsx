import styles from "./Item.module.scss";
import { Dish } from "types/Dish";
import DishTags from "components/DishTags";
import { useNavigate } from "react-router-dom";

export default function Items(props: Dish) {

	const { id, title, description, photo } = props;
	const navigate = useNavigate();

	return (
		<div className={styles.item} onClick={() => navigate(`/dish/${id}`)}>
			<div className={styles.item__image}>
				<img src={photo} alt={title} />
			</div>
			<div className={styles.item__description}>
				<div className={styles.item__title}>
					<h2>{title}</h2>
					<p>{description}</p>
				</div>
				<DishTags {...props}/>
			</div>
		</div>
	);
}
