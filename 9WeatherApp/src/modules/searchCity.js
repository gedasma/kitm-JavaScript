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
                addCityToLocalStorage(city)
                createCityCard(searchResponse)
            }
            else if(searchResponse.error.code = 404)
            {
                console.log("data fetch failed!")
                document.querySelector('.weatherForm .city').placeholder = "Tokie miesto nėra!"
            }
            
        })
}

export default searchCity