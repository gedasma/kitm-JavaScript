const Books={
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

for(category in Books){
    console.log(`${category} (${Books[category].length} knygu)`)
    console.log(":")
    for(book in Books[category])
    {
        PrintBook(Books[category][book])
    }

}

function PrintBook(book)
{
    console.log(` ISBN: ${book.isbn}`)
    releaseYearMessage = ` Leidimo metai: ${book.releaseYear}`
    if(book.releaseYear == new Date().getFullYear())
    {
        releaseYearMessage += " (nauja knyga)"
    }
    console.log(releaseYearMessage)
    console.log(` Pavadinimas: ${book.name}`)
    console.log(` Puslapiu skaicius: ${book.pageAmount}`)
    console.log()
}