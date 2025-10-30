import { useEffect, useState } from "react";
import "./App.css";
import NavBar from "./exercises/Navbar";
import type { Pokemon } from "./exercises/data/pokemon";
import Cards from "./exercises/Cards";

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
    const pokePromises = pokenames.map((x) => fetch(x.url));
    const promises = await Promise.allSettled(pokePromises);
    const jsonPromises = promises
      .filter((x) => x.status === "fulfilled")
      .map((x) => x.value.json());
    const pokeInfo = await Promise.all(jsonPromises);

    const speciesURL = pokeInfo.map((x) => fetch(x.species.url));
    const speciesPromises = await Promise.allSettled(speciesURL);
    const jsonSpeciesPromises = speciesPromises
      .filter((x) => x.status === "fulfilled")
      .map((x) => x.value.json());
    const pokeSpeciesInfo = await Promise.all(jsonSpeciesPromises);

    const merged = pokeInfo.map((p) => {
      const s = pokeSpeciesInfo.find((s) => s.id === p.id);
      return {
        sprite: p.sprites.front_default,
        id: p.id,
        name: p.name,
        types: p.types.map((type) => type.type.name),
        hasEvo: !!s?.evolves_from_species,
        evolvesFrom: s?.evolves_from_species?.name,
      };
    });

    setPokeList(merged);
  }

  useEffect(() => {
    if (!pokenames.length) return;
    getPokeData();
  }, [pokenames]);
  useEffect(() => {
    // algo se hará por aqui
  }, [pokeList]);
  return (
    <>
      <NavBar>
        <input
          className="h-10 w-full border-0 bg-yellow-100 text-center shadow-xs shadow-[rgb(201,198,13)] hover:outline-0"
          type="text"
          value={searchStr}
          onChange={filterStrChanged}
        />
      </NavBar>
      <main className="mt-4 grid grid-cols-[repeat(auto-fill,minmax(200px,1fr))] gap-x-6 gap-y-4">
        {pokeList.length ? (
          pokeList.map((p) => (
            <Cards
              key={p.id}
              spriteURL={p.sprite}
              id={p.id}
              name={p.name}
              types={p.types}
              hasEvo={p.hasEvo}
              evolvesFrom={p.evolvesFrom}
            />
          ))
        ) : (
          <img
            style={{ minHeight: "600px", minWidth: "800px" }}
            src="src/assets/pokeball.gif"
            alt="pokeball"
          />
        )}
      </main>
      {/* pasar esto a componente */}
      <div className="triangle triangle--r"></div>
      <div className="triangle triangle--l"></div>
      <div className="circle circle--r"></div>
      <div className="circle circle--l"></div>
      {/*                     */}
    </>
  );
}

export default App;
