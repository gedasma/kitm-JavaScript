let timeZoneModifier = 2 * 60 * 60 * 1000
export function weekNumberToWord(weekDay)
{
    let currentDate = new Date();
    if(weekDay == currentDate.getDay()){
        return "Today"
    }
    let daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    return daysOfWeek[weekDay]
}

export function conditionCodeToImage(conditionCode)
{
    let conditionImages = {
        'clear': 'sunny.png',
        'partly-cloudy': 'cloudyPartly.png',
        'variable-cloudiness': 'cloudySun.png',
        'cloudy-with-sunny-intervals': 'cloudySun.png',
        'cloudy': 'cloudy.png',
        'thunder': 'lightning.png',
        'isolated-thunderstorms': 'thunderStorm.png',
        'thunderstorms': 'thunderStorm.png',
        'light-rain': 'rainLight.png',
        'rain': 'rainHeavy.png',
        'heavy-rain': 'rainHeavy.png',
        'rain-showers': 'rainHeavy.png',
        'light-rain-at-times': 'rainLight.png',
        'rain-at-times': 'rainHeavy.png',
        'light-sleet': 'snowModerate.png',
        'sleet': 'snowModerate.png',
        'sleet-at-times': 'snowModerate.png',
        'sleet-showers': 'snowModerate.png',
        'freezing-rain': 'snowModerate.png',
        'hail': 'hail.png',
        'light-snow': 'snowModerate.png',
        'snow': 'snow.png',
        'heavy-snow': 'snow.png',
        'snow-showers': 'snow.png',
        'snow-at-times': 'snow.png',
        'light-snow-at-times': 'snow.png',
        'snowstorm': 'blizzard.png',
        'mist': 'fog.png',
        'fog': 'fog.png',
        'squall': 'blizzard.png',
        'null': 'image.png'
      };
    return "assets/" + conditionImages[conditionCode]
}

export function getCommonDayCoditionCode(cityApiResponse, weekDay)
{
    let stringOccourances = {}
    let timeStamps = cityApiResponse.forecastTimestamps
    
    for (let timeStamp = 0;timeStamps.length > timeStamp; timeStamp++)
    {
        if(ConvertDateToEET(timeStamps[timeStamp].forecastTimeUtc).getDay() == weekDay){
            stringOccourances[timeStamps[timeStamp].conditionCode] = (stringOccourances[timeStamps[timeStamp].conditionCode] || 0) + 1
        }
    }

    let mostCommonString = null;
    let mostOccourances = 0;

    for(let occourance in stringOccourances)
    {
        if(stringOccourances[occourance] > mostOccourances)
        {
            mostCommonString = occourance
            mostOccourances = stringOccourances[occourance]
        }
    }
    return mostCommonString
}

function ConvertDateToEET(dateString)
{
    let date = new Date(dateString)
    date.setHours(date.getHours() + 2);
    return date
}

export function averageTempInRange(cityApiResponse, weekDay, startTime, endTime) // inclusive times
{
    //if checking today returns current temp
    let currentDate = new Date();
    if(weekDay == currentDate.getDay()){
        return cityApiResponse.forecastTimestamps[0].airTemperature
    }

    let tempretureSum = 0
    let tempretureAmount = 0
    let timeStamps = cityApiResponse.forecastTimestamps
    
    for (let timeStamp = 0;timeStamps.length > timeStamp; timeStamp++)
    {
        if(ConvertDateToEET(timeStamps[timeStamp].forecastTimeUtc).getDay() == weekDay 
        && ConvertDateToEET(timeStamps[timeStamp].forecastTimeUtc).getHours() >= startTime
        && ConvertDateToEET(timeStamps[timeStamp].forecastTimeUtc).getHours() <= endTime)
        {
            tempretureSum += timeStamps[timeStamp].airTemperature
            tempretureAmount++
        }
    }
    return (tempretureSum / tempretureAmount).toFixed(1)
}