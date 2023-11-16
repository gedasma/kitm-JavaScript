// form submit
form = document.querySelector('form')
form.addEventListener('submit', (e)=>{
    e.preventDefault();
    let title = document.querySelector('input').value
    apiCall = `https://www.omdbapi.com/?t=${title}&apikey=18c1a865`
    
    fetch(apiCall)
        .then(response=>data=response.json())
        .then((data)=>{
            if(data.Title)
            {
                console.log(data)
                document.querySelector('table').classList.add('enableDisplay')
                document.querySelector('.title').textContent = data.Title;
                document.querySelector('.time').textContent = data.Runtime;
                document.querySelector('.director').textContent = data.Director;
                document.querySelector('.year').textContent = data.Year;
                document.querySelector('.imdb').textContent = data.imdbRating;
                document.querySelector('.other').textContent = data.Plot;
                document.querySelector('.poster > img').setAttribute('src', data.Poster)
            }
            else{
                console.log(data)
                alert(`api call: ${apiCall} failed with error ${data.Error}:`)
            }
        }) 
            
})
//autocomplete
fillDatalist("https://api.meteo.lt/v1/places")

function fillDatalist(apiCall)
{
    return fetch(apiCall)
        .then( function(response){
            if(!response.ok){
                throw new Error("failed to get response: " + response.status)
            }
            else{
                return response.json()
            }
        })
        .then(function(data){
            let datalist = document.querySelector('.places > datalist')
            for(let index = 0; index < data.length; index++){
                option = createOption(data[index].name)
                datalist.appendChild(option)
            }
        })
}

function createOption(location)
{
    let option = document.createElement("option")
    option.setAttribute('value', location)
    return option
}