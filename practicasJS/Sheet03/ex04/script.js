const mayoresMayusculos = (users) => {
	const mayores = users.filter((user) => user.age >= 18);
	const mayoresSort = Array.from(mayores).sort((a, b) => {
		if (a.name > b.name) {
			return 1;
		} else if (a.name < b.name) {
			return -1;
		} else {
			return 0;
		}
	});
	return mayoresSort.map((element) => {
		element.name.toUpperCase();
		return element;
	});
};

const users = [
	{ id: 2, name: "Luis", age: 17 },
	{ id: 3, name: "Zoe", age: 34 },
	{ id: 1, name: "Ana", age: 28 },
];
console.log(mayoresMayusculos(users));
