const apiKey = "a70eb42ed674c770fdd60491691ac220";
const url = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const userInput = document.querySelector("input");
const button = document.querySelector("#searchButton");
const temperature = document.querySelector('#temp')
const image = document.querySelector('#weatherImage')
const city = document.querySelector('#city')
const humidity = document.getElementById('humid')
const speed = document.getElementById('speed')

async function getWeatherData(api) {
  try {
    const response = await fetch(api);
    const data = await response.json();
    temperature.innerHTML = `${data.main.temp}°C`;
    city.innerHTML = `${data.name}`
    image.setAttribute("src", `../images/${data.weather[0].main.toLowerCase()}.png`);
    humidity.innerHTML = `${data.main.humidity}%`
    speed.innerHTML = `${data.wind.speed}km/h`;
  } catch (error) {
    console.log(`Error: ${error}`);
    alert('Check Spelling')
  }
}

button.addEventListener(
  "click",
  function () {
    const api = `${url}${userInput.value}&appid=${apiKey}`;
    // getWeatherData(api)

    fetch(api)
    .then( (res)=>{
        const data = res.json()
        return data
    } )
    .then( (data)=>{
        temperature.innerHTML = `${data.main.temp}°C`;
        city.innerHTML = `${data.name}`;
        image.setAttribute(
          "src",
          `../images/${data.weather[0].main.toLowerCase()}.png`
        );
        humidity.innerHTML = `${data.main.humidity}%`;
        speed.innerHTML = `${data.wind.speed}km/h`;
    } )
    .catch( (err)=>{
        console.log(`Error: ${err}`);
        alert("Wronf Spelling")
    } )

  },
  false
);
