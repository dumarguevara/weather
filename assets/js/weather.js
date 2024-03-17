import { weather_data } from './data.js';


let loadDayForecastData = () => {
    let [ guayaquil, ambato, tena] = weather_data;
    let {city, date, temperature, cloudiness, wind, rainfall, forecast_today, ...other} = guayaquil

    let cityHTML = document.getElementById("city")
    cityHTML.innerHTML = city;

    let dateHTML = document.getElementById("date")
    dateHTML.innerHTML = date;

    let maxtemperatureHTML = document.getElementById("maxtemperature")
    maxtemperatureHTML.innerHTML = maxtemperature;
    
    let cloudinessHTML = document.getElementById("cloudiness")
    cloudinessHTML.innerHTML = cloudiness;

    let windHTML = document.getElementById("wind")
    windHTML.innerHTML = wind;

    let rainfallHTML = document.getElementById("rainfall")
    rainfallHTML.innerHTML = rainfall;

    let late_iconHTML = document.getElementById("late_icon")
    late_iconHTML.innerHTML = forecast_today[0].icon;

    let late_temperatureHTML = document.getElementById("late_temperature")
    late_temperatureHTML.innerHTML = forecast_today[0].temperature;
    
    let late_forecastHTML = document.getElementById("late_forecast")
    late_forecastHTML.innerHTML = forecast_today[0].forecast;
    
    let late_textHTML = document.getElementById("late_text")
    late_textHTML.innerHTML = forecast_today[0].text;

    let night_iconHTML = document.getElementById("night_icon")
    night_iconHTML.innerHTML = forecast_today[1].icon;

    let night_temperatureHTML = document.getElementById("night_temperature")
    night_temperatureHTML.innerHTML = forecast_today[1].temperature;
    
    let night_forecastHTML = document.getElementById("night_forecast")
    night_forecastHTML.innerHTML = forecast_today[1].forecast;
    
    let night_textHTML = document.getElementById("night_text")
    night_textHTML.innerHTML = forecast_today[1].text;    
};
/*
let loadWeekForecastData = () => {

    let [ guayaquil, ambato, tena] = weather_data;
    let [forecast_week, ...other] = guayaquil

    let [day1, day2, day3, day4, day5, day6, day7] = forecast_week;

    let{text: text_day1, date: date_day1, icon: icon_day1} = day1;
    let{text: text_day2, date: date_day2, icon: icon_day2} = day2;
    let{text: text_day3, date: date_day3, icon: icon_day3} = day3;
    let{text: text_day4, date: date_day4, icon: icon_day4} = day4;
    let{text: text_day5, date: date_day5, icon: icon_day5} = day5;
    let{text: text_day6, date: date_day6, icon: icon_day6} = day6;
    let{text: text_day7, date: date_day7, icon: icon_day7} = day7;

    
    
    let message_day1 =
     '<li class="list-group-item border-0 d-flex justify-content-between ps-0 mb-2 border-radius-lg">
      <div class="d-flex flex-column">
        <h6 class="mb-1 text-dark font-weight-bold text-sm">${text_day1}</h6>
        <span class="text-xs">${date_day1}</span>
      </div>
      <div class="d-flex align-items-center ">
      <span class="font-weight-bold text-dark mx-2">${forecast_week.temperature[0].max}</span> |  <span class="text-dark mx-2">${forecast_week[0].min}</span>
      <div class="ms-4"><i class="material-icons fs-2 me-1 rainy">${icon_day1}</i></div>
    </div>
    </li>'; 

    let message_day2 = '<li class="list-group-item border-0 d-flex justify-content-between ps-0 mb-2 border-radius-lg">
    <div class="d-flex flex-column">
      <h6 class="mb-1 text-dark font-weight-bold text-sm">${text_day2}</h6>
      <span class="text-xs">${date_day2}</span>
    </div>
    <div class="d-flex align-items-center ">
      <span class="font-weight-bold text-dark mx-2">${forecast_week.temperature[1].max}</span> |  <span class="text-dark mx-2">${forecast_week[1].min}</span>
      <div class="ms-4"><i class="material-icons fs-2 me-1 rainy">${icon_day2}</i></div>
    </div></li>';

    let message_day3 = '<li class="list-group-item border-0 d-flex justify-content-between ps-0 mb-2 border-radius-lg">
    <div class="d-flex flex-column">
      <h6 class="mb-1 text-dark font-weight-bold text-sm">${text_day3}</h6>
      <span class="text-xs">${date_day3}</span>
    </div>
    <div class="d-flex align-items-center ">
      <span class="font-weight-bold text-dark mx-2">${forecast_week.temperature[2].max}</span> |  <span class="text-dark mx-2">${forecast_week[2].min}</span>
      <div class="ms-4"><i class="material-icons fs-2 me-1 rainy">${icon_day3}</i></div>
    </div></li>';

    let message_day4 = '<li class="list-group-item border-0 d-flex justify-content-between ps-0 mb-2 border-radius-lg">
    <div class="d-flex flex-column">
      <h6 class="mb-1 text-dark font-weight-bold text-sm">${text_day4}</h6>
      <span class="text-xs">${date_day4}</span>
    </div>
    <div class="d-flex align-items-center ">
      <span class="font-weight-bold text-dark mx-2">${forecast_week.temperature[3].max}</span> |  <span class="text-dark mx-2">${forecast_week[3].min}</span>
      <div class="ms-4"><i class="material-icons fs-2 me-1 rainy">${icon_day4}</i></div>
    </div></li>';

    let message_day5 = '<li class="list-group-item border-0 d-flex justify-content-between ps-0 mb-2 border-radius-lg">
    <div class="d-flex flex-column">
      <h6 class="mb-1 text-dark font-weight-bold text-sm">${text_day5}</h6>
      <span class="text-xs">${date_day5}</span>
    </div>
    <div class="d-flex align-items-center ">
      <span class="font-weight-bold text-dark mx-2">${forecast_week.temperature[4].max}</span> |  <span class="text-dark mx-2">${forecast_week[4].min}</span>
      <div class="ms-4"><i class="material-icons fs-2 me-1 rainy">${icon_day5}</i></div>
    </div></li>';

    let message_day6 = '<li class="list-group-item border-0 d-flex justify-content-between ps-0 mb-2 border-radius-lg">
    <div class="d-flex flex-column">
      <h6 class="mb-1 text-dark font-weight-bold text-sm">${text_day6}</h6>
      <span class="text-xs">${date_day6}</span>
    </div>
    <div class="d-flex align-items-center ">
      <span class="font-weight-bold text-dark mx-2">${forecast_week.temperature[5].max}</span> |  <span class="text-dark mx-2">${forecast_week[5].min}</span>
      <div class="ms-4"><i class="material-icons fs-2 me-1 rainy">${icon_day6}</i></div>
    </div></li>';

    let message_day7 = '<li class="list-group-item border-0 d-flex justify-content-between ps-0 mb-2 border-radius-lg">
    <div class="d-flex flex-column">
      <h6 class="mb-1 text-dark font-weight-bold text-sm">${text_day7}</h6>
      <span class="text-xs">${date_day7}</span>
    </div>
    <div class="d-flex align-items-center ">
      <span class="font-weight-bold text-dark mx-2">${forecast_week.temperature[6].max}</span> |  <span class="text-dark mx-2">${forecast_week[6].min}</span>
      <div class="ms-4"><i class="material-icons fs-2 me-1 rainy">${icon_day7}</i></div>
    </div></li>';

    let listOfElements = document.getElementById('list-group')

    let [dia1, dia2, dia3, dia4, dia5, dia6, dia7] = listOfElements;

    dia1.innerHTML=message_day1;
    dia2.innerHTML=message_day2;
    dia3.innerHTML=message_day3;
    dia4.innerHTML=message_day4;
    dia5.innerHTML=message_day5;
    dia6.innerHTML=message_day6;
    dia7.innerHTML=message_day7;  
	
	
};*/

document.addEventListener("DOMContentLoaded", (event) => {
  loadDayForecastData();

  let botonHTML = document.getElementById("loadinfo")
  botonHTML.addEventListener('click', (event) => {
    loadWeekForecastData();
});
  
});
