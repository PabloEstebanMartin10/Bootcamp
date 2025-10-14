function etiquetar(texto = "N/A", prefijo = `TS-${Date.now()}`) {
	return prefijo + ":" + texto ;
}
function sumatorio(base = 0, ...nums) {
	nums.forEach((Number) => {
		if (Number != null && typeof Number === "number") {
			base = base + Number;
		}
	});
    return base
}
function maximoDe(numeros){
    return Math.max(...numeros)
}

console.log(sumatorio(10, 1, 2, '3', 4))
console.log(maximoDe([1,9,3]));
console.log(/^TS-\d+:N\/A$/.test(etiquetar("N/A", `TS-${Date.now()}`))); // true