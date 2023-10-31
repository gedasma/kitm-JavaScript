console.log("for ciklas")

let items = ['phone', 'pencil', 'box', 'table']

let user = {
    id:1,
    name: "jonas",
    email: "jonux@gmail.com",
    role: "admin"
}

for(let i=0; i < items.length; i++)
{
    console.log(items[i])
}

console.log("for ciklas2")

for(let item in items){
    console.log(items[item])
}

console.log("for of ciklas")

for(let item of items){
    console.log(item)
}


for(let property in user){
    console.log(`${property}: ${user[property]}`)
}


