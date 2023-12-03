import {getLocalStorage} from './localStorageService';
import searchCity from "./searchCity";

const renderCitiesFromLocalStorage = () =>{
    let localStorage = getLocalStorage()
    localStorage.forEach(city => {
        searchCity(city)
    });
}

export default renderCitiesFromLocalStorage