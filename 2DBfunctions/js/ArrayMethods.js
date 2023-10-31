let names = ["jonas", "andrius", "ieva", "karolis"]; //mastyvas

names = names.join('-') //mastyvas tampa eilute

names = names.split('-') // eilute suskaldoma i masyva

names.push("giedrius") // idedamas elementas i masyvo gala

names.pop() // isemamas elemntas is masyvo galo

names.unshift("Julius") // idedamas elementas i masyvo prieki

names.shift() //isemamas elemntas is masyvo priekio

names.splice(2, 0, "Gintaras") //ideda elemnta i tam tikra pozicija masyve. Argumentai: kuri vieta, kiek istrinti(0, 1), kintamasis

console.log(names)

