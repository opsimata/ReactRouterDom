import styles from "./Dish.module.scss";
import { useLocation } from "react-router-dom";

export default function Dish() {
	console.log(useLocation());
	return(
		<div>
            Dish
		</div>
	);
}