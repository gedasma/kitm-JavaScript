/*
mokomes
javascript
*/

//primityvus duomenu tipai
let firstName = "jonas" //string
var lastName = "jonaitis" //string
let itemPrice = 12.56
let userAge = 5
let userOnline = true

//inteligentiski duomeny tipai
let productCart = ['Computer', 'Phone', 'Pencil']
let product = {
    title: 'Apple Macbook Pro',
    price: 2352.63,
    location: 'Kaunas'
}

let products = [
    {
        title: 'Apple Macbook Pro',
        price: 2352.63,
        location: 'Kaunas'
    },
    {
        title: 'Pencil',
        price: 2352.63,
        location: 'Vilnius'
    },
    {
        title: 'Table',
        price: 2352.63,
        location: 'Klaipeda'
    }
]

console.log(typeof(firstName))
console.log(typeof(itemPrice))
console.log(typeof(userAge))
console.log(typeof(userOnline))

console.log(typeof(productCart))
console.log(typeof(product))
console.log(typeof(products))

console.log(productCart)

//console output
console.log(firstName + "vardas")
console.log(`Vartotojo pavarde yra ${lastName}`)


//konstatnta
const userRole = "admin"
console.log(`vartotojo role: ${userRole}`)

let higherNumber = 2
let smallerNumber = 1
if(higherNumber > smallerNumber){
    console.log(higherNumber)
    let testVariable = "testText"
}

console.log(testVariable)