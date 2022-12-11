const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "d12c30e26cmsh994bb2aac6e6306p1cf437jsnceb748663da8",
    "X-RapidAPI-Host": "weather-by-api-ninjas.p.rapidapi.com",
  },
};

const getWeather = (city) => {
  cityname.innerHTML = city;
  fetch(
    "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=" + city,
    options
  )
    .then((response) => response.json())
    .then((response) => {
      console.log(response);
      cloud_pct.innerHTML = response.cloud_pct;
      temp.innerHTML = response.temp;
      feels_like.innerHTML = response.feels_like;
      humidity.innerHTML = response.humidity;
      min_temp.innerHTML = response.min_temp;
      max_temp.innerHTML = response.max_temp;
      wind_speed.innerHTML = response.wind_speed;
      //   wind_degrees.innerHTML = response.wind_degrees;
      sunrise.innerHTML = response.sunrise;
      sunset.innerHTML = response.sunset;
    })
    .catch((err) => console.error(err));
};

let submit = document.getElementById("submit_btn");

submit.addEventListener("click", (e) => {
  e.preventDefault();
  getWeather(city.value);
});

getWeather("Delhi");

// For Mumbai
fetch(
  "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Mumbai",
  options
)
  .then((response) => response.json())
  .then((response) => {
    console.log(response);
    temp1.innerHTML = response.temp;
    feels_like1.innerHTML = response.feels_like;
    humidity1.innerHTML = response.humidity;
    min_temp1.innerHTML = response.min_temp;
    max_temp1.innerHTML = response.max_temp;
    wind_speed1.innerHTML = response.wind_speed;
    sunrise1.innerHTML = response.sunrise;
    sunset1.innerHTML = response.sunset;
  })
  .catch((err) => console.error(err));



// For Jaipur
fetch(
    "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Jaipur",
    options
  )
    .then((response) => response.json())
    .then((response) => {
      console.log(response);
      temp2.innerHTML = response.temp;
      feels_like2.innerHTML = response.feels_like;
      humidity2.innerHTML = response.humidity;
      min_temp2.innerHTML = response.min_temp;
      max_temp2.innerHTML = response.max_temp;
      wind_speed2.innerHTML = response.wind_speed;
      sunrise2.innerHTML = response.sunrise;
      sunset2.innerHTML = response.sunset;
    })
    .catch((err) => console.error(err));



// For Kolkata
fetch(
    "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Kolkata",
    options
  )
    .then((response) => response.json())
    .then((response) => {
      console.log(response);
      temp3.innerHTML = response.temp;
      feels_like3.innerHTML = response.feels_like;
      humidity3.innerHTML = response.humidity;
      min_temp3.innerHTML = response.min_temp;
      max_temp3.innerHTML = response.max_temp;
      wind_speed3.innerHTML = response.wind_speed;
      sunrise3.innerHTML = response.sunrise;
      sunset3.innerHTML = response.sunset;
    })
    .catch((err) => console.error(err));



// For New York
fetch(
    "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Bihar",
    options
  )
    .then((response) => response.json())
    .then((response) => {
      console.log(response);
      temp4.innerHTML = response.temp;
      feels_like4.innerHTML = response.feels_like;
      humidity4.innerHTML = response.humidity;
      min_temp4.innerHTML = response.min_temp;
      max_temp4.innerHTML = response.max_temp;
      wind_speed4.innerHTML = response.wind_speed;
      sunrise4.innerHTML = response.sunrise;
      sunset4.innerHTML = response.sunset;
    })
    .catch((err) => console.error(err));

