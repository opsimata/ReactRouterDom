import styles from "./Dish.module.scss";
import { useParams, useNavigate } from "react-router-dom";
import classNames from "classnames";
import menu from "data/menu.json";

export default function Dish() {

	const { id } = useParams();
	const dish = menu.find(item => item.id === Number(id));
	const navigate = useNavigate();

	if (!dish) {
		return "Prato não encontrado";
	}

	return(
		<>
			<button className={styles.return} onClick={() => navigate(-1)}>
				{"< Voltar"}
			</button>
			<section className={styles.container}>
				<h1 className={styles.titçe}>
					{dish.title}
				</h1>
				<div className={styles.image}>
					<img src={dish.photo} alt="dish.title" />
				</div>
				<div className={styles.content}>
					<p className={styles.content__description}>
						{dish.description}
					</p>
					<div className={styles.tags}>
						<div className={classNames({
							[styles.tags__type]: true,
							[styles[`tags__type__${dish.category.label.toLowerCase()}`]]: true,
						})}>
							{dish.category.label}
						</div>
						<div className={styles.tags__portion}>
							{dish.size} g
						</div>
						<div className={styles.tags__qttpeople}>
							Serve {dish.serving} {dish.serving === 1 ? "pessoa" : "pessoas"}
						</div>
						<div className={styles.tags__price}>
							R$ {dish.price.toFixed(2)}
						</div>
					</div>
				</div>
			</section>
		</>
	);
}