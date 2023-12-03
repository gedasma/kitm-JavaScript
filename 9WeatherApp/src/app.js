import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import getCityList from './modules/getCityList'
import addCity from "./modules/addCity";
import renderCitiesFromLocalStorage from "./modules/renderCitiesFromLocalStorage";

getCityList();
renderCitiesFromLocalStorage();
addCity();