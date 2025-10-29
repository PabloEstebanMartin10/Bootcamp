import { useEffect, useState } from "react";
import "./App.css";
import NavBar from "./exercises/Navbar";
import type { Pokemon } from "./exercises/pokemon";

interface PokeBasic {
	name: string;
	url: string;
}

function App() {
	const [pokenames, setPokenames] = useState<PokeBasic[]>([]);
	const [pokeList, setPokeList] = useState<Pokemon[]>([]);
	const [searchStr, setSearchStr] = useState("");
	const pokeApiURL = `https://pokeapi.co/api/v2/pokemon?offset=${0}&&limit=${21}`;
	function filterStrChanged(e: React.ChangeEvent<HTMLInputElement>) {
		setSearchStr(e.target.value);
	}
	async function fetchData(URL: string) {
		const response = await fetch(URL);
		if (!response.ok) throw new Error("Connection error");
		const data = await response.json();
		return data;
	}
	useEffect(() => {
		(async () => {
			const response = await fetchData(pokeApiURL);
			setPokenames(response.results);
		})();
	}, []);

	async function getPokeData() {
		const urls = pokenames.map((x) => fetch(x.url));
		const promises = await Promise.allSettled(urls);
		const jsonPromises = promises
			.filter((x) => x.status === "fulfilled")
			.map((x) => x.value.json());
		const pokeInfo = await Promise.all(jsonPromises);

		const speciesURL = pokeInfo.map((x) => x.species.url);
		const speciesPromises = await Promise.allSettled(speciesURL);
		const jsonSpeciesPromises = speciesPromises
			.filter((x) => x.status === "fulfilled")
			.map((x) => x.value.json());
		const pokeSpeciesInfo = await Promise.all(jsonSpeciesPromises);

		console.log(pokeInfo)
		console.log(pokeSpeciesInfo)
		const list = [];
		for (const element of pokeInfo) {
			const pokemon = { element };
		}
	}

	useEffect(() => {
		if (!pokenames.length) return;
		getPokeData();
	}, [pokenames]);

	return (
		<>
			{/* pasar esto a componente */}
			<div className="triangle triangle--r"></div>
			<div className="triangle triangle--l"></div>
			<div className="circle circle--r"></div>
			<div className="circle circle--l"></div>
			<div className="container"></div>
			{/*                     */}
			<NavBar>
				<input
					className="searchbar"
					type="text"
					value={searchStr}
					onChange={filterStrChanged}
				/>
			</NavBar>
			<main className="pokecard pokecard__grid"></main>
		</>
	);
}

export default App;
