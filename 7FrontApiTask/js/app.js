fetch("https://strangerthings-quotes.vercel.app/api/quotes/50")
        .then(response=>data=response.json())
        .then((data)=>{
            if(data[0].quote)
            {
                for(let index = 0; index < data.length ; index++)
                {
                    generateQuoteCard(data[index].quote, data[index].author, index)
                }
            }
            else{
                console.log(data)
                alert(`api call: failed with error ${data.Error}:`)
            }
        }) 
        .catch(error => {
            alert('Fetch error:' + error)
          })

function generateQuoteCard(quoteText, authorText, index){
    card = generateQuoteCardContent(quoteText, authorText)
    indicator = generateQuoteCarouselIndicator(index)

    var carouselIndicators = document.querySelector(".quoteContainer > .carousel-indicators")
    var cardsContainer = document.querySelector(".quoteContainer > .carousel-inner")
    if(index == 0)
    {
        indicator.setAttribute("class", "active")
        carouselIndicators.setAttribute("aria-current", "true")
        card.classList.add("active")
    }
    carouselIndicators.appendChild(indicator)
    cardsContainer.appendChild(card)
}

function generateQuoteCardContent(quoteText, authorText){
    var cardClass = "quoteContainer__card"
    var baseCard = document.querySelector("." + cardClass + "--base")
    var card = baseCard.cloneNode(true)
    
    card.querySelector("." + cardClass + "__content > p").textContent = quoteText
    card.querySelector("." + cardClass + "__content > h5").textContent = "- " + authorText

    card.classList.remove(cardClass + "--base")
    card.classList.add(cardClass)
    card.classList.add("carousel-item")

    return card
}
function generateQuoteCarouselIndicator(index){
    var indicator = document.createElement("button")
    indicator.setAttribute("type", "button")
    indicator.setAttribute("data-bs-target", "#carouselExampleIndicators")
    indicator.setAttribute("data-bs-target", "#carouselExampleIndicators")
    indicator.setAttribute("data-bs-slide-to", index)
    indicator.setAttribute("aria-label", index + 1)
    return indicator
}