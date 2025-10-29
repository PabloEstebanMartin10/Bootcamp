function Cards({
	spriteURL,
	id,
	name,
	types,
	hasEvo,
	evolvesFrom,
}: {
	spriteURL: string;
	id: string;
	name: string;
	types: [];
	hasEvo: boolean;
	evolvesFrom: string;
}) {
	return (
		<>
			<article className="pokecard pokecard__item">
				<header>
					<img
						className="pokecard pokecard__sprite"
						src={spriteURL}
						alt={name}
					/>
					<p className="pokecard pokecard__id">id/{id}</p>
				</header>
				<footer>
					<h2 className="pokecard pokecard__name">{name}</h2>
					<p className="pokecard pokecard__name">
						{types.map((type) => (
							<span>{type}</span>
						))}
					</p>
					<p className={hasEvo ? "pokecard pokecard__evolution" : "blankspace"}>
						{hasEvo && "Evolves from"}
						<strong>{hasEvo && evolvesFrom}</strong>
					</p>
				</footer>
			</article>
		</>
	);
}
export default Cards;
