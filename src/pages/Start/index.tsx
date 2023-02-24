import menu from "data/menu.json";
import styles from "./Start.module.scss";
import stylesTheme from "../../styles/Theme.module.scss";

export default function Start() {
	let recommendedDishes = [...menu];
	recommendedDishes = recommendedDishes.sort(() => 0.5 - Math.random()).splice(0,3);
	return (
		<section>
			<h3 className={stylesTheme.title}>Recomendações do dia</h3>
			<div className={styles.recommended}>
				{recommendedDishes.map( item => (
					<div className={styles.recommended} key={item.id}>
						<div className="styles.recommended__image">
							<img src={item.photo} alt={item.title}/>
						</div>
						<button className={styles.recommended__button}>
							Ver mais
						</button>
					</div>
				))}
			</div>
		</section>
	);
}
