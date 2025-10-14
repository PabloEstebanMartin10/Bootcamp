const contarLlamadas = () => {
	let n = 0;
	const f = (x) => {
		n++;
		return x * x;
	};
	return {
		f,
		get llamadas() {
			return n;
		},
	};
};
memorizar = (f) => {
	let cache = [];
	json = JSON.stringify(f);
	if (cache.includesjson) {
        
	}
};

const { f, llamadas } = contarLlamadas();
const mf = memorizar(f);
memorizar(5);
memorizar(5);
console.log(llamadas); // 1
