import menu from "data/menu.json";
import styles from "./Start.module.scss";
import stylesTheme from "../../styles/Theme.module.scss";
import nossaCasa from "assets/img/nossa_casa.png";
import { useNavigate } from "react-router-dom";
import { Dish } from "types/Dish";

export default function Start() {

	let recommendedDishes = [...menu];

	const navigate = useNavigate();

	recommendedDishes = recommendedDishes.sort(() => 0.5 - Math.random()).splice(0,3);

	function RedirectSeeMore(dish: Dish) {
		navigate(`/dish/${dish.id}`, {state: { dish }, replace: true});
	}

	return (
		<section>

			<h3 className={stylesTheme.title}>
				Recomendações do dia
			</h3>

			<div className={styles.recommendations}>
				{recommendedDishes.map( item => (
					<div key={item.id} className={styles.recommended}>
						<div className={styles.recommended__image}>
							<img src={item.photo} alt={item.title}/>
						</div>
						<button
							className={styles.recommended__button}
							onClick={() => RedirectSeeMore(item)}
						>
							Ver mais
						</button>
					</div>
				))}
			</div>

			<h3 className={stylesTheme.title}>
				Nossa casa
			</h3>

			<div className={styles.establishment}>
				<img src={nossaCasa} alt="casa do Aluroni" />
				<div className={styles.establishment__address}>
					Rua Vergueiro, 3185 <br /><br /> Vila Mariana - SP
				</div>
			</div>

		</section>
	);
}
