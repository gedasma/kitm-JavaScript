const books={
    Grozines:[
        {
            isbn: "9786098254037",
            releaseYear: 2019,
            name: "Atominiai įpročiai",
            pageAmount: 320
        },
        {
            isbn: "9786090153048",
            releaseYear: 2022,
            name: "Noriu į mokyklą",
            pageAmount: 64
        },
        {
            isbn: "9786090153987",
            releaseYear: 2023,
            name: "Mėlynas kraujas",
            pageAmount: 512
        },
        {
            isbn: "9786090153758",
            releaseYear: 2023,
            name: "Haris Poteris. Burtininkų almanachas",
            pageAmount: 208
        }
    ],
    Fantastines:[
        {
            isbn: "9786090152355",
            releaseYear: 2022,
            name: "Aštuntas gyvenimas (Brilkai)",
            pageAmount: 960
        },
        {
            isbn: "9786090155370",
            releaseYear: 2023,
            name: "Meno istorija",
            pageAmount: 688
        },
        {
            isbn: "9786090156643",
            releaseYear: 2023,
            name: "Žuvis vandenyje",
            pageAmount: 240
        },
        {
            isbn: "9786090157428",
            releaseYear: 2023,
            name: "Gliukozės revoliucija",
            pageAmount: 328
        },
        {
            isbn: "9786090156742",
            releaseYear: 2023,
            name: "Nugalėtojai",
            pageAmount: 640
        },
        {
            isbn: "9786090132067",
            releaseYear: 2018,
            name: "Vėtrų kalnas",
            pageAmount: 376
        }
    ],
    Edukacines:[
        {
            isbn: "9786090154366",
            releaseYear: 2023,
            name: "Karo nuotaka",
            pageAmount: 288
        },
        {
            isbn: "9786090154663",
            releaseYear: 2023,
            name: "Haris Poteris ir Ugnies taurė",
            pageAmount: 464
        }
    ]
}

for(category in books){
    // console.log(`${category} (${books[category].length} knygu)`)
    // console.log(":")
    for(book in books[category])
    {
        // PrintBook(books[category][book])
    }
}

CreateAcordionItem("headeris", 1)

function PrintBook(book)
{
    console.log(` ISBN: ${book.isbn}`)
    console.log(BookReleaseYearMessage(book.releaseYear))
    console.log(` Pavadinimas: ${book.name}`)
    console.log(` Puslapiu skaicius: ${book.pageAmount}`)
    console.log()
}

function BookReleaseYearMessage(releaseYear)
{
    releaseYearMessage = ` Leidimo metai: ${releaseYear}`
    if(releaseYear == new Date().getFullYear())
    {
        releaseYearMessage += " (nauja knyga)"
    }
    return releaseYearMessage
}

function CreateAcordionItem(headerText, itemNumber){
    let item = document.createElement("div")
    item.classList.add("accordion-item")

    let header = document.createElement("h2")
    header.classList.add("accordion-header")

    let button = document.createElement("button")
    button.classList.add("accordion-button")
    button.type = "button"
    button.setAttribute("data-bs-toggle", "collapse")
    button.setAttribute("data-bs-target",`#collapse${itemNumber}`)
    button.setAttribute("aria-expanded","true")
    button.setAttribute("aria-controls",`collapse${itemNumber}`)
    button.textContent = headerText

    header.appendChild(button)

    let content = document.createElement("div")
    content.id = `collapse${itemNumber}`
    content.classList.add("accordion-collapse", "collapse")
    content.setAttribute("data-bs-parent", "#accordionExample")

    let contentBody = document.createElement("div")
    contentBody.classList.add("accordion-body")
    contentBody.textContent = "test"
    
    content.appendChild(contentBody)
    
    item.appendChild(header)
    item.appendChild(content)

    document.querySelector('.accordion').appendChild(item)
}
