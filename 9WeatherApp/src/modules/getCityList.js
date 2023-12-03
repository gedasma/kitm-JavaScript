let apiCall = "https://api.meteo.lt/v1/places"

function getCityList()
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
            let uniqueSet = new Set();
            for(let index = 0; index < data.length; index++){
                if(!data[index].name.includes(' ') && !uniqueSet.has(data[index].name))
                {
                    uniqueSet.add(data[index].name)
                    let option = createOption(data[index].name)
                    datalist.appendChild(option)
                }
            }
        })
}

function createOption(location)
{
    let option = document.createElement("option")
    option.setAttribute('value', location)
    return option
}

export default getCityList