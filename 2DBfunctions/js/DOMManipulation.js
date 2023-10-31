const article = document.getElementById("vip")

const adsArticle = document.getElementsByClassName("adsss")

const articles = document.getElementsByTagName("article")

console.log(articles)

//geresnis budas su query selectoriais

let queryArticle = document.querySelector("#vip")

queryArticle = document.querySelector("article")

// queryArticle = document.querySelectorAll("article")

console.log(queryArticle)

document.querySelector("article").style.backgroundColor='red'

document.querySelector("p").textContent = "<strong>Labai gera naujiena</strong>"
document.querySelector("p").innerHTML = "<strong>Labai gera naujiena</strong>"

for(let link of document.querySelectorAll('a')){
    link.href = "https://kitm.lt";
}

const ul = document.createElement('ul')
const li = document.createElement('li')

li.textContent = "Labai svarbus darbas"

document.querySelector('section').appendChild(ul)
document.querySelector('ul').appendChild(li)

/*
naudodami javascript sukurkite html lentele kuria sudaro 3 eulutes ir 10 stulpeliu
 */

const table = document.createElement("table");

document.querySelector('section').appendChild(table)
for(let rowIndex = 0; rowIndex < 3;rowIndex++)
{
    
    let row = document.createElement("tr")
    document.querySelector('section>table').appendChild(row);
    
    for(let columnIndex = 0; columnIndex < 10;columnIndex++)
    {
        let column = document.createElement("td")
        column.textContent = "| test"+ (rowIndex+1) + " " + (columnIndex+1) + "|";
        column.style("text-decoration:overline")
        document.querySelectorAll('section>table>tr')[rowIndex].appendChild(column)
    }
    
}
