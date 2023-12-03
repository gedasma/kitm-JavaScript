
import searchCity from "./searchCity";

const addCity = () =>{
    document.querySelector('form').addEventListener('submit', (e)=>{
        e.preventDefault()
        const city = document.querySelector('.city').value;
        searchCity(city)

    })
}

export default addCity