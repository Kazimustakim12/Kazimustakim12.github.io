// api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={your api key}
// fetch('=36a61779549761387d79710b4ae3f7bc')
//kelvin
const kelvin = -273.15;
const cityName = document.querySelector(".search");
const container = document.querySelector(".container-body");
const temp = document.querySelector(".tempvalue");
const cityvalue = document.querySelector(".cityvalue");
const button = document.querySelector(".button");
const descripition = document.querySelector(".descripitionValue");
const imageIcon = document.querySelector(".image-icon");
const BodyBackground = document.querySelector(".bg-img");
const alert = document.querySelector(".alert");
var key = config.SECRETAPI_KEY;
console.log(container);
console.log(BodyBackground);

//function desclration
function displayWheather() {
  temp.innerHTML = Math.floor(weather.tempvalue);
  cityvalue.innerHTML = weather.city;
  descripition.innerHTML = weather.descripitionValue;
  imageIcon.innerHTML = `<img
    src="./png/main/${weather.image}.png"
    alt="sunny cloud"
    id="image"/>`;

  // BodyBackground.style.background-image = "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
  // url('photographer.jpg'),
  // url(./png/${weather.image}.jpg)";
  BodyBackground.style.backgroundImage = `linear-gradient(
		rgba(90, 85, 85, 0.718), rgba(74, 68, 68, 0.5)
	),url('./png/main/${weather.image}.jpg')`;
  alert.style.visibility = "visible";
  // console.log(tempvalue);
}

//app data
const weather = {};

// console.log(cityName.value);
button.addEventListener("click", () => {
  fetch(
    "https://api.openweathermap.org/data/2.5/weather?q=" +
      cityName.value +
      "&appid=" +
      key
  )
    .then((response) => response.json())
    .then((data) => {
      console.log(data);

      weather.tempvalue = data.main.temp + kelvin;
      weather.city = data.name;
      weather.descripitionValue = data.weather[0].description;
      weather.image = data.weather[0].icon;
    })
    .then(function () {
      displayWheather();
    })
    .catch((err) => alert("PLz enter the correct City name"));
});
