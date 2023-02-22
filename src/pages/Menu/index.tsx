import styles from "./Menu.module.scss";
import Finder from "./Finder";
import { useState } from "react";
import Filters from "./Filters";
import Sorter from "./Sorter";
import Items from "./Items";
import Navbar from "components/Navbar";

export default function Menu() {
	const [find, setFinder] = useState("");
	const [filter, setFilter] = useState<number | null>(null);
	const [sorter, setSorter] = useState("");

	return (
		<main>
			<header className={styles.header}>
				<div className={styles.header__text}>A casa do código e da massa</div>
			</header>
			<section className={styles.carte}>
				<h3 className={styles.carte__title}>Cardápio</h3>
				<Finder find={find} setFinder={setFinder} />
				<div className={styles.carte__filters}>
					<Filters filter={filter} setFilter={setFilter} />
					<Sorter sorter={sorter} setSorter={setSorter} />
				</div>
				<Items find={find} filter={filter} sorter={sorter}/>
			</section>
		</main>
	);
}