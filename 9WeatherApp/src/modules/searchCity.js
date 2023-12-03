import dataFetchService from "./dataFetchService";
import {addCityToLocalStorage} from './localStorageService';
import {createCityCard} from './CityCardCreatorService';

const searchCity = (city) =>{
    let searchResponse;
    dataFetchService(city)
        .then(result => searchResponse = result)
        .then(()=>{
            console.log(searchResponse)
            
            if (searchResponse.hasOwnProperty('forecastTimestamps') && searchResponse.forecastTimestamps.length > 0)
            {
                addCityToLocalStorage(city.toLowerCase())
                createCityCard(searchResponse)
                // document.querySelector('.message').textContent = ""
                // document.querySelector('.result').value = searchResponse.data[0].post_code
            }
            else if(searchResponse.error.code = 404)
            {
                console.log("data fetch failed!")
                return searchResponse
                // document.querySelector('.result').value = ""
                // document.querySelector('.message').textContent = "tokio adreso nera!"
            }
            
        })
}

export default searchCity