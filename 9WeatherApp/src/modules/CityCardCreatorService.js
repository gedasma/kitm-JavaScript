import {weekNumberToWord, conditionCodeToImage, getCommonDayCoditionCode, convertDateToEET, averageTempInRange, get8TimeForWeekDay} from './valueResolver';
import {getLocalStorage, addCityToLocalStorage, saveToLocalStorage} from './localStorageService';

export const createCityCard = (cityApiResponse)=>{
  let cityCard = createCityCardBase(cityApiResponse.place.name)
  
  let weekDayHolder = cityCard.querySelector('.accordion')
  for (let i = 0; i <= 6; i++)
  {
    weekDayHolder.appendChild(createCityWeekDayRow(cityApiResponse, i))
  }
  removeButtonFunction(cityCard)
  document.querySelector(".background").appendChild(cityCard)
}

function removeButtonFunction(cityCard)
{
  cityCard.querySelector(".cityCard__deleteCity").addEventListener('click', ()=>{
    let cityName = cityCard.querySelector(".cityCard__cityName").textContent
    let localStorage = getLocalStorage()
    localStorage.delete(cityName.toLowerCase())
    cityCard.remove()
    saveToLocalStorage(localStorage)
  })
}

function createCityCardBase(city)
{
  let cityCard = document.createElement('div')
  cityCard.classList.add('cityCard', 'container')
  cityCard.innerHTML = cityCardBase(city)
  return cityCard
}

function createCityWeekDayRow(cityApiResponse, weekDay)
{
  let dayRow = document.createElement('div')
  dayRow.classList.add('accordion-item')

  let dayStartingHours = new Date()
  dayStartingHours.setHours(7, 0, 0)
  let dayEndingHours = new Date()
  dayEndingHours.setHours(23, 0, 0)
  let nightStartingHours = new Date()
  nightStartingHours.setHours(0, 0, 0)
  let nightEndingHours = new Date()
  nightEndingHours.setHours(6, 0, 0)
  let dayInfo = {
    conditionCode: getCommonDayCoditionCode(cityApiResponse, weekDay),
    dayTemp: averageTempInRange(cityApiResponse, weekDay, dayStartingHours.getHours(), dayEndingHours.getHours()),
    nightTemp: averageTempInRange(cityApiResponse, weekDay, nightStartingHours.getHours(), nightEndingHours.getHours())
  };

  dayRow.innerHTML = cityWeekDayComponent(cityApiResponse.place.name, weekDay, dayInfo)

  let hourHolder = dayRow.querySelector(".dayContent")
  fillDayContent(dayRow, cityApiResponse, weekDay)
  return dayRow
}

function fillDayContent(dayRow, cityApiResponse, weekDay)
{
  let weekDayTimesStamps = (get8TimeForWeekDay(cityApiResponse,weekDay))
  for(let hourComponentIndex = 0; hourComponentIndex < weekDayTimesStamps.length; hourComponentIndex++)
  {
    let hourInfo = {
      time: convertDateToEET(weekDayTimesStamps[hourComponentIndex].forecastTimeUtc).getHours(),
      conditionCode: weekDayTimesStamps[hourComponentIndex].conditionCode,
      tempreture: weekDayTimesStamps[hourComponentIndex].airTemperature
    }
    dayRow.querySelector(".dayContent").appendChild(createDayComponent(hourInfo.time + ":00", hourInfo.conditionCode, hourInfo.tempreture))
  }
}

function createDayComponent(time, conditionCode, temperature)
{
  let hourComponent = document.createElement('div')
  hourComponent.classList.add('dayContent__hour')
  hourComponent.innerHTML = hourOfDayComponent(time, conditionCode, temperature)
  return hourComponent
}

const cityCardBase = (city)=>{
    return `
      <div class="row justify-content-between">
          <h2 class="cityCard__cityName col-6">${city}</h2>
          <button type="button"class="cityCard__deleteCity btn btn-secondary col-6">Remove</button>
      </div>
      <div class="accordion" id="accordion${city}">
      </div>
    `
}

const cityWeekDayComponent = (city, weekDay, dayInfo)=>{
    return `
    <div class="accordion-item">
      <h2 class="accordion-header">
        <button class="accordion-button collapsed cityCard__day" type="button" data-bs-toggle="collapse" data-bs-target="#collapse${city}${weekDay}" aria-expanded="false" aria-controls="collapse${city}${weekDay}">      
          <h3 class="cityCard__day__weekDay">${weekNumberToWord(weekDay)}</h3>
          <div class="cityCard__day__conditionImage"><img src="${conditionCodeToImage(dayInfo.conditionCode)}" alt=""></div>
          <h3 class="cityCard__day__dayTemperature">${dayInfo.dayTemp}°</h3>
          <h3 class="cityCard__day__nightTemperature">${dayInfo.nightTemp}°</h3>        
        </button>
      </h2>
        <div id="collapse${city}${weekDay}" class="accordion-collapse collapse" data-bs-parent="#accordion${city}">
        <div class="accordion-body dayContent">
           
        </div>
      </div>
    </div>
    `
}

const hourOfDayComponent = (time, conditionCode, temperature)=>{
    return `
      <h4 class="dayContent__hour__time">${time}</h4>
      <div class="dayContent__hour__conditionImage">
        <img src="${conditionCodeToImage(conditionCode)}" alt="">
      </div>
      <h4 class="dayContent__hour__temperature">${temperature}°</h4>
    `
}