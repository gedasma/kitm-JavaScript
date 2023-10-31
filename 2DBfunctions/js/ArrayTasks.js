// let user = prompt("ivesk vartotojo varda: ")
// console.log(user)

/*
sukurti sveciu saraso aplikacija 
paleidus programa isoka langas ir paklausia kiek sveciu bus vakarelyje
ivedus skaiciu rodomas kitas langas kuriame turime ivesti svecio varda
sis langas kartojamas tiek kartu kiek reikia pakveisti sveciu
pabaigus duomenu ivedima isvedamas sveciu sarasas
BONUS: sukurti masyva blacklist jeigu svecias yra blackliste i galini sarasa jo netraukia
*/

let guestList = [];
let blackList = ['Tadas', 'Andrius'];

let guestCount = prompt("Iveskite sveciu skaiciu: ");


for(i=0;i<guestCount;i++)
{
    let guestInput = prompt("Iveskite svecio varda: ");
    if(!blackList.includes(guestInput))
    {
        guestList.push(guestInput);
    }
}

console.log("Sveciu sarasas:")

for( guest of guestList)
{
    console.log(`   ${guest}`);
}