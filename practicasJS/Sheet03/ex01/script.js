const a = [3,1,2];
const b = a.slice(0,1);// b = [3], a = [3,2,1] 
const c = b.toReversed();//c = [3], b = [3] 
const d = a.with(0,99);//d = [99,2,1], a=[3,2,1]
//ninguno modifica la variable origiinal, por lo tanto todos son inmutables

