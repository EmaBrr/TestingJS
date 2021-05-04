// let a = 44;

// console.log(a);

// let array_test = [
//     'Ema',
//     'Šarūnas', 
//     'Aušra', 
//     'Vytautas'
// ];

// console.log (array_test);

// console.log (array_test.length);

// function multiplyNumbers (pirmas, antras, trecias) {
//     let result = pirmas * antras * trecias;
//     return console.log(result)
// };

// multiplyNumbers(1,252,3);

// function funcIf (x) {
//     if (Number.isInteger(x)) {
//         let result = 'this is a number'
//         return console.log (result)
//     }
//     let result = 'this is not a number'
//     return console.log (result)
// }

// funcIf(4)

function square (x) {
    if (Number.isInteger(x)) {
        let result = Math.pow(x,2)
        return console.log (result)
    }
    let result = 'Input is not a number.'
    return console.log (result)
}

function square1 (x) {
  return Number.isInteger(x) ? Math.pow(x,2) : 'Input is not a number.';
}

function square2 (x) {
    const  result = Number.isInteger(x) ? Math.pow(x,2) : 'Input is not a number.';
    return result;
  }

console.log(square2(5));

let newArray = [
    0, 
    125,
    2,
    9,
    15
]

function arraySq (z) {
    let a = new Array();
    for (i = 0, len = z.length; i < len; i++) 
        a.push(square1(z[i]));   
    return a;
}

console.log (arraySq(newArray))

function newArraySq (arr) {
    let finalArray = new Array();
    for (i = 0, len = arr.length; i < len; i++) {
        let a = new Array();
        a.push(arr[i]);
        a.push(square1(arr[i]));
        finalArray.push(a);
    }
    return finalArray;
}

console.log (newArraySq(newArray))

// function faktorialas(number) {
//     let result;
//     let a;
//     for (i = number; i > 1; i--) {
//         a = i-1;
//         result = number*a;
//     }
//     return result;
// }

// console.log(faktorialas(5))


function factorial(x){
    if(x===0) 
        return 1;
    return x * factorial(x - 1);
}

console.log(factorial(7))

function factorial1(x){
    if(x===2) 
        return 1;
    return x * factorial1(x - 1);
}

console.log(factorial1(7))