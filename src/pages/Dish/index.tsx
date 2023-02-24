import styles from "./Dish.module.scss";
import { useParams } from "react-router-dom";

export default function Dish() {
	console.log(useParams());
	return(
		<div>
            Dish
		</div>
	);
}