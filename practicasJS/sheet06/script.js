let pagina = 1;
let pokeCount = null;
const paginatorBack = document.getElementsByClassName("paginator__back")[0];
const paginatorNext = document.getElementsByClassName("paginator__next")[0];

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
async function obtenerPokemon() {
	try {
		const respuesta = await fetch(
			`https://pokeapi.co/api/v2/pokemon/?offset=${(pagina - 1) * 21}&limit=21`
		);

		if (!respuesta.ok) throw new Error("No se encontró el Pokémon");
		const pokemon = await respuesta.json();
		pokeCount = pokemon.count;
		obtenerDatos(pokemon);
	} catch (error) {
		console.error("Error:", error.message);
	}
}
async function obtenerDatos(pokemon) {
	const pokeArray = [];

	for (const data of pokemon.results) {
		const response = await fetch(data.url);
		if (!response.ok) throw new Error("No se han podido obtener los pokemon");

		const pokeData = await response.json();
		let pokeEvo = null;

		if (pokeData.id < 10000) {
			const responseEvo = await fetch(
				`https://pokeapi.co/api/v2/pokemon-species/${pokeData.id}`
			);
			if (!responseEvo.ok) {
				console.log(pokedata);
				throw new Error("No se han podido obtener las evoluciones");
			}
			pokeEvo = await responseEvo.json();
		}
		const pokeinfo = {
			id: pokeData.id,
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
		console.log(grid.hasChildNodes())
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

obtenerPokemon();
checkPaginator();

paginatorBack.addEventListener("click", () => {
	pagina--;
	checkPaginator();
	obtenerPokemon();
});
paginatorNext.addEventListener("click", () => {
	pagina++;
	checkPaginator();
	obtenerPokemon();
});
