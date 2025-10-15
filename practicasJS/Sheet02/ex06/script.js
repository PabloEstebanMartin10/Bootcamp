function saludar(ciudad) {
	console.log(`Soy ${this.nombre} de ${ciudad}`);
}
const persona = { nombre: "Lucía" };
saludar.call(persona, "Madrid");
saludar.apply(persona, ["Sevilla"]);
const persona2 = {nombre: "Ada"}

