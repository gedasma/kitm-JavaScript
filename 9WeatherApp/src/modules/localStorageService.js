let localStorageItemName = 'WeatherApp'

export function saveToLocalStorage(cities)
{
    localStorage.setItem(localStorageItemName, JSON.stringify(Array.from(cities))) 
}

export function getLocalStorage()
{
    let storage = new Set(JSON.parse(localStorage.getItem(localStorageItemName)))
    if(storage != null){
        return storage
    }
    else{
        return new Set()
    }
}

export function addCityToLocalStorage(city)
{
    let cities = getLocalStorage();
    let doesSetHave = cities.has(city);
    cities.add(city);
    saveToLocalStorage(cities);
    return doesSetHave
}