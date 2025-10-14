function formatearA(nombre, apellido) {
	if (nombre != null && apellido != null) {
		return apellido + "," + nombre;
	} else {
		return TypeError;
	}
}
const formatearB = function (nombre, apellido) {
	if (nombre != null && apellido != null) {
		return apellido + "," + nombre;
	} else {
		return TypeError;
	}
};

const formatearC = (nombre, apellido) => {
	if (nombre != null && apellido != null) {
		return apellido + "," + nombre;
	} else {
		return TypeError;
	}
};

console.log(formatearA("Ana", "López")); // "López, Ana"
console.log(formatearB("Luis", "Pérez")); // "Pérez, Luis"
console.log(formatearC("Érika", "Suárez")); // "Suárez, Érika"
try { formatearA('', 'X'); } catch(e){ console.log(e instanceof TypeError); } 