const flatAll = (arr)=>{
    const a = arr.flatMap((x)=>x);
    return a.flatMap((x)=>x);
}

const data = [1, [2, 3], [[4], 5]];
console.log(flatAll(data));