const procesar = (lista, transformador) =>{
    let returnArray = [];
    lista.forEach(element => {
        returnArray.push(transformador(element,lista.indexOf(element)))
    });
	return returnArray ;
}

const aMayusculas = v=>v.toUpperCase();
const etiquetaIndice =(v, i) => `#${i}:${v}`;

const base = ['x','y'];
const t1 = procesar(base, etiquetaIndice);
console.log(t1.join(',')); // A,B
console.log(base.join(',')); // a,b (inmutable)
