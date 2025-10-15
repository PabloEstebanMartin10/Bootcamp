const temporizador = {
	nombre: "",
	// iniciar(ms) {
	//     let s = ms*1000;
	// 	setTimeout(() => {
	// 		console.log(`Listo:${this.nombre}`);
	// 	}, s);
	// },
	iniciar: (ms) => {
		let s = ms * 1000;
		setTimeout(() => {
			console.log(`Listo:${nombre}`);
		}, s);
	},
};

const t = Object.create(temporizador);
t.nombre = "Tarea X";
t.iniciar(2);
