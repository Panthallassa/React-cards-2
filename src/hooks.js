import { useState } from "react";
import { v1 as uuid } from "uuid";
import axios from "axios";

export function useFlip() {
	const [isFacingUp, setIsFacingUp] = useState(true);

	const flipCard = () => {
		setIsFacingUp((isUp) => !isUp);
	};

	return [isFacingUp, flipCard];
}

export function useAxios(url) {
	const [data, setData] = useState([]);

	const addData = async () => {
		try {
			const res = await axios.get(url);
			setData((data) => [
				...data,
				{ ...res.data, id: uuid() },
			]);
		} catch (e) {
			console.error("Error fetching data", e);
		}
	};

	return [data, addData];
}
