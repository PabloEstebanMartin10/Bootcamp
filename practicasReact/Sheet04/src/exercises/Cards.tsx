function Cards({
  spriteURL,
  id,
  name,
  types,
  hasEvo,
  evolvesFrom,
}: {
  spriteURL?: string;
  id: string;
  name: string;
  types: [];
  hasEvo: boolean;
  evolvesFrom?: string;
}) {
  return (
    <>
      <article className="shadow-sm shadow-[rgb(201,198,13)] bg-white rounded-sm">
        <header className="rounded-t-sm bg-[rgb(var(--color-grayBG))] flex flex-col justify-center bg">
          <img
            className="aspect-square w-30 my-0 mx-auto"
            src={
              spriteURL ||
              "https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Pok%C3%A9_Ball_icon.svg/500px-Pok%C3%A9_Ball_icon.svg.png"
            } 
            alt={name}
          />
          <p className="m-0 w-max bg-[rgb(var(--color-lightgrayBG))] px-2">
            id/{id}
          </p>
        </header>
        <footer className="max-h-300px">
          <h2 className="m-1 pt-1 px-4 capitalize text-xl font-bold">{name}</h2>
          <p className="m-1 px-4 pb-2 text-[rgb(var(--color-maroon))] ">
            {types.map((type) => (
              <span
                className=" border-solid border rounded-md mr-2 px-1"
                key={type}
              >
                {type}
              </span>
            ))}
          </p>
          <p
            className={
              hasEvo
                ? "pokecard pokecard__evolution ml-4 pl-1 text-[rgb(var(--color-maroon))] border-l-3"
                : "ml-1 px-4 pb-12 text-[rgb(var(--color-maroon))]"
            }
          >
            {hasEvo && "Evolves from "}
            <br />
            <strong className="text-xl">{hasEvo && evolvesFrom}</strong>
          </p>
        </footer>
      </article>
    </>
  );
}
export default Cards;
