let pagina = 1;
const itemNumber = 21;
let pokeCount = null;
let pokeList = [];
const paginatorBack = document.getElementsByClassName("paginator__back")[0];
const paginatorNext = document.getElementsByClassName("paginator__next")[0];
const pokeFilter = document.getElementsByClassName("searchbar")[0];

async function init() {
	const pokemon = await obtenerPokemon(pagina, itemNumber);
	obtenerDatos(pokemon.results);
	pokeList = await obtenerPokemon(1, pokeCount);
	checkPaginator();
}
init();

function checkPaginator() {
	const paginatorNumber =
		document.getElementsByClassName("paginator__pNumber")[0];
	paginatorNumber.textContent = "" + pagina;
	if (pagina == 1) {
		paginatorBack.disabled = true;
	} else if (pagina == Math.round(pokeCount / 21)) {
		paginatorNext.disabled = true;
	} else {
		paginatorBack.disabled = false;
		paginatorNext.disabled = false;
	}
}
async function obtenerPokemon(pag, lim) {
	try {
		const respuesta = await fetch(
			`https://pokeapi.co/api/v2/pokemon/?offset=${(pag - 1) * 21}&limit=${lim}`
		);

		if (!respuesta.ok) throw new Error("No se encontró el Pokémon");
		const pokemon = await respuesta.json();
		pokeCount = pokemon.count;
		return pokemon;
	} catch (error) {
		console.error("Error:", error.message);
	}
}

async function obtenerDatos(pokemon) {
	const pokeArray = [];

	for (const data of pokemon) {
		const response = await fetch(data.url);
		if (!response.ok) throw new Error("No se han podido obtener los pokemon");

		const pokeData = await response.json();
		let pokeEvo = null;
		const responseEvo = await fetch(pokeData.species.url);
		if (!responseEvo.ok) {
			throw new Error("No se han podido obtener las evoluciones");
		}
		pokeEvo = await responseEvo.json();
		const pokeinfo = {
			id: pokeData.order,
			url: pokeData.sprites.front_default,
			name: pokeData.name,
			types: pokeData.types.map((type) => type.type.name),
			evolvefrom: pokeEvo?.evolves_from_species?.name || null,
		};
		pokeArray.push(pokeinfo);
	}
	crearTarjetas(pokeArray);
}
function crearTarjetas(pokemon) {
	const grid = document.getElementsByClassName("pokecard__grid")[0];
	while (grid.hasChildNodes()) {
		grid.removeChild(grid.firstChild);
	}
	pokemon.forEach((poke) => {
		//#region itemsTarjeta
		const articulo = document.createElement("article");
		const header = document.createElement("header");
		const pokeimg = document.createElement("img");
		const pokeID = document.createElement("p");
		const footer = document.createElement("footer");
		const pokeName = document.createElement("h2");
		const pokeTypes = document.createElement("p");
		const pokeType1 = document.createElement("span");
		const pokeType2 = document.createElement("span");
		const pokeEvo = document.createElement("p");
		const pokeEvoStrong = document.createElement("strong");
		//#endregion
		articulo.append(header, footer);
		articulo.classList.add("pokecard", "pokecard__item");
		header.append(pokeimg, pokeID);
		pokeID.classList.add("pokeID");
		footer.append(pokeName, pokeTypes, pokeEvo);
		pokeTypes.append(pokeType1);
		pokeTypes.classList.add("poketypes");

		if (poke.evolvefrom === null) {
			pokeEvo.classList.add("blankspace");
		} else {
			pokeEvo.classList.add("evolution");
			pokeEvo.textContent = "Evoluciona de:";
			pokeEvo.append(document.createElement("br"));
			pokeEvoStrong.textContent = poke.evolvefrom;
		}
		if (poke.types.length > 1) {
			pokeTypes.append(" ", pokeType2);
			pokeType2.textContent = poke.types[1];
		}
		pokeEvo.append(pokeEvoStrong);
		pokeName.textContent = poke.name;
		pokeID.textContent = `ID/${poke.id}`;
		pokeimg.src = poke.url;
		pokeType1.textContent = poke.types[0];
		grid.append(articulo);
	});
}
paginatorBack.addEventListener("click", async () => {
	pagina--;
	checkPaginator();
	const pokemon = await obtenerPokemon(pagina, itemNumber);
	obtenerDatos(pokemon.results);
});
paginatorNext.addEventListener("click", async () => {
	pagina++;
	checkPaginator();
	const pokemon = await obtenerPokemon(pagina, itemNumber);
	obtenerDatos(pokemon.results);
});

pokeFilter.addEventListener("input", async () => {
	const filteredList = pokeList.results
		.filter((p) =>
			p.name.toLowerCase().includes(pokeFilter.value.trim().toLowerCase())
		)
		.slice(0, 21);
	if (filteredList.length < 1) {
		const pokemon = await obtenerPokemon(pagina, itemNumber);
		obtenerDatos(pokemon.results);
	} else {
		obtenerDatos(filteredList);
	}
});
