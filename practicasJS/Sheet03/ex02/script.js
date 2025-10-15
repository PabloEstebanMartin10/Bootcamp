const stableNumericSort = (arr) => {
	return arr.toSorted((a,b)=>a-b);
};

const a = [72,82,1,32,5]
console.log(stableNumericSort(a));
