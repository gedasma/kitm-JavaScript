function sayHi(a){
    alert("Hi!")
    return a*2
}

// sayHi();
// console.log(sayHi(5))


//anonimine funkcija
const calc = function(...numbers){

    return numbers.reduce((prev, current) => prev*current)
}

console.log(calc(1,2,3,4,5))