let userList = ['Ieva', 'Kristina', 'Jonas', 'Karolis']

const userOnline = true;

localStorage.setItem("user", userOnline) //padedu duomenis i saugykla

user = localStorage.getItem("user") //pasiimu is saugyklos

console.log(user) // isvedu


localStorage.setItem("users", userList) //padedu masyva

users = localStorage.getItem("users") // grazoma stringa, ne masyvo tipo obijekta

console.log(users)
// viska ka atiduoda localStorage yra tik stringas

console.log(users.split(',')) // reikia splitint

let item ={
    id:123,
    title:'CPU',
    price:1234.2
}


//obijektus reikia versi i stringus kad nepamesti strukturos
localStorage.setItem('item', JSON.stringify(item)) 
console.log(JSON.parse(localStorage.getItem('item')))


//galima istrinti
localStorage.removeItem("user")
//galima instrinti viska is storage
localStorage.clear()