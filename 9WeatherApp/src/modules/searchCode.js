import dataFetchService from "./dataFetchService";

const searchCode = () =>{
    document.querySelector('form').addEventListener('submit', (e)=>{
        e.preventDefault()
        const city = document.querySelector('.city').value;
        let searchResponse;
        dataFetchService(city)
            .then(result => searchResponse = result)
            .then(()=>{
                console.log(searchResponse)
                
                if (searchResponse.hasOwnProperty('forecastTimestamps') && searchResponse.forecastTimestamps.length > 0)
                {
                    console.log("data fetch success!")
                    // document.querySelector('.message').textContent = ""
                    // document.querySelector('.result').value = searchResponse.data[0].post_code
                }
                else if(searchResponse.error.code = 404)
                {
                    console.log("data fetch failed!")
                    // document.querySelector('.result').value = ""
                    // document.querySelector('.message').textContent = "tokio adreso nera!"
                }
                
            })
    })
}

export default searchCode