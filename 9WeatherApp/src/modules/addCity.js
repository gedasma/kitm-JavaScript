import {getLocalStorage} from './localStorageService';
import searchCity from "./searchCity";

const addCity = () =>{
    document.querySelector('.weatherForm').addEventListener('submit', (e)=>{
        e.preventDefault()
        let textField = document.querySelector('.weatherForm .city')
        const city = textField.value.toLowerCase();
        textField.value = ""
        let localStorage = getLocalStorage()
        if(!localStorage.has(city)){
            searchCity(city)
            textField.placeholder = "Miestas priėtas"
        }
        else{
            textField.placeholder = "Toks miestas jau pridėtas!"
        }
    })
}

export default addCity