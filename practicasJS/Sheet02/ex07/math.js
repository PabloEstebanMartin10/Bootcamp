export default function sumar(a, b) {
	return a + b;
}
export function areaCirculo(r) {
	return r * PI;
}
export function media(...nums) {
	let nElements = 0;
	let sum = 0;
	nums.forEach((num) => {
		if (num === Number) {
			nElements++;
			sum = sum + num;
		}
	});
	return sum / nElements;
}

const PI = 3.1416;
