console.log("************** DELIVERABLE 01 *********************");

//1. Array operations
//Head
//Implementa una función head (inmutable), tal que, dado un array como entrada extraiga y devuelva su primer elemento. Utiliza destructuring.

let arr1 = ["en","un","lugar","de","la","mancha"];
let arr2 = ["de","cuyo","nombre","no","quiero","acordarme"];
let arr3 = ["no","ha","mucho","tiempo","que","vivía"];
let arr4 = ["un", "hidalgo"]

const head = (arr) => {

     const [first] = arr;
     return first;
};

console.log(head(arr1));



//Tail
//Implementa una función tail (inmutable), tal que, dado un array como entrada devuelta todos menos el primer elemento. Utiliza rest operator.

const tail = (arr) => {

    const [first, ...rest] = arr;
    return rest;
};

console.log(tail(arr1));


//Init
//Implementa una función init (inmutable), tal que, dado un array como entrada devuelva todos los elementos menos el último. Utiliza los métodos que ofrece Array.prototype.

const init = (arr) => {

    return arr.filter(function(element, index){  return index < arr.length -1} );
};

 console.log(init(arr1));
  

//Last
//Implementa una función last (inmutable), tal que, dado un array como entrada devuelva el último elemento.

const last = (arr) => {
    
    return arr[arr.length -1]; 
};

console.log(last(arr1));

//2. Concat
//Implementa una función concat (inmutable) tal que, dados 2 arrays como entrada, devuelva la concatenación de ambos. Utiliza rest / spread operators.

const concat = (a, b) => {

    return new Array(a,b).flat();

};

console.log(concat(arr1,arr2));

//Opcional
//Implementa una versión del ejercicio anterior donde se acepten múltiples arrays de entrada (más de 2).

const concatMult = (a, b, ...rest) => {
  
    // console.log(rest.length);
    
    // if(rest.length === 0 ){
    //     return new Array(a, b).flat();
    // }

    // const [c, ...d] = rest;
    // return concatMult(concatMult(a, b) , d).flat();

};

console.log(concatMult(arr1, arr2, arr3, arr4));


console.log(arr1); //¿inmutable?