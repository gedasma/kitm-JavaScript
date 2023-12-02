const dataFetchService = (city)=>{
    return fetch(`https://api.meteo.lt/v1/places/${city}/forecasts/long-term`)
    .then(Response=>Response.json())
}

export default dataFetchService