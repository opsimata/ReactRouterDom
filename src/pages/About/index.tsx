import styles from "./About.module.scss";
import stylesTheme from "../../styles/Theme.module.scss";
import place from "assets/img/about/casa.png";
import pasta1 from "assets/img/about/massa1.png";
import pasta2 from "assets/img/about/massa2.png";

const pastaImages = [pasta1, pasta2];

export default function About() {

	return(
		<section>

			<h3 className={stylesTheme.title}>Sobre</h3>
			<div className={styles.aboutUs}>
				<img src={place} alt="Casa Aluroni" />
				<div className={styles.aboutUs__text}>
					<p>Nós do Aluroni oferecemos a vocês, nossos queridos clientes, a Massa Italiana Caseira mais saborosa e sofisticada de São Paulo! Prezamos pelos ingredientes tradicionais da culinária Italiana, frescos e de excelente qualidade para que sua experiência seja ainda mais intensa!</p>
					<p>Também possuímos uma cardápio de carnes com muitas opções de acordo com o seu gosto!</p>
					<p>Para acompanhar as massas italianas, Aluroni possui uma reserva de vinhos especiais, que harmonizam perfeitamente com o seu parto, seja carne ou massa!</p>
				</div>
			</div>

			<div className={styles.images}>
				{pastaImages.map((image, index) => (
					<div key={index} className={styles.images__image}>
						<img src={image} alt="Pastas" />
					</div>
				))}
			</div>

		</section>

	);
}